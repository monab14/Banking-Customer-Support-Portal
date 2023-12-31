import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import { v4 as uuidv4 } from 'uuid'; 
import { useNavigate } from 'react-router-dom';
import registrationImage from '../images/registrationImage.jpeg'
import smallImage from '../images/smallImage.png'
import NavBar from './NavBar';
import axios from 'axios';

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    aadharNumber: '',
    gender: '',
    address: '',
    customerId: '',
    password: '',
    confirmPassword: '',
    isOTPVerified: false,
    enteredOTP: '',
    isPasswordValid: false
});

const validateAadhar = (aadhar) => {
  const aadharRegex = /^\d{12}$/;
  return aadharRegex.test(aadhar);
};

const validatePhoneNumber = (phoneNumber) => {
const phoneRegex = /^(?:\+91)?\d{10}$/;
// Updated regex for +91 format
  return phoneRegex.test(phoneNumber);
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.endsWith('@gmail.com');
};

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,20}$/;
    return passwordRegex.test(password);
  };
    
    const generateNumericCustomerId = () => {
    const numericCustomerId = Math.floor(100000 + Math.random() * 900000); 
    setFormData({ ...formData, customerId: numericCustomerId.toString() }); 
    return numericCustomerId.toString();
};
  
const generateOTP = () => {
    let digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
};

const sendEmail = (otp) => {
    const templateParams = {
    to_email: formData.email,
    otp: otp,
    };
    emailjs
      .send(
        "service_uo2syzr",
        "template_l4vc8gv",
        templateParams,
        "g33NIXa0pnyQ6Fh11"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
};
const [showOTPInput, setShowOTPInput] = useState(false);
    
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};
const handleSendOTP = (e) => {
    e.preventDefault();
    const otp = generateOTP();
    sendEmail(otp);
    toast.success('OTP sent to your email. Please check your email for OTP.');
    setShowOTPInput(true);
};
    
const handleOTPSubmit = (e) => {
    e.preventDefault();
    const { enteredOTP, aadharNumber } = formData; 
   
    const otpRegex = /^\d{4}$/;
    const aadharRegex = /^\d{12}$/;
    if (!otpRegex.test(enteredOTP)) {
            toast.error('Invalid OTP. OTP must be a 4-digit number.');
            return;
        }

        if (!aadharRegex.test(aadharNumber)) {
            toast.error('Invalid Aadhar number. Aadhar number must be a 12-digit number.');
            return;
        }
         const otpFromEmail = formData.enteredOTP;
    if (enteredOTP === otpFromEmail) {
    setFormData({ ...formData, isOTPVerified: true });
    toast.success('OTP verified successfully!');
    } else {
    toast.error('Invalid OTP. Please try again.');
    }
};
    
    const sendRegistrationEmail = (customerId) => {
    const welcomeMessage = 'Welcome to our service! Thank you for registering with us.';
    const templateParams = {
    to_email: formData.email,
    customer_id: customerId,
    welcome_message: welcomeMessage,
    };
    emailjs
      .send(
        "service_uo2syzr",
        "template_lu0tbun",
        templateParams,
        "g33NIXa0pnyQ6Fh11"
      )
      .then((response) => {
        console.log("Registration Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Registration Email sending failed:", error);
      });
};


const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword, aadharNumber, phoneNumber, email, enteredOTP } = formData;

    if (!validateAadhar(aadharNumber)) {
      toast.error('Invalid Aadhar Number. Please enter a 12-digit number.');
      return;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      toast.error('Invalid Phone Number. Please enter a 10-digit number.');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Invalid Email Address. Please enter a valid email.');
      return;
    }

    if (!validatePassword(password)) {
      toast.error('Invalid Password. It must be 8-20 characters long with at least one digit, one uppercase, one lowercase, and one special character.');
      return;
    }
    e.preventDefault();
    
    if (password === confirmPassword) {

    const customerId = generateNumericCustomerId(); 
    sendRegistrationEmail(customerId);
        
      try {
                const response = await axios.post('http://localhost:8090/api/addcustomer', formData);
                console.log(response.data); 
                toast.success('Registration successful!');
                navigate(`/thank-you?customerId=${customerId}`);
            } catch (error) {
                console.error('Error occurred while registering:', error);
                toast.error('Registration failed. Please try again.');
            }
        } else {
            toast.error('Passwords do not match. Please try again.');
        }
    }; 

    
return (
    <div>
        <NavBar/>
    <div className="container mt-5 mb-5 ">
        
    <div className="row justify-content-center" >
        <div className="col-md-6" style={{ backgroundColor: '#F0F2EF',  borderRadius: '10px' }} >
        <div className= "container mt-5 mb-2">
        <img src={registrationImage} alt="Registration" className="img-fluid" />
        </div>
        </div>
        
        <div className="col-md-6 mt-2 mb-5  " >
        <div className="card ms-5 row justify-content-center align-items-center" style={{ backgroundColor: '#F0F2EF', padding: '40px' }}>
        <div className="col-md-3 text-center">
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '150px',
            }}>
        <img src={smallImage} alt="Small" className="img-fluid" style={{ maxWidth: '170%', maxHeight: '170%' }} />
        </div>
        </div>
            <div className="card-body  mb-5">
            <h2 className="card-title text-center mb-5 " style = {{ color : '#871f40', padding: '10px'}}>Customer Registration</h2>
            <form onSubmit={showOTPInput ? handleOTPSubmit : handleSendOTP}>
                <div className="mb-3 auto-col" >
                <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required 
                    style={{
                    color: '#871f40', 
                    }}
                />
                </div>
                <div className="mb-3 auto-col" >
                <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    style={{
                    color: '#871f40', 
                    }}
                />
                </div>
               
                <div className="mb-3">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="floatingInputValue"
                    placeholder="xyz@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                    color: '#871f40', 
                    }}
                />
                </div>
                <div className="mb-3">
                <input
                    type="tel"
                    name="phoneNumber"
                    className="form-control"
                    placeholder="+91XXXXXXXXXX "
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    style={{
                    color: '#871f40', 
                    }}
                />
                </div>
                <div className="mb-3">
                <input
                    type="text"
                    name="aadharNumber"
                    className="form-control"
                    placeholder="Aadhar Number"
                    value={formData.aadharNumber}
                    onChange={handleChange}
                    required
                    style={{
                    color: '#871f40', 
                    }}
                />
                </div>
                <div className="mb-3">
                <select
                    name="gender"
                    className="form-select"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    style = {{color: '#871f40' }}
                >
                    <option value=""> Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </div>
                <div className="mb-3">
                <textarea
                    name="address"
                    className="form-control"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    style={{
                    color: '#871f40', 
                    }}
                />
                </div>
            {!formData.isOTPVerified && showOTPInput ? (
            <div className="mb-3">
            <input
            type="text"
            name="enteredOTP"
            className="form-control"
            placeholder="Enter OTP"
            value={formData.enteredOTP}
            onChange={handleChange}
            required
            style={{
            color: '#871f40', 
            }}
            />
        </div>
        ) : null}
            {!formData.isOTPVerified ? (
                <div className = "text-center">
                <button type="submit" style={{ margin: '20px 0',
                padding: '10px 20px',
                fontSize: '18px',
                cursor: 'pointer',
                backgroundColor: '#871f40', 
                color: '#F0F2EF', 
                borderRadius: '20px', 
                border: 'none',
                }} onClick={showOTPInput ? handleOTPSubmit : handleSendOTP}>
                {showOTPInput ? 'Verify OTP' : 'Send OTP'}
                </button>
                </div>
                ) : (
                <>
                <div className ="row g-3 align-items-center mt-2">
                <div className ="col-auto">
                <label for="inputPassword6" class="form-label" style={{
                    color: '#871f40', 
                    }}>Enter Password  :</label>
                </div>
                    <div className="mb-3 col mt-3">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={{
                    color: '#871f40', 
                    }}
                    />
                    </div>
                    
                    </div>
                <div className ="row g-3 align-items-center mt-3">
                <div className ="col-auto">
                <label for="inputPassword6" class="col-form-label" style={{
                    color: '#871f40'
                    }}>Confirm Password :</label>
                </div>      
                    <div className="mb-3 col mt-3">
                    <input
                        type="password"
                        name="confirmPassword"
                        className="form-control"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        style={{
                    color: '#871f40'
                    }}
                    />
                    </div>
                    
                </div>
                <div className = "text-center">
                <button type="submit" style={{ margin: '20px 0',
                padding: '10px 20px',
                fontSize: '18px',
                cursor: 'pointer',
                backgroundColor: '#871f40', 
                color: '#F0F2EF', 
                borderRadius: '20px', 
                border: 'none',
                }}
                onClick={handlePasswordSubmit}
                >
                Register
                </button>
                </div>
                </>
                )}
            </form>
            </div>
        </div>
        </div>
    </div>
    <ToastContainer />
    </div> </div>
  );
};

export default RegistrationForm;
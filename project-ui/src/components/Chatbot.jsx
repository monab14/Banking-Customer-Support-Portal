import React, { useState } from 'react';
import { FaTimes, FaPaperPlane } from 'react-icons/fa'; // Importing Font Awesome close icon
import AskRadz from '../images/AskRadz.png';
import axios from 'axios';

const ChatMessage = ({ type, message }) => {
  const messageStyle = {
    textAlign: type === 'user' ? 'right' : 'left',
    marginBottom: '10px',
    color: type === 'user' ? '#fff' : '#333',
  };
  const userMessageStyle = {
    ...messageStyle,
    textAlign: 'right',
    color: '#fff',
  };

  const botMessageStyle = {
    ...messageStyle,
    textAlign: 'left',
    color: '#fff',
  };
  return <div style={type === 'user' ? userMessageStyle : botMessageStyle}>{message}</div>;
};

const Chatbot = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [isValidationStep, setIsValidationStep] = useState(true);
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const [showEmailForm, setShowEmailForm] = useState(false);
 const [showAddressForm, setShowAddressForm] = useState(false);
    const [showMobileNumberForm, setShowMobileNumberForm] = useState(false);
    
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:8090/api/welcome', {
        username,
        password,
      }); 
    console.log(response.data);
    setIsLoggedIn(true);
    setShowLogin(false);
    setChatHistory([...chatHistory, { type: 'bot', message: 'Logged in successfully.' }]);
  } catch (error) {
    
    console.error('Error occurred during login:', error);
    
  }
};
  const chatbotContainerStyle = {
    position: 'fixed',
    bottom: '80px',
    right: '20px',
    backgroundColor: '#871f40',
    color: 'white',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)',
    display: isChatbotVisible ? 'flex' : 'none',
    flexDirection: 'column',
    padding: '20px',
    zIndex: '999',
    overflowY: 'scroll',
    backgroundImage: `url(${require('../images/BGImage.png')})`
  };

  const navbarStyle = {
    backgroundColor: '#750D37',
    color: '#F0F2EF',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const closeIconStyle = {
    cursor: 'pointer',
  };

  const acceptTermsStyle = {
    color: '#750D37',
    cursor: 'pointer',
    textDecoration: 'underline',
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  };
const loginFormStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)',
    color: '#333',
  };

  const selectedButtonStyle = {
    backgroundColor: '#750D37',
    color: '#F0F2EF',
  };
  const submitButtonStyle = {
    width: '80%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: acceptedTerms ? '#750D37' : '#ccc',
    color: acceptedTerms ? 'white' : '#666',
    marginTop: '10px',
    cursor: acceptedTerms ? 'pointer' : 'not-allowed',
    margin: '0 auto',
    alignItems: 'center',
  };

  const handleTermsChange = () => {
    setAcceptedTerms(!acceptedTerms);
    setShowValidationMessage(false);
  };
const handleLogin = () => {
    
    setIsLoggedIn(true);
  };

  const closeChatbot = () => {
    setIsChatbotVisible(false);
    setIsValidationStep(true);
    setAcceptedTerms(false);
    setUserMessage('');
    setChatHistory([])
  };

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };
   const handleSubmit = () => {
  if (isValidationStep) {
    if (!acceptedTerms) {
      setShowValidationMessage(true);
    } else {
      setIsValidationStep(false);
      setChatHistory([...chatHistory, { type: 'user' }]);
    }
  } else {
   setChatHistory([...chatHistory, { type: 'user', message: userMessage }]);
      
    }
    setUserMessage(''); 
   };
  const updateEmail = async (newEmail, customerId, setChatHistory) => {
  try {
    const response = await fetch(`http://localhost:8090/api/customer/${customerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: newEmail }),
    });

    if (response.ok) {
      setChatHistory([...chatHistory, { type: 'bot', message: 'Email updated successfully.' }]);
    } else {
      console.error('Failed to update email');
      setChatHistory([...chatHistory, { type: 'bot', message: 'Failed to update email. Please try again later.' }]);
    }
  } catch (error) {
    console.error('Error updating email:', error);
    
    setChatHistory([...chatHistory, { type: 'bot', message: 'Error updating email. Please try again later.' }]);
  }
};

const handleAddressFormSubmit = (e) => {
  e.preventDefault();
  const newAddress = e.target.elements.address.value;
  const customerId = 1; 
  handleAddressUpdate(newAddress, customerId); 
  setShowAddressForm(false);
};

const handleAddressUpdate = async (newAddress, customerId) => {
  try {
    const response = await fetch(`http://localhost:8090/api/customer/${customerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address: newAddress }),
    });

    if (response.ok) {
      setChatHistory([...chatHistory, { type: 'bot', message: 'Address updated successfully.' }]);
    } else {
      console.error('Failed to update address');
      setChatHistory([...chatHistory, { type: 'bot', message: 'Failed to update address. Please try again later.' }]);
    }
  } catch (error) {
    console.error('Error updating address:', error);
    setChatHistory([...chatHistory, { type: 'bot', message: 'Error updating address. Please try again later.' }]);
  }
};

    const handleMobileNumberFormSubmit = (e) => {
  e.preventDefault();
  const newMobileNumber = e.target.elements.mobileNumber.value;
  const customerId = 1; 
  handleMobileNumberUpdate(newMobileNumber, customerId); 
  setShowMobileNumberForm(false);
};

const handleMobileNumberUpdate = async (newMobileNumber, customerId) => {
  try {
    const response = await fetch(`http://localhost:8090/api/customer/${customerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobileNumber: newMobileNumber }),
    });

    if (response.ok) {
      setChatHistory([...chatHistory, { type: 'bot', message: 'Mobile number updated successfully.' }]);
    } else {
      console.error('Failed to update mobile number');
      setChatHistory([...chatHistory, { type: 'bot', message: 'Failed to update mobile number. Please try again later.' }]);
    }
  } catch (error) {
    console.error('Error updating mobile number:', error);
    setChatHistory([...chatHistory, { type: 'bot', message: 'Error updating mobile number. Please try again later.' }]);
  }
};


    const handleButtonClick = (action) => {
        if (!isLoggedIn) {
         setShowLogin(true);
      setChatHistory([...chatHistory, { type: 'bot' }]);
    } else {
      switch (action) {
        case 'Update mobile number':
          setChatHistory([...chatHistory, { type: 'bot', message: ' Please enter your new Mobile number.' }]);
          setShowMobileNumberForm(true);
          break;
        case 'Update address':
          setChatHistory([...chatHistory, { type: 'bot', message: 'Please enter your new Address.' }]);
          setShowAddressForm(true);
          break;
        case 'PIN reset':
          setChatHistory([...chatHistory, { type: 'bot', message: 'PIN reset successful.' }]);
          break;
        case 'Update E-mail':
          setChatHistory([...chatHistory, { type: 'bot', message: 'Please enter your new email address:'  }]);
          setShowEmailForm(true);
          break;
        default:
          break;
      }
    }; 
    };
    
    const handleEmailFormSubmit = (e) => {
  e.preventDefault();
  const newEmail = e.target.elements.email.value;
  const customerId = 1; 
  handleEmailUpdate(newEmail, customerId); 
  setShowEmailForm(false);
};

const handleEmailUpdate = async (newEmail, customerId) => {
    try {
      await updateEmail(newEmail, customerId, setChatHistory);
    } catch (error) {
      console.error('Error updating email:', error);
      
    }
  };
  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '999'}}>
      {isChatbotVisible && (
        <div style={chatbotContainerStyle}>
          <div className='mb-2' style={navbarStyle}>
            
            <h4>Ask Radz</h4>
            <span style={closeIconStyle} onClick={closeChatbot}>
              <FaTimes />
            </span>
        </div>
                  
          <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            {!isValidationStep && !showLogin &&  (
                          <div style={{
                              padding: '20px',
                              backgroundImage: `url(${require('../images/BGImage.png')})`,  // Replace "path/to/your/image.jpg" with the actual path to your background image
                              backgroundSize: 'cover',
                              borderRadius: '10px',
                              backgroundRepeat: 'no-repeat',
                              flex: 1, display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'flex-end',
                              boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)'
                          }}> 
                <div className ='mb-4'>
                <img
              src={AskRadz}
              alt="Radz Icon"
              style={{
                  height: '100px',
                  width: '140px',
                  marginRight: '10px',
                borderRadius: '35px',
              }}
                />
            </div>
                <h4>Hi, Welcome To Axis Bank!</h4>
                <p>I'm Axis Ask Radz, your personal banking assistant</p>
                <div style={{ backgroundColor: '#d3d3d3 ', padding: '5px', borderRadius: '10px' , color: '#750D37', fontSize: '15px'}}>
                    <p>Do you want help with any of these services?</p>
                                 
              </div>
                <div style={{ marginTop: '10px' }}>
                                      
                  <button
                    style={{
                width: '130px',
                padding: '5px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#d3d3d3',
                color: '#750D37',
                fontSize: '15px',
                margin: '10px',
                cursor: 'pointer',
              }}
                    onClick={() => handleButtonClick('Update mobile number')}
                  >
                    Update Mobile Number
                  </button>
                  <button
                    style={{
                width: '150px',
                padding: '5px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#d3d3d3',
                color: '#750D37',
                fontSize: '15px',
                margin: '10px',
                cursor: 'pointer',
              }}
                    onClick={() => handleButtonClick('Update address')}
                  >
                    Update Address
                  </button>
                  <button
                    style={{
                width: '120px',
                padding: '5px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#d3d3d3',
                color: '#750D37',
                fontSize: '15px',
                margin: '10px',
                cursor: 'pointer',
              }}
                    onClick={() => handleButtonClick('PIN reset')}
                  >
                    PIN Reset
                    </button>
                <button
                    style={{
                width: '130px',
                padding: '5px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: '#d3d3d3',
                color: '#750D37',
                fontSize: '15px',
                margin: '10px',
                cursor: 'pointer',
              }}
                    onClick={() => handleButtonClick('Update E-mail')}
                  >
                    Update E-Mail
                  </button>
                </div>
                </div>
                      )}
          {showEmailForm && (
  <form
    style={{
      backgroundColor: '#f2f2f2',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)',
      marginTop: '20px',
    }}
    onSubmit={handleEmailFormSubmit}
  >
    <input
      type="email"
      name="email"
      placeholder="Enter your new email address"
      required
      style={{
        flex: 1,
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
      }}
    />
    <button
      type="submit"
      style={{
        backgroundColor: '#750D37',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        marginTop: '20px',
      }}
    >
      Update Email
    </button>
  </form>
)}

{showMobileNumberForm && (
  <form
    style={{
      backgroundColor: '#f2f2f2',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)',
      marginTop: '20px',
    }}
    onSubmit={handleMobileNumberFormSubmit}
  >
    <input
      type="text"
      name="mobileNumber"
      placeholder="Enter your new mobile number"
      required
      style={{
        flex: 1,
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
      }}
    />
    <button
      type="submit"
      style={{
        backgroundColor: '#750D37',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        marginTop: '20px',
      }}
    >
      Update Mobile Number
    </button>
  </form>
)}

{showAddressForm && (
  <form
    style={{
      backgroundColor: '#f2f2f2',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)',
      marginTop: '20px',
    }}
    onSubmit={handleAddressFormSubmit}
  >
    <input
      type="text"
      name="address"
      placeholder="Enter your new address"
      required
      style={{
        flex: 1,
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
      }}
    />
    <button
      type="submit"
      style={{
        backgroundColor: '#750D37',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        marginTop: '20px',
      }}
    >
      Update Address
    </button>
  </form>
)}


    {showLogin && (
        <div style={{ ...chatbotContainerStyle, ...loginFormStyle }}>
        <h4 style={{ color: '#750D37', textAlign: 'center'}}>Login</h4>
   
    <form onSubmit={handleLoginFormSubmit}>
        <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', color: '#750D37', fontWeight: 'bold' }}>
            Username:
        </label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} style={{
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
        boxSizing: 'border-box',
        }} />
        <div style={{ marginBottom: '20px' }}>
         <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#750D37', fontWeight: 'bold' }}>
            Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
        boxSizing: 'border-box',
            }} />
                </div>
                <button type="submit" style={{ ...submitButtonStyle, ...(isLoggedIn ? selectedButtonStyle : {}) }}>
                Log In</button>
              </form>
            </div>
          )}
            
                      <div className='container' style={{
                          padding: '10px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', width: '250px',
                          borderRadius: '8px',
                          border: 'none',
                          backgroundColor: '#750D37',
                          color: '#d3d3d3',
                          fontSize: '15px',
                          margin: '10px',
                          cursor: 'pointer',
                          alignSelf: 'flex-end'
                      }}>
            <div style={{ maxWidth: '80%', alignSelf: 'flex-end' }}>
              {chatHistory.map((chat, index) => (
                <ChatMessage key={index} type={chat.type} message={chat.message} />
              ))}
            </div>
          </div>
                      
            {isValidationStep && (
                <div style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)' }}>
                <div className ='mb-4'>
                <img
              src={AskRadz}
              alt="Radz Icon"
              style={{
                  height: '100px',
                  width: '140px',
                  marginRight: '10px',
                borderRadius: '35px',
              }}
                />
            </div>
                <h4>Hi, Get Started with Axis Ask Radz, your Axis Bank Anytime Assistant!</h4>
                <p>Happy to help you. Just ask & I'll reply in a jiffy.</p>
                <div style={acceptTermsStyle} onClick={handleTermsChange}>
                  <input type="checkbox" style={{ marginRight: '10px' }} />
                  Click here to accept all terms and conditions.
                </div>
                {showValidationMessage && (
                  <p style={{ color: 'red', marginTop: '10px' }}>Message cannot be empty.</p>
                )}
                <div className='text-center' style={{ marginTop: '20px' }}>
                  <button style={submitButtonStyle} onClick={handleSubmit}>
                    Get Started
                  </button>
                </div>
              </div>
                      )}
                      
              
                <div className='input-area' style={{ backgroundColor: '#f2f2f2', padding: '20px', borderRadius: '10px', boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.5)', marginTop: '20px' }}>
                  <input
                    type='text'
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder='Type your message...'
                    style={{
                      flex: 1,
                      padding: '10px',
                      borderRadius: '5px',
                      border: '1px solid #ccc',
                    }}
                  />
                  <button
                    style={{
                      marginLeft: '10px',
                      background: 'none',
                      border: 'none',
                      fontSize: '20px',
                      cursor: 'pointer',
                      color: acceptedTerms ? '#750D37' : '#ccc',
                    }}
                    onClick={handleSubmit}
                    disabled={!acceptedTerms && isValidationStep}
                  >
                    <FaPaperPlane />
                  </button>
                </div>
                  </div>
                  
       </div>
    
      )}
       
    <div className='container' style={{ backgroundColor: '#f2f2f2'}}>
          <img
        src={AskRadz}
        alt="Radz Icon"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          height: '100px', 
          width: '140px', 
          cursor: 'pointer',
          borderRadius: '35px',
        }}
        onClick={toggleChatbot}
      />
          </div>
          
    </div>
   
  );
};

export default Chatbot;

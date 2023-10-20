import React from 'react';
import contactUsTabImage from '../images/contactustab.jpg';
import f1 from '../images/f1.png';
import insta from '../images/insta.png';
import youtube from '../images/youtube.png';
import twitter from '../images/twitter.png';
import MyCard from '../components/MyCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const pageContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '110vh',
    backgroundColor: '#f8f9fa',
    
  };

  const imageContainerStyle = {
    marginTop: '1100px',
    paddingTop: '10px'
  };

  const contactImageStyle = {
    width: '1550px',
    height: '350px',
    border: '2px solid #97144d',
    borderRadius: '10px',
    boxShadow: '5px 5px 5px #888888',
    
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '22%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    background: 'rgba(0, 0, 0, 0.2)',
    padding: '10px',
  };

  const containerStyle = {
    width: '100%',
    padding: '120px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F2EF',
    height: '50px',
  };

  const socialMediaContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px', // Adjust the width as needed
  };

  const socialMediaImageStyle = {
    height: '100px',
    padding: '20px',
  };

  const textBelowImageStyle = {
    textAlign: 'center',
    color: 'black', // Set link text color to black
    textDecoration: 'none', // Remove underlines from links
    transition: 'color 0.3s', // Add transition effect
  };

 
  textBelowImageStyle[':hover'] = {
    color: '#871f40',
  };
  
  // const myCardContainerStyle = {
  //  display: 'flex',
  //  padding: '20px',
  // };
  

  return (
    <> 
    <div>
        <NavBar />
    </div>
    <div style={pageContainerStyle}>
      <hr></hr>
      <div style={imageContainerStyle}>
        <img src={contactUsTabImage} alt="Contact Us Tab" style={contactImageStyle} />
      </div>
      <div style={textOverlayStyle}>
        <h1>We would love to hear from you!</h1>
        <p>Contact us through any mode for your queries.</p>
      </div>

      <div className='inner mt-5' style={{ ...containerStyle }}>
        <h2 style={{ color: '#871f40' }}>
          <strong> Connect on </strong>
          Social Media
        </h2>
        <div style={socialMediaContainer}>
          <div>
            <Link
              to="https://www.facebook.com/axisbank"
              target="_blank"
              rel="noopener noreferrer"
              style={textBelowImageStyle}
            >
              <img src={f1} style={socialMediaImageStyle} alt="Facebook" />
              <div style={{ color: '#871f40' }}>Follow us on Facebook</div>
            </Link>
          </div>
          <div>
            <Link
              to="https://www.instagram.com/axis_bank/"
              target="_blank"
              rel="noopener noreferrer"
              style={textBelowImageStyle}
            >
              <img src={insta} style={socialMediaImageStyle} alt="Instagram" />
              <div style={{ color: '#871f40' }}>Join us on Instagram</div>
            </Link>
          </div>
          <div>
            <Link
              to="https://www.youtube.com/axisbank"
              target="_blank"
              rel="noopener noreferrer"
              style={textBelowImageStyle}
            >
              <img src={youtube} style={socialMediaImageStyle} alt="Youtube" />
              <div style={{ color: '#871f40' }}>Subscribe on YouTube</div>
            </Link>
          </div>
          <div>
            <Link
              to="https://twitter.com/axisbank"
              target="_blank"
              rel="noopener noreferrer"
              style={textBelowImageStyle}
            >
              <img src={twitter} style={socialMediaImageStyle} alt="Twitter" />
              <div style={{ color: '#871f40' }}>Follow us on Twitter</div>
            </Link>
          </div>
        </div>
      </div>
      <div className='inner mt-3' style={ { display: 'flex', width: '90vw', height: '100vh' }}>
        <h2 style={{ color: '#871f40' }}>
        <strong> Top </strong>
        Queries
        </h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <div style={{ width: '30%', height: '400px', padding: '20px' }}>
  <div className='mycard' >
  <MyCard
    title="Lost Cards"
    subtitle="To report the loss of Credit Card or Debit Card, call on the numbers below"
    content={
      <>
        <span style={{ color: '#871f40' }}>1-860-419-5555</span>
        <br />
        <span style={{ color: '#871f40' }}>1-860-500-5555</span>
        <br />
        
        To report the loss of Credit Card, Debit Card, and Pre-Paid Card, call on the number below
        <br />
        <br />
        <span style={{ color: '#871f40' }}>022-6798-7700</span>
        <br /> <br/> <br /> <br /> <br/> <br /> <br /> <br />
      </>
    }
  />
</div>


  </div>
  <div style={{ width: '30%', height: '400px', padding: '20px', marginBottom: '220px' }}>
    <div className='mycard' style={{ marginBottom: '50px' }}>
      <MyCard title="Update Contact Details" subtitle="Residential Address" content=
      {
        <>
        
        <span> <Link style={{ color: '#871f40' }} to='https://www.axisbank.com/docs/default-source/download-document/personal/accounts/customer-request-form.pdf?sfvrsn=2'> Download form  </Link>and submit it at your nearest branch.</span>
        <br />
        <br />
        
        <span><strong> Mobile Number</strong>  </span>
        <br /> <br />
        
        <span>Register your mobile number at your nearest ATM. </span>
        <br /> 
        or <br />
        <span><Link style={{ color: '#871f40' }} to='https://www.axisbank.com/docs/default-source/download-document/personal/accounts/customer-request-form.pdf?sfvrsn=2'> Download form </Link> and submit it at your nearest branch. </span>
        <br /> <br />
        <span style={{ color: '#871f40' }}> <strong>Register for E-statements </strong> </span>
        <br /> <br />
        
        <span><Link style={{ color: '#871f40' }} to='https://www.axisbank.com/docs/default-source/download-document/personal/accounts/customer-request-form.pdf?sfvrsn=2'>Download form </Link> and submit it at your nearest branch. </span> 
        
        </>
      } />
    </div>
  </div>
  <div style={{ width: '30%', height: '400px', padding: '20px' }}>
    
  <div className='mycard' style={{ marginBottom: '20px' }} >
  <MyCard
    title="Safe Banking Practices"
    subtitle="How to stay safe while banking online"
    content={
      <ul>
        <li>Watch out for Vishing / Phishing</li>
        <li>Beware of fictitious offers</li>
        <br /> <br/> <br /> <br /> <br/> <br /> <br /> <br /> <br /> <br /> <br /> 
      </ul>
      
    }
    
  />
  
</div>

  </div>
</div>
<div className=''>
    <Footer />
</div>


      

    </div>
    </>
  );
};

export default ContactPage;

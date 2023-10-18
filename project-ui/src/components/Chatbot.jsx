import React, { useState } from 'react';
import { FaTimes, FaPaperPlane } from 'react-icons/fa'; // Importing Font Awesome close icon
import AskRadz from '../images/AskRadz.png';
const Chatbot = () => {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [isValidationStep, setIsValidationStep] = useState(true);
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  
    
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
  };

  const handleTermsChange = () => {
    setAcceptedTerms(!acceptedTerms);
    setShowValidationMessage(false);
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
      setChatHistory([...chatHistory, { type: 'user', message: 'Accepted Terms' }]);
      setChatHistory([...chatHistory, { type: 'bot', message: 'What is your next question?' }]);
      
    }
  } else {
   setChatHistory([...chatHistory, { type: 'user', message: userMessage }]);
      
    }
    setUserMessage(''); 
   };
    
    const handleButtonClick = (action) => {
    setChatHistory([...chatHistory, { type: 'bot', message: action }]);
    
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
            {!isValidationStep && (
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
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              {chatHistory.map((chat, index) => (
                <div key={index} style={{ marginBottom: '10px', textAlign: chat.type === 'bot' ? 'left' : 'right' }}>
                  {chat.type === 'bot' && <span style={{ color: '#750D37' }}>{chat.message}</span>}
                  {chat.type === 'user' && <span style={{ color: '#666' }}>{chat.message}</span>}
                </div>
              ))}
              {chatHistory.length > 0 && chatHistory[chatHistory.length - 1].type === 'bot' && (
                <div style={{ marginTop: '10px' }}> </div>
              )}
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

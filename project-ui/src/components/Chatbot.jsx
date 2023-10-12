import React from 'react';

const Chatbot = () => {
  
const containerStyle = {
    backgroundColor: '#F0F2EF',
    borderRadius: '10px',
    padding: '10px',
    marginTop: '20px', 
  };
  return (
    <div className="chatbot mb-5 mt-5 container rounded" style={containerStyle}>
      <h2 class="text-center" style={{ color: '#750D37' }}>Chat with Us</h2>
      {/* Chatbot UI goes here */}
    </div>
  );
};

export default Chatbot;

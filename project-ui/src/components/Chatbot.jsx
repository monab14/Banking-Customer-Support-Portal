import React from 'react';

const Chatbot = () => {
  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#750D37',
    color: 'white',
    borderRadius: '5px',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    outline: 'none',
  };
 const handleClick = () => {
    // Open your chatbot UI or perform any other action on button click
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      Ask Radz
    </button>
  );
};

export default Chatbot;

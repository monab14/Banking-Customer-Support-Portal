import React from 'react';
import { Link } from 'react-router-dom';

const ComplaintWrapperButton = ({ customerId,  onClick }) => {
  const buttonStyle = {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    backgroundColor: "#871f40",
    color: "white",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div style={buttonStyle} onClick={handleButtonClick}>
      <h6>Raise A Complaint</h6>
      <Link
        to={`/complaintPage?customerId=${customerId}`}
        class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
      >
        <p>Click Here</p>
      </Link>
    </div>
  );
};

export default ComplaintWrapperButton;

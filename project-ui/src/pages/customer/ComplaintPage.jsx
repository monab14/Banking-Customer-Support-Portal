import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import NavBar from '../../components/NavBar';

const ComplaintPage = () => {
  const location = useLocation();
  const customerId = new URLSearchParams(location.search).get("customerId");
  const [complaintCategories, setComplaintCategories] = useState([
    'Account Access',
    'Billing Disputes',
    'Credit Card Issues',
    'Debit Card Issues',
    'Loan Problems',
    'Fraudulent Activity',
    'Online Banking',
    'Mobile App Issues',
    'ATM Services',
    'Customer Service Experience',
    'Account Statements',
    'Interest Rates',
    'Account Fees',
    'Savings Account Issues',
    'Checking Account Issues',
    'Mortgage Services',
    'Investment Services',
    'Retirement Accounts',
    'Insurance Services',
    'Other',
  ]);

  const [selectedCategory, setSelectedCategory] = useState('');
  const [complaintText, setComplaintText] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const submissionTime = new Date();
  const year = submissionTime.getFullYear();
  const month = String(submissionTime.getMonth() + 1).padStart(2, '0');
  const day = String(submissionTime.getDate()).padStart(2, '0');
  const hours = String(submissionTime.getHours()).padStart(2, '0');
  const minutes = String(submissionTime.getMinutes()).padStart(2, '0');
  const seconds = String(submissionTime.getSeconds()).padStart(2, '0');

  const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  }

  const handleComplaintSubmit = async () => {
    try {
      const submissionTime = new Date(); // Get the current time
      setCreatedAt(submissionTime.toISOString()); // Set the createdAt state

      const response = await axios.post("http://localhost:8090/complaints/create", {
        category: selectedCategory === 'Debit' || selectedCategory === 'Credit' ? 'Financial' : selectedCategory,
        complaintText: complaintText,
        customer_id: customerId,
        status: 'Pending',
        createdAt: formattedDateTime, // Use the formatted date and time
      });


      console.log("Complaint submitted successfully:", response.data);

      // Show a toast when complaint is added successfully
      alert("Complaint added successfully!");

    } catch (error) {
      console.error('Error submitting complaint:', error);
      // You can add error handling here, such as showing an error message to the user.
    }
  }

  const formStyle = {
    padding: '20px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0px 70px'
  };

  const buttonStyle = {
    display: 'block',
    margin: '30px auto',
  };

  const pageStyle = {
    background: '#f0f2ef',
  };

  const headingStyle = {
    fontFamily: 'Arial, sans-serif',
    color: '#871f40',
  };

  return (
    <div style={pageStyle}>
      <NavBar />
      <div className="container">
        <img src='MonaImages/cst.png' alt="Customer Support" width='1100px' style={{ padding: '70px' }} />
        <form style={{ padding: '0px 70px' }}>
          <div className="mb-3">
            <h1 style={headingStyle}>I have a complaint regarding </h1>
            <div className="form-floating mb-3">
            <select
  className="form-select"
  id="complaintType"
  value={selectedCategory}
  onChange={handleCategoryChange}
  style={{
    maxHeight: '25px', // Set the maximum height for the dropdown to show 1 option
    overflowY: 'scroll'   // Enable vertical scrollbar
  }}
>




















  


                <option value="">Select Complaint Category</option>
                {complaintCategories.map(category => (
                  <option key={category} value={category}>{category}</option> // Added key prop
                ))}
              </select>
              <label htmlFor="complaintType">Select Complaint </label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ minHeight: '200px', maxHeight: '200px', height: '200px' }}
                value={complaintText}
                onChange={(e) => setComplaintText(e.target.value)}
              ></textarea>
              <label htmlFor="floatingTextarea2">Complaint Description</label>
            </div>
            <button
              type="button"
              className="btn btn-outline-primary"
              style={buttonStyle}
              onClick={handleComplaintSubmit}
            >
              Submit
            </button>
          </div>
          <img src='MonaImages/complaint.png' width='980px' alt="Complaint"></img>
        </form>
      </div>
    </div>
  );
}

export default ComplaintPage;
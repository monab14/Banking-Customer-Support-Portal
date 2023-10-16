import React, { useState } from 'react';
import SupportNavBar from './SupportNavBar';

const FaqPage = () => {
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [dropdown3, setDropdown3] = useState('');
  const [dropdown4, setDropdown4] = useState('');

  const handleDropdown1Change = (e) => {
    setDropdown1(e.target.value);
  };

  const handleDropdown2Change = (e) => {
    setDropdown2(e.target.value);
  };

  const handleDropdown3Change = (e) => {
    setDropdown3(e.target.value);
  };

  const handleDropdown4Change = (e) => {
    setDropdown4(e.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Submitted:', dropdown1, dropdown2, dropdown3, dropdown4);
  };

  return (
    <div>
      <SupportNavBar />
      <div className="container mt-5  p-4" style={{ backgroundColor: '#F7F7F7', borderRadius: '20px'  }}>
        <h1 className="text-center" style={{ color: '#750D37' }}>Frequently Asked Questions</h1>
        <div className="container mt-5 p-5 " style={{ backgroundColor: '#FFF' , borderRadius: '20px' }}>
          <h4 style={{
            fontSize: '1.6rem',
            fontFamily: 'lato-light',
            paddingBottom: '15px',
            lineHeight: '1',
            maxWidth: '100%',
            color: '#750D37',
            lineHeight: '2',
            marginBottom: '20px'
          }} >
            I have a query related to{" "}
            <select value={dropdown1} onChange={handleDropdown1Change}>
              <option value="">Star selection here</option>
              <option value="option1">Report A Fraud Or Dispute</option>
                <option value="option2">Bank Accounts</option>
                <option value="option2">Cards</option>
                <option value="option2">Loans</option>
                <option value="option2">Digital Banking</option>
                <option value="option2">Insurance</option>
            </select>{" "}
            specific to{" "}
            <select value={dropdown2} onChange={handleDropdown2Change}>
              <option value="">Continue Selecting</option>
              <option value="option1">Dropdown 2 Option 1</option>
              <option value="option2">Dropdown 2 Option 2</option>
            </select>{" "}
            for which I have an issue{" "}
            <select value={dropdown3} onChange={handleDropdown3Change}>
              <option value="">Choose your Query</option>
              <option value="option1">Dropdown 3 Option 1</option>
              <option value="option2">Dropdown 3 Option 2</option>
            </select>{" "}
            with sub issues{" "}
            <select value={dropdown4} onChange={handleDropdown4Change}>
              <option value="">Select Specifics</option>
              <option value="option1">Dropdown 4 Option 1</option>
              <option value="option2">Dropdown 4 Option 2</option>
            </select>
          </h4>
        <div className="text-center">
          <button type="submit" className="btn btn-primary mb-3" style={{ backgroundColor: '#750D37', color: '#FFF' }} onClick={handleSubmit}>
            Submit
            </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;

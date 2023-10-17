import React, { useState } from 'react';
import SupportNavBar from './SupportNavBar';

const FaqPage = () => {
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');
  const [dropdown3, setDropdown3] = useState('');
  const [dropdown4, setDropdown4] = useState('');

  const dropdown1Options = [
    'Report A Fraud Or Dispute',
    'Bank Accounts',
    'Cards',
    'Loans',
    'Digital Banking',
    'Insurance'
  ];

  const dropdown2Options = {
    'Report A Fraud Or Dispute': ['Report a Fraud', 'Report a Dispute'],
    'Bank Accounts': ['Option 1 for Bank Accounts', 'Option 2 for Bank Accounts'],
    // ... Define options for other dropdown1 selections
  };

  const dropdown3Options = {
    'Raise a Fraud': ['Debit and Credit Cards', 'UPI', 'Internet and Mobile Banking'],
    'Raise a Dispute': ['Debit and Credit Cards', 'UPI', 'Internet and Mobile Banking'],
    // ... Define options for other dropdown2 selections
  };

  const dropdown4Options = {
    'Debit and Credit Cards': ['What is a Disputed Transaction', 'What are the documents required to raise a dispute?', 'Where do I submit these documents', 'What is the action taken on dispited transaction' ],
    'UPI': ['What is a Disputed Transaction', 'Account debited but beneficiary account not credited',  'How do I raise a '],
    // ... Define options for other dropdown3 selections
  };

  const handleDropdown1Change = (e) => {
    const selectedValue = e.target.value;
    setDropdown1(selectedValue);
    setDropdown2('');
    setDropdown3('');
    setDropdown4('');
  };

  const handleDropdown2Change = (e) => {
    setDropdown2(e.target.value);
    setDropdown3('');
    setDropdown4('');
  };

  const handleDropdown3Change = (e) => {
    setDropdown3(e.target.value);
    setDropdown4('');
  };

  const handleDropdown4Change = (e) => {
    setDropdown4(e.target.value);
  };
  const handleSubmit = () => {
    
    console.log('Submitted:', dropdown1, dropdown2, dropdown3, dropdown4);

    
    setDropdown1('');
    setDropdown2('');
    setDropdown3('');
    setDropdown4('');
  };

  return (
    <div>
      <SupportNavBar />
      <div className="container mt-5 p-4" style={{ backgroundColor: '#F7F7F7', borderRadius: '20px' }}>
        <h1 className="text-center" style={{ color: '#750D37' }}>Frequently Asked Questions</h1>
        <div className="container mt-5 p-5" style={{ backgroundColor: '#FFF', borderRadius: '20px' }}>
          <h4 style={{
            fontSize: '1.6rem',
            fontFamily: 'lato-light',
            paddingBottom: '15px',
            maxWidth: '100%',
            color: '#750D37',
            lineHeight: '2',
            marginBottom: '20px'
          }}>
            I have a query related to{' '}
            <select value={dropdown1} onChange={handleDropdown1Change}>
              <option value="">Start Selection Here</option>
              {dropdown1Options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>{' '}
            specific to{' '}
            <select value={dropdown2} onChange={handleDropdown2Change}>
              <option value="">Continue Selecting</option>
              {dropdown2Options[dropdown1] &&
                dropdown2Options[dropdown1].map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
            </select>{' '}
            for which I have an issue{' '}
            <select value={dropdown3} onChange={handleDropdown3Change}>
              <option value="">Choose your Query</option>
              {dropdown3Options[dropdown2] &&
                dropdown3Options[dropdown2].map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
            </select>{' '}
            with sub issues{' '}
            <select value={dropdown4} onChange={handleDropdown4Change}>
              <option value="">Select Specifics</option>
              {dropdown4Options[dropdown3] &&
                dropdown4Options[dropdown3].map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
            </select>
          </h4>
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary mb-3"
              style={{ backgroundColor: '#750D37', color: '#FFF' }}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;


import React, { useState } from 'react';
import logoAxis from '../../images/logoAxis.jpeg';
import ConfirmationModal    from '../../components/ConfirmationModel';
const dropdownMenuOptions = [
  { value: 'cards', label: 'Cards' },
  { value: 'updateEmail', label: 'Update Email ID' },
  { value: 'updateAddress', label: 'Update Address' },
  { value: 'generateDebitCardPin', label: 'Generate Debit Card PIN' },
  { value: 'generateCreditCardPin', label: 'Generate Credit Card PIN' },
];

const SupportNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    
  

   const handleDropdownOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
       if (option.value !== 'cards') {
           setShowConfirmation(true);
       }
       else {
           setShowConfirmation(true);
       }
  };

    
const handleConfirmationClose = () => {
    setShowConfirmation(false);
};
    
  const handleConfirmationConfirm  = (confirmed) => {
    setShowConfirmation(false);
      if (confirmed && selectedOption) {
          switch (selectedOption.value) {
              case 'cards':
                  window.location.href = `/login`;
                  break;
              case 'updateEmail':
                  window.location.href = '/login';
                  break;
              case 'updateAddress':
                  window.location.href = '/login';
                  break;
              case 'generateDebitCardPin':
                  window.location.href = '/login';
                  break;

              case 'generateCreditCardPin':
                  window.location.href = '/login';
                  break;
              default:
        
                  break;
          }    
    }
  };
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#750D37' }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logoAxis} alt="Logo" style={{ height: '50px', width: 'auto', padding: '5px' }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className={`nav-link dropdown-toggle ${isOpen ? 'show' : ''}`}
                id="navbarDropdown"
                role="button"
                onClick={() => setIsOpen(!isOpen)}
                style={{ color: 'white' }}
              >
                Insta Services
              </a>
              <div className={`dropdown-menu ${isOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                {dropdownMenuOptions.map((option, index) => (
                    
                        <button
                        key={index}
                        className={`dropdown-item `}
                        
                        onClick={() => handleDropdownOptionClick(option)}
                        style={{ cursor: 'pointer' }}
                    >
                    {option.label}
                    </button>
                 
                ))}
            </div>
        
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/faqs" style={{ color: 'white', marginRight: '20px' }}>
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ticket-status" style={{ color: 'white', marginRight: '20px' }}>
                Ticket Request Status
              </a>
            </li>
          </ul>
        </div>
          </div>
        {showConfirmation && (
        <ConfirmationModal
          isOpen={showConfirmation}
          option={selectedOption}
          onConfirm={handleConfirmationConfirm}
          onCancel={handleConfirmationClose}
        />
      )}
    </nav>
  );
};

export default SupportNavBar;




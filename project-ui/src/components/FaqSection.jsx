import React, { useState } from 'react';

const FaqSection = () => {
  const faqs = [
    { question: ' FAQ Question 1', answer: 'Answer 1' },
    { question: 'FAQ Question 2', answer: 'Answer 2' },
    { question: 'FAQ Question 3', answer: 'Answer 3' },
    { question: 'FAQ Question 4', answer: 'Answer 4' },
    { question: 'FAQ Question 5', answer: 'Answer 5' },
    { question: 'FAQ Question 6', answer: 'Answer 6' },
  ];

  const containerStyle = {
    backgroundColor: '#f6f6f6',
    borderRadius: '10px',
    padding: '10px',
    marginTop: '20px', 
  };

  const handleToggle = (index) => {
    const target = document.getElementById(`faqCollapse${index}`);
    if (target.classList.contains('show')) {
      target.classList.remove('show');
    } else {
      target.classList.add('show');
    }
  };

  return (
    <div className="faq-section" style={containerStyle}>
      <div className="container mt-5 mb-5 px-5 rounded mx-auto" style={containerStyle}>
        <h2 className="text-center" style={{ color: '#750D37' }}>Frequently Asked Questions</h2>
      
        <div className="accordion accordion-flush" id="accordionFlushExample" style={{textAlign:'center'}}>
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" 
                  type="button" 
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                  <i className="fas fa-chevron-down ms-auto"></i>
                </button>
              </h2>
              <div id={`faqCollapse${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;

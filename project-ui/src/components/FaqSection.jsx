import React from 'react';

const FaqSection = () => {
  const faqs = [
    { question: ' FAQ Question 1', answer: 'Answer 1' },
    { question: 'FAQ Question 2', answer: 'Answer 2' },
  ];

  const containerStyle = {
    backgroundColor: '#F0F2EF',
    borderRadius: '10px',
    padding: '10px',
    marginTop: '20px', 
  };

  return (
    <div className="faq-section">
      <div className="container mt-5 mb-5 rounded" style={containerStyle}>
        <h2 class="text-center" style={{ color: '#750D37' }}>Frequently Asked Questions</h2>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item mt-3 mb-3">
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqSection;

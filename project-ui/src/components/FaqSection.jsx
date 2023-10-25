import React, { useState ,useEffect} from 'react';

const FaqSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  useEffect(() => {
    // Fetch FAQ data from the API
    fetch('http://localhost:8090/api/faqs')
      .then(response => response.json())
      .then(data => setFaqs(data))
      .catch(error => console.error('Error fetching FAQs:', error));
  }, []);

  const containerStyle = {
    backgroundColor: '#f6f6f6',
    borderRadius: '10px',
    padding: '10px',
    marginTop: '20px', 
  };

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="faq-section" style={containerStyle}>
      <div className="container mt-5 mb-5 px-5 rounded mx-auto" style={containerStyle}>
        <h2 className="text-center" style={{ color: '#871f40' }}>Frequently Asked Questions</h2>
      
        <div className="accordion accordion-flush" id="accordionFlushExample" style={{textAlign:'center'}}>
          {faqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header">
                <button className={`accordion-button ${expandedIndex === index ? '' : 'collapsed'}`} 
                  type="button" 
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                  <i className="fas fa-chevron-down ms-auto"></i>
                </button>
              </h2>
              <div id={`faqCollapse${index}`} className={`accordion-collapse collapse ${expandedIndex === index ? 'show' : ''}`} data-bs-parent="#accordionFlushExample">
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

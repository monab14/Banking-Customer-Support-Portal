import React, { useState ,useEffect} from 'react';

const FaqSection = () => {
  const [faqs, setFaqs] = useState([]);
  const [filteredFaqs, setFilteredFaqs] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    
    fetch('http://localhost:8090/api/faqs')
      .then(response => response.json())
      .then(data => {
        setFaqs(data);
        setFilteredFaqs(data);
      })
      .catch(error => console.error('Error fetching FAQs:', error));
  }, []);

  const containerStyle = {
    backgroundColor: '#f6f6f6',
    borderRadius: '10px',
    padding: '10px',
    marginTop: '20px', 
  };

  const searchContainerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px",
    
  };

  const questionStyle = {
    color: "#750D37",
    textAlign: "left",
  };

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    const filtered = faqs.filter((faq) =>
      faq.question.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFaqs(filtered);
  };

  return (
    <div className="faq-section" style={containerStyle}>
      <div
        className="container mt-5 mb-5 px-5 rounded mx-auto"
        style={containerStyle}
      >
        <h2 className="text-center mb-4" style={{ color: "#871f40" }}>
          Frequently Asked Questions
        </h2>

        <div className="mb-4" style={searchContainerStyle}>
          <input
            type="text"
            placeholder="   Search FAQs..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              color: "#750D37",
              width: "30%",
              borderRadius: "15px",
              padding: "5px",
              border: "1.5px solid #750D37",
            }}
          />
        </div>

        <div
          className="accordion accordion-flush"
          id="accordionFlushExample"
          style={{ textAlign: "left" }}
        >
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${
                    expandedIndex === index ? "" : "collapsed"
                  }`}
                  type="button"
                  style={questionStyle}
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                  <i className="fas fa-chevron-down ms-auto"></i>
                </button>
              </h2>
              <div
                id={`faqCollapse${index}`}
                className={`accordion-collapse collapse ${
                  expandedIndex === index ? "show" : ""
                }`}
                data-bs-parent="#accordionFlushExample"
              >
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

import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import axios from 'axios';

const faqs = [
  { question: 'Query 1', answer: 'Answer 1', complaintId: 1 },
  { question: 'Query 2', answer: 'Answer 2', complaintId: 2 },
  { question: 'Query 3', answer: 'Answer 3', complaintId: 3 },
  { question: 'Query 4', answer: 'Answer 4', complaintId: 4 },
  { question: 'Query 5', answer: 'Answer 5', complaintId: 5 },
  { question: 'Query 6', answer: 'Answer 6', complaintId: 6 },
];

const containerStyle = {
  backgroundColor: '#F0F2EF',
  borderRadius: '10px',
  padding: '10px',
  marginTop: '20px',
};

const AdminSolveQuery = () => {
  const [complaints, setComplaints] = useState([]);
  const [activeFAQ, setActiveFAQ] = useState(null);

  useEffect(() => {
    const fetchComplaintData = async () => {
      try {
        const response = await axios.get('http://localhost:8090/complaints/all');
        if (response.status === 200) {
          setComplaints(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchComplaintData();
  }, []);

  const handleToggle = (complaintId) => {
    if (activeFAQ === complaintId) {
      setActiveFAQ(null); // Close the FAQ if it's already open
    } else {
      setActiveFAQ(complaintId); // Open the FAQ if it's closed
    }
  };

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="faq-section">
        <div className="container mt-5 mb-5 px-5 rounded mx-auto" style={containerStyle}>
          <h2 className="text-center" style={{ color: '#750D37' }}>All Queries</h2>

          <div className="accordion" id="accordionFlushExample" style={{ textAlign: 'center' }}>
            {faqs.map((faq) => (
              <div key={faq.complaintId} className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${activeFAQ === faq.complaintId ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => handleToggle(faq.complaintId)}
                  >
                    {faq.question}
                    <i className={`fas fa-chevron-down ms-auto ${activeFAQ === faq.complaintId ? 'up' : 'down'}`}></i>
                  </button>
                </h2>
                <div
                  id={`faqCollapse${faq.complaintId}`}
                  className={`accordion-collapse ${activeFAQ === faq.complaintId ? 'show' : ''}`}
                >
                  <div className="accordion-body">
                    {activeFAQ === faq.complaintId && <ComplaintTable complaint={complaints.find(c => c.complaintId === faq.complaintId)} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

const ComplaintTable = ({ complaint }) => {
  if (!complaint) {
    return <p>No data available.</p>;
  }

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Complaint ID</th>
          <th>Customer Name</th>
          <th>Category</th>
          <th>Status</th>
          <th>Created At</th>
          <th>Resolved At</th>
          <th>Complaint Text</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{complaint.complaintId}</td>
          <td>{complaint.customer ? complaint.customer.customerName : 'N/A'}</td>
          <td>{complaint.category}</td>
          <td>{complaint.status}</td>
          <td>{complaint.createdAt}</td>
          <td>{complaint.resolvedAt}</td>
          <td>{complaint.complaintText}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AdminSolveQuery;

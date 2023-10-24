import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import axios from 'axios';
import Button from '../../components/Button';

const containerStyle = {
  backgroundColor: '#F0F2EF',
  borderRadius: '10px',
  padding: '10px',
  marginTop: '20px',
};

const AdminSolveQuery = () => {
  const [complaints, setComplaints] = useState([]);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    // Retrieve selected options from localStorage when the component mounts
    const savedSelectedOptions = JSON.parse(localStorage.getItem('selectedOptions'));
    if (savedSelectedOptions) {
      setSelectedOptions(savedSelectedOptions);
    }

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
      setActiveFAQ(null);
    } else {
      setActiveFAQ(complaintId);
    }
  };

  const handleOptionSelect = (complaintId, option) => {
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [complaintId]: option,
    }));

    // Store selected options in localStorage
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
  };

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="faq-section">
        <div className="container mt-5 mb-5 px-5 rounded mx-auto" style={containerStyle}>
          <h2 className="text-center" style={{ color: '#871f40' }}>All Queries</h2>

          <div className="accordion" id="accordionFlushExample" style={{ textAlign: 'center' }}>
            {complaints.map((complaint) => (
              <div key={complaint.complaintId} className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${activeFAQ === complaint.complaintId ? '' : 'collapsed'}`}
                    type="button"
                    onClick={() => handleToggle(complaint.complaintId)}
                  >
                    {complaint.complaintId}
                  </button>
                </h2>
                <div
                  id={`faqCollapse${complaint.complaintId}`}
                  className={`accordion-collapse ${activeFAQ === complaint.complaintId ? 'show' : ''}`}
                >
                  <div className="accordion-body">
                    {activeFAQ === complaint.complaintId && (
                      <>
                        <ComplaintTable
                          complaint={complaint}
                          selectedOption={selectedOptions[complaint.complaintId] || ''}
                        />
                        <Button
                          onSelectOption={(newOption) =>
                            handleOptionSelect(complaint.complaintId, newOption)
                          }
                        />
                      </>
                    )}
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

const ComplaintTable = ({ complaint, selectedOption }) => {
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
          <th>Complaint Text</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{complaint.complaintId}</td>
          <td>{complaint.customer && complaint.customer.firstName}</td>
          <td>{complaint.category}</td>
          <td>{selectedOption}</td>
          <td>{complaint.complaintText}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AdminSolveQuery;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TicketStatus = () => {
   
    const [customerid, setCustomerid] = useState('');
    const [ticketData, setTicketData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isTicketsCardOpen, setIsTicketsCardOpen] = useState(false);
    const [isCustomerIdValid, setIsCustomerIdValid] = useState(true);
    const handleCloseCard = () => {
      setIsTicketsCardOpen(false);
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      if (!customerid) {
        setIsCustomerIdValid(false);
        return;
      }
      
      // Reset validation status
      setIsCustomerIdValid(true);

      try {
        const response = await fetch(`http://localhost:8090/api/${customerid}/addtickets`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setTicketData(data);
        setIsTicketsCardOpen(true);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div style={{ backgroundColor: '#f0f0f0' }}>
      <div className="dashboard-banner d-flex align-items-center justify-content-left" style={{ backgroundColor: '#871f40', color: '#ffffff', padding: '8px', height: '70px' }}>
        <div className="logo">
          <img src="/MonaImages/axislogo.jpg" alt="Axis Bank Logo" height="50" />
        </div>
      </div>
      <div style={{ backgroundColor: 'white', height: '20px', display: 'flex', justifyContent: 'space-between', padding: '0 16px', alignItems: 'center', boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)'}}>
        
      </div>
      
      <div style={{ paddingLeft: '130px', marginTop: '10px' }}><h6 style={{ color: 'grey' }}>Quick Actions</h6></div>
      <div style={{ paddingLeft: '130px' }}><h3 style={{ color: '#871f40'}}>Ticket Request Status</h3></div>
        <div style={{ paddingLeft: '130px' }}><h6><Link to="#" style={{textDecoration: 'none', color: 'inherit'}}>Home</Link> Service Request Status</h6></div>
        
      <div className="container mt-4">
        <div className="row">
        <div className="col-md-6">
  <div className="card" style={{ height: '380px', width: '570px',boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)'}}>
    <div className="card-body">
      <div className="d-flex align-items">
        <img src="/24hr.jpg" alt="Image" style={{ width:'150px',height: '140px', marginTop: '-20px' }} />
          <div><h4 style={{ color: '#871f40'}}>Hassle Free</h4>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>
Get the status of your Service Request 24x7 by simply entering your SR number or Cust ID.</p>
      </div>
      </div>
      <div className="d-flex align-items">
        <img src="/Digital.jpg" alt="Digital" style={{ width:'150px',height: '140px', marginTop: '-20px'}} />
          <div><h4 style={{ color: '#871f40'}}>Digital</h4>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>
Check the status of your Service Request digitally, without logging into Internet or Mobile Banking.</p>
      </div>
      </div>
      <div className="d-flex align-items">
        <img src="/Mobil.jpg" alt="Image" style={{ width:'150px',height: '130px' , marginTop: '-20px'}} />
          <div><h4 style={{ color: '#871f40'}}>Efforts Less</h4>
          <p style={{ fontFamily: 'Times New Roman', fontSize: '16px' }}>
Your Service Request status is just a few clicks away.</p>
      </div>
      </div>
      

    </div>
  </div>
</div>
<div className="col-md-6">
      <div className="card" style={{ height: '380px', width: '550px',boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)'}}>
        <div className="card-body">
        <div className="col-md-4">
      <div className="card" style={{ height: '320px', width: '480px' }}>
        <div className="card-body">
          <hr style={{ borderColor: '#333', marginTop: '10px' }} />
          <h5 className="card-title"style={{ color: '#871f40'}}>Track your Ticket Request / Complaint</h5>
          <hr style={{ borderColor: '#333', marginTop: '15px' }} />

          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="customerId" className="form-label">Customer ID</label>
                <input
                  type="text"
                  className={`form-control  ${isCustomerIdValid ? '' : 'is-invalid'}`}
                  id="customerId"
                  value={customerid}
                  onChange={(e) => setCustomerid(e.target.value)}
                />
                {!isCustomerIdValid && <div className="invalid-feedback">Please enter Customer ID.</div>}
              </div>
              <hr style={{ borderColor: '#333', marginTop: '40px' }} />

              <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#871f40', borderColor: '#871f40' }}>Submit Query</button>
            </form>
            
                </div>
      </div>
    </div>
           
        </div>
      </div>
    </div>
    </div>
    <hr style={{ borderColor: '#333', marginTop: '30px' }} />

        {loading && <p>Loading...</p>}

        {isTicketsCardOpen && (
          <div className="card" style={{  width: '1120px',boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>
            <div className="card-body">
              <h5 className="card-title">Ticket Details</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>Ticket ID</th>
                    <th>Customer ID</th>
                    <th>Query</th>
                    <th>Status</th>
                    <th>Resolved At</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketData.map((ticket) => (
                    <tr key={ticket.ticketid}>
                      <td>{ticket.ticketid}</td>
                      <td>{ticket.customerid}</td>
                      <td>{ticket.query}</td>
                      <td>{ticket.status}</td>
                      <td>{ticket.resolvedAt}</td>
                      <td>{ticket.createdat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button  style={{ backgroundColor: '#871f40', borderColor: '#871f40' }}className="btn btn-secondary mt-3"
              onClick={handleCloseCard}>Close</button>
            </div>
          </div>
        )}
          <hr style={{ borderColor: '#333', marginTop: '30px' }} />
      </div>
      </div>
      
    );
}

export default TicketStatus;

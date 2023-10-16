import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [AdminData, setAdminData] = useState(null);
  const [complaintData, setComplaintData] = useState(null);
   const [showComplaintsCard, setShowComplaintsCard] = useState(false);

    const [greeting, setGreeting] = useState("");

  useEffect(() => {
  

    // Update the greeting every minute
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();

      if (hours >= 5 && hours < 12) {
        setGreeting("Good Morning");
      } else if (hours >= 12 && hours < 17) {
        setGreeting("Good Afternoon");
      } else if (hours >= 17 && hours < 19) {
        setGreeting("Good Evening");
      } else if (hours >= 19 || hours < 5){
        setGreeting("Good Night");
      }
    }, 600);

    return () => clearInterval(interval);}, []);
   const handleViewComplaints = () => {
     setShowComplaintsCard(true);
   };
   
   const handleGoBack = () => {
    setShowComplaintsCard(false);
  };
  
  const handleLogout = () => {
    // Perform any logout actions (e.g., clearing session)
    // Then redirect to the login page
    navigate('/adminlogin');
  };

  useEffect(() => {
    // Fetch customer data
    fetch('http://localhost:8080/admins/1')
      .then(response => response.json())
      .then(data => setAdminData(data))
      .catch(error => console.error('Error fetching customer data:', error));

    // Fetch complaint data
    fetch('http://localhost:8080/complaints/all')
      .then(response => response.json())
      .then(data => setComplaintData(data))
      .catch(error => console.error('Error fetching complaint data:', error));
  }, []);

  
  return (
    <div style={{ backgroundColor: '#f0f0f0' }}>
      <div className="dashboard-banner d-flex align-items-center justify-content-left" style={{ height: '60px', backgroundColor: '#871f40', color: '#ffffff', padding: '8px' }}>
        <div className="logo" >
        <img src="/MonaImages/axislogo.jpg" alt="Axis Bank Logo" height="50" />
        </div>
        </div>
        <div style={{ backgroundColor: 'white', height: '20px', display: 'flex', justifyContent: 'space-between', padding: '0 16px', alignItems: 'center', boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)'}}>

      </div>

<div className="container ml-0">
        <div className="row">
        <div className="col-md-1 ml-2 bg-dark sidebar text-white"> 
            <div className="d-flex flex-column align-items-center p-3">
              <div className="mb-4" style={{backgroundColor: 'white', padding: '5px 10px', borderRadius: '5px'}}> {/* Updated background color */}
                <img src="/dashboard.jpg" className="card-img-top mt-1" alt="Dashboard Icon" style={{ width: '60px', height: '50px', objectFit: 'cover' }} />
                <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#000' }}>Dashboard</h6>
              </div>
             
              <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
              
              <div className="mb-3 border-top ">
              <img src="/account.jpg" className="card-img-top pt-2" alt="Accounts Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>ACCOUNTS</h6>
              </div>
              </a>
              <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="mb-3 border-top">
                <img src="/support.jpg" className="card-img-top pt-2" alt="FD Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>SUPPORT</h6>
              </div></a>
              <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="mb-3 border-top">
              <img src="/Payments.jpg" className="card-img-top pt-2" alt="Payments Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>PAYMENTS</h6>
              </div></a>
              <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="mb-3 border-top">
                <img src="/Loan.jpg" className="card-img-top pt-2" alt="Loans Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>LOANS</h6>
              </div></a>
              <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="mb-3 border-top">
              <img src="/cards.jpg" className="card-img-top pt-2" alt="Cards Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>CARDS</h6>
              </div></a>
              <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="mb-3 border-top">
                <img src="/Investment.jpg" className="card-img-top pt-2" alt="investment Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>INVESTMENT</h6>
              </div></a>
              <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="mb-3 border-top">
                <img src="/FDRD.jpg" className="card-img-top pt-2" alt="FD Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>FD/RD</h6>
              </div></a>
              <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
              <div className="mb-3 border-top">
                <img src="/insurance.jpg" className="card-img-top pt-2" alt="FD Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>INSURANCE</h6>
              </div></a>
            </div>
          </div>
          <div className="col-md-10">
  <div className="mt-2">
    <div className="d-flex align-items-center justify-content-between">
    <div className="col-md-8">
    <h2 style={{ marginLeft: '20px' }}> {greeting}, Admin</h2>

      </div>
    <div className="col-md-4"></div> 
      
      <div className="d-flex align-items-center">
        <div className="mr-2">
          <h5>{AdminData ? `${AdminData.username} ` : 'Your Profile'}</h5>
        </div>
        <img src="contacts.png" alt="Contacts" className="card-img-top ml-auto" style={{ width: '70px', height: '50px', objectFit: 'cover'}} />
        
        <button
          className="btn btn-danger" 
          style={{ backgroundColor: '#871f40', borderColor: '#871f40' }}
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
   </div>

<div className="container bg-white p-5 mt-1" style={{ height: '1200px', width: '1200px', marginLeft: '40px',boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>
    <div className="row"> 
      <div className="col-md-4 mb-4"> 
        <div className="card mt-4 w-70"> 
          <div className="card-body">
            <h5 className="card-title"style={{ color: '#871f40' }}>Account Details</h5>
            <p className="card-text">
              Account Balance (1 Account)<br />
              ₹25000.00<br />
              <hr className="my-3" style={{ borderColor: 'black' }} />
              Account Number: XXXXXXXX<br />
              ₹25000.00<br />
              <hr className="my-3" style={{ borderColor: 'black' }} />
              <em style={{ fontSize: '14px' }}>Grow your money by investing in mutual funds.</em>
            </p>
          </div>
        </div>
      </div>
      {complaintData && (
  <div className="col-md-6 mb-4">
    <div className="card mt-4 w-50 " style={{ height: '92%' }}>
      <div className="card-body text-center">
        <h5 className="card-title">Complaints List</h5>
        <img src="complaint.jpg" alt="Complaints" className="card-img-top" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
        <button className="btn btn-primary"style={{ backgroundColor: '#871f40' }} onClick={handleViewComplaints}>
          View Customer Complaints
        </button>
      </div>
    </div>
  </div>
)}
      
        {showComplaintsCard && (
          <div className="card" style={{  width: '1120px',boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>
            <div className="card-body">
              <h5 className="card-title">Customer Complaint  Details</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>Customer ID</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Resolved At</th>
                    <th>Complaint Text</th>
                  </tr>
                </thead>
                <tbody>
                  {complaintData.map((complaint) => (
                    <tr key={complaint.complaintId}>
                      <td>{complaint.customer.customerid}</td>
                      <td>{complaint.category}</td>
                      <td>{complaint.status}</td>
                      <td>{complaint.createdAt}</td>
                      <td>{complaint.resolvedAt}</td>
                      <td>{complaint.complaintText}</td>
                     
                      
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="btn btn-primary" style={{ backgroundColor: '#871f40' }}onClick={handleGoBack}>
          Back
        </button>
              </div>
          </div>
        )}
 
   
     
    <hr style={{ borderColor: '#333', marginTop: '20px' }} />
    <h4 style={{ color: '#871f40' }}>RECENTLY USED</h4>

    <div className="row">
  <div className="col-md-3 mb-3">
    <div className="card">
      <div className="card-body">
        <img src="acc.jpg" className="card-img-top" style={{ width: '145px', height: '70px', objectFit: 'cover',paddingLeft: '40px' }}alt="Card 1" />
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h6 className="card-text text-center">ACCOUNTS</h6></a>
      </div>
    </div>
  </div>
  <div className="col-md-3 mb-3">
    <div className="card">
      <div className="card-body"style={{ paddingLeft: '50px' }}>
        <img src="Mutualfunds.jpg" className="card-img-top" style={{ width: '115px', height: '70px', objectFit: 'cover' }}alt="Card 1" />
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h6 className="card-text text-center">MUTUAL FUNDS</h6></a>
      </div>
    </div>
  </div>
  <div className="col-md-3 mb-3">
    <div className="card">
      <div className="card-body">
        <img src="RD.jpg" className="card-img-top" style={{ width: '125px', height: '70px', objectFit: 'cover' ,paddingLeft: '50px'}}alt="Card 1" />
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h6 className="card-text text-center">FD/RD</h6></a>
      </div>
    </div>
  </div>

  <div className="col-md-3 mb-3">
    <div className="card">
      <div className="card-body">
        <img src="forexCards.jpg" className="card-img-top" style={{ width: '125px', height: '70px', objectFit: 'cover' ,paddingLeft: '50px'}}alt="Card 1" />
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h6 className="card-text text-center">FOREX CARDS</h6></a>
      </div>
    </div>
  </div>
  <div className="col-md-3 mb-3">
    <div className="card">
      <div className="card-body">
        <img src="Loa.jpg" className="card-img-top" style={{ width: '160px', height: '70px', objectFit: 'cover' ,paddingLeft: '30px'}}alt="Card 1" />
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h6 className="card-text text-center">LOANS</h6></a>
      </div>
    </div>
  </div>
  <div className="col-md-3 mb-3">
    <div className="card">
      <div className="card-body">
        <img src="services.jpg" className="card-img-top" style={{ width: '130px', height: '70px', objectFit: 'cover' ,paddingLeft: '60px'}}alt="Card 1" />
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h6 className="card-text text-center">SERVICES</h6></a>
      </div>
    </div>
  </div>
  
  <div className="col-md-3 mb-3">
    <div className="card">
      <div className="card-body">
        <img src="fund transfer.jpg" className="card-img-top" style={{ width: '150px', height: '70px', objectFit: 'cover' ,paddingLeft: '30px'}}alt="Card 1" />
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h6 className="card-text text-center">FUNDS TRANSFER</h6></a>
      </div>
    </div>
  </div>
  
  <div className="col-md-3 mb-3">
    <div className="card">
      <div className="card-body">
        <img src="pay.jpg" className="card-img-top" style={{ width: '160px', height: '70px', objectFit: 'cover' ,paddingLeft: '40px'}}alt="Card 1" />
        <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
        <h6 className="card-text text-center">PAYMENTS</h6>
      </a>
      </div>
    </div>
  </div>
</div>
<hr style={{ borderColor: '#333', marginTop: '20px' }} />

<div className="card mt-2 mx-5" style={{ width: '420px' }}>
  <div className="card-body">
    <h4 className="card-title">Security Notice</h4>
    <p className="card-text">
      For your security, please do not share your account information,
      password, or any sensitive information with anyone. Axis Bank will
      never ask for this information through email or phone.
    </p>
    <ul>
  <li>
    <a href="#" style={{ color: '#871f40' }}>Contact Customer Support</a>
  </li>
  <li>
    <a href="#" style={{ color: '#871f40' }}>New User?</a>
  </li>
</ul>
  </div>
</div>





    </div>
  </div>
</div>


          </div>
        </div>
      </div>
      </div>

  
    
  );
};

export default AdminDashboard;

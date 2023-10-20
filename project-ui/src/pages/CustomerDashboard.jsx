import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardCarousel from './SupportCarousel';
import Chatbot from '../components/Chatbot';
import { Link } from 'react-router-dom';
import ComplaintWrapperButton from '../components/ComplaintWrapperButton';

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const [customerId, setCustomerId] = useState(null);
  const [customerData, setCustomerData] = useState(null);
  const [complaintData, setComplaintData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isRmInfoVisible, setIsRmInfoVisible] = useState(false);
  const [showComplaintsCard, setShowComplaintsCard] = useState(false);

  const handleViewComplaints = () => {
    setShowComplaintsCard(true);
  };

  const handleGoBack = () => {
    setShowComplaintsCard(false);
  };

  const handleKnowYourRm = () => {
    setIsRmInfoVisible(true);

  };

  const handleOk = () => {
    setIsRmInfoVisible(false);
  };
  const handleLogout = () => {

    localStorage.removeItem("loggedIn");



    navigate('/login');
  };

  useEffect(() => {
    // Fetch customer data
    fetch(`http://localhost:8090/api/customer/1`)
      .then(response => response.json())
      .then(data => setCustomerData(data))
      .catch(error => console.error('Error fetching customer data:', error));

    // Fetch complaint data
    fetch(`http://localhost:8090/complaints/complaint/1`)
      .then(response => response.json())
      .then(data => setComplaintData(data))
      .catch(error => console.error('Error fetching complaint data:', error));

  }, []);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
  };
  const handleComplaintWrapperClick = () => {

    console.log('Complaint Wrapper Clicked!');
};


  return (
    <div style={{ backgroundColor: '#f0f0f0' }}>
      <div className="dashboard-banner d-flex align-items-center justify-content-left" style={{ height: '60px', backgroundColor: '#871f40', color: '#ffffff', padding: '8px' }}>
        <div className="logo" >
          <img src="/MonaImages/axislogo.jpg" alt="Axis Bank Logo" height="50" />
        </div>

      </div>
      <div style={{ backgroundColor: 'white', height: '20px', display: 'flex', justifyContent: 'space-between', padding: '0 16px', alignItems: 'center', boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>


      </div>
      

      <div className="container ml-1">
        <div className="row">
          <div className="col-md-1 ml-2 bg-dark sidebar text-white">
            <div className="d-flex flex-column align-items-center p-3">
              <div className="mb-3" style={{ backgroundColor: 'white', padding: '5px 10px', borderRadius: '5px' }}> {/* Updated background color */}
                <img src="/dashboard.jpg" className="card-img-top mt-1" alt="Dashboard Icon" style={{ width: '60px', height: '50px', objectFit: 'cover' }} />
                <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#000' }}>Dashboard</h6>
              </div>

              <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>

                <div className="mb-3 border-top ">
                  <img src="/account.jpg" className="card-img-top pt-2" alt="Accounts Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                  <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>ACCOUNTS</h6>
                </div>
              </Link>
              <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="mb-3 border-top">
                  <img src="/support.jpg" className="card-img-top pt-2" alt="FD Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                  <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>SUPPORT</h6>
                </div></Link>
              <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="mb-3 border-top">
                  <img src="/Payments.jpg" className="card-img-top pt-2" alt="Payments Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                  <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>PAYMENTS</h6>
                </div></Link>
              <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="mb-3 border-top">
                  <img src="/Loan.jpg" className="card-img-top pt-2" alt="Loans Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                  <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>LOANS</h6>
                </div></Link>
              <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="mb-3 border-top">
                  <img src="/cards.jpg" className="card-img-top pt-2" alt="Cards Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                  <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>CARDS</h6>
                </div></Link>
              <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="mb-3 border-top">
                  <img src="/Investment.jpg" className="card-img-top pt-2" alt="investment Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                  <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>INVESTMENT</h6>
                </div></Link>
              <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="mb-3 border-top">
                  <img src="/FDRD.jpg" className="card-img-top pt-2" alt="FD Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                  <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>FD/RD</h6>
                </div></Link>
              <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="mb-3 border-top">
                  <img src="/insurance.jpg" className="card-img-top pt-2" alt="FD Icon" style={{ width: '80px', height: '60px', objectFit: 'cover' }} />
                  <h6 className="card-title mb-0" style={{ fontSize: '14px', fontWeight: 'normal', color: '#fff' }}>INSURANCE</h6>
                </div></Link>
            </div>
          </div>
          <div className="col-md-10">

            <div className="mt-2">
              <div className="d-flex align-items-center justify-content-between">
                <div className="textAlign " style={{ textAlign: 'left' }}>
                  <h2 style={{ marginLeft: '45px', color: 'grey' }}> Customer Dashboard</h2>

                </div>

                <div className="col-md-5 ml-auto text-right" style={{ marginLeft: '20px', marginRight: 0, textAlign: 'right' }}>
                  <div className=" d-flex align-items-center justify-content-end ">
                    {customerData && (
                      <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={handleToggleDropdown} style={{ backgroundColor: '#750D37', color: 'white' }}>
                          {`${customerData.firstName} ${customerData.lastName}`}
                        </button>
                        <div className={`dropdown-menu${isDropdownOpen ? ' show' : ''}`} aria-labelledby="dropdownMenuButton">
                          <p className="dropdown-item">Customer ID: {customerData.customerid}</p>
                          <p className="dropdown-item">First Name: {customerData.firstName}</p>
                          <p className="dropdown-item">Last Name: {customerData.lastName}</p>
                          <p className="dropdown-item">Email: {customerData.email}</p>
                          <p className="dropdown-item">Phone Number: {customerData.phoneNumber}</p>
                          <p className="dropdown-item">Aadhar Number: {customerData.aadharNumber}</p>
                          <p className="dropdown-item">Gender: {customerData.gender}</p>
                          <p className="dropdown-item">Address: {customerData.address}</p>

                        </div>
                      </div>
                    )}
                    <button className="btn btn-secondary" style={{ marginLeft: '10px', backgroundColor: '#750D37', color: 'white' }} onClick={handleLogout}>Logout</button>
                  </div>
                </div>
              </div>


              <div className="container bg-white p-5 mt-1" style={{ height: '1600px', width: '1200px', marginLeft: '50px', boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="card mt-4 " style={{ height: '290px', width: '370px', boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>
                      <div className="card-body">
                        <h4 className="card-title" style={{ color: '#871f40' }}>Account Details</h4>
                        <p className="card-text">
                          Account Balance (1 Account)<br />
                          <span style={{ color: '#871f40' }}>₹25000.00</span>

                          <hr className="my-3" style={{ borderColor: 'black' }} />
                          Account Number: XXXXXXXX<br />
                          <span style={{ color: '#871f40' }}>₹25000.00</span>

                          <hr className="my-3" style={{ borderColor: 'black' }} />
                          <em style={{ fontSize: '14px', color: '#871f40' }}>Grow your money by investing in mutual funds.</em>
                        </p>
                      </div>
                    </div>
                  </div>
                  {complaintData && (
                    <div className="col-md-6 mb-4">
                      <div className="card mt-4 " style={{ height: '290px', width: '370px', marginLeft: '70px', boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>
                        <div className="card-body text-center">
                          <h5 className="card-title">Complaints List</h5>
                          <img src="sup.jpg" alt="Complaints" className="card-img-top" style={{ width: '180px', height: '160px', objectFit: 'cover' }} />
                          <button className="btn btn-primary" style={{ backgroundColor: '#871f40' }} onClick={handleViewComplaints}>
                            View Your Complaints
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="col-md-2 mb-4">
                    <div className="card mt-4  " style={{ height: '290px', width: '170px', boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>

                      <div className="card-body">
                        <h5 className="card-title text-center" style={{ fontSize: '19px' }}>
                          Relationship Manager
                        </h5>
                        <img src="Handshake.jpg" className="card-img-top" style={{ width: '100px', height: '120px', objectFit: 'cover' }} alt="Relationship Manager" />
                        <button className="btn btn-primary" style={{ backgroundColor: '#871f40' }} onClick={handleKnowYourRm}>
                          Know Your RM
                        </button>
                        {isRmInfoVisible && (
                          <div className="col-md-6 mb-4">
                            <div className="card mt-4 " style={{ height: '330px', width: '190px', marginTop: '15px' }}>
                              <div className="card-body">

                                <div>
                                  <p style={{ color: '#333' }}>Please contact your nearest branch or reach below customer care numbers for any assistance.</p>
                                  <p style={{ color: '#343a40', fontWeight: 'bold' }}>1-860-419-5555 / 1-860-500-5555</p>
                                  <div className="card-body text-center">
                                    <button className="btn btn-primary " style={{ backgroundColor: '#871f40' }} onClick={handleOk}>
                                      OK
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {showComplaintsCard && (
                    <div className="col-md-6 mb-4">
                      <div className="card mt-4 " style={{ width: '900px', boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>
                        <div className="card-body">
                          <h5 className="card-title">Your Complaints</h5>
                          <table className="table">


                            <tbody>
                              <tr>
                                <th>Complaint ID</th>
                                <td>{complaintData.complaintId}</td>
                              </tr>
                              <tr>
                                <th>Category</th>
                                <td>{complaintData.category}</td>
                              </tr>
                              <tr>
                                <th>Status</th>
                                <td>{complaintData.status}</td>
                              </tr>
                              <tr>
                                <th>Created At</th>
                                <td>{complaintData.createdAt}</td>
                              </tr>
                              <tr>
                                <th>Resolved At</th>
                                <td>{complaintData.resolvedAt ? complaintData.resolvedAt : 'Not Resolved Yet'}</td>
                              </tr>
                              <tr>
                                <th>Complaint Text</th>
                                <td>{complaintData.complaintText}</td>
                              </tr>
                            </tbody>
                          </table>
                          <button className="btn btn-primary" style={{ backgroundColor: '#871f40' }} onClick={handleGoBack}>
                            Back
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <hr style={{ borderColor: '#333', marginTop: '20px' }} />
                  <h4 style={{ color: '#871f40' }}>RECENTLY USED</h4>

                  <div className="row">
                    <div className="col-md-3 mb-3">
                      <div className="card" style={{ boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>
                        <div className="card-body">
                          <img src="acc.jpg" className="card-img-top" style={{ width: '145px', height: '70px', objectFit: 'cover', paddingLeft: '40px' }} alt="Card 1" />
                          <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h6 className="card-text text-center">ACCOUNTS</h6></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="card" style={{ boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>
                        <div className="card-body" style={{ paddingLeft: '50px' }}>
                          <img src="Mutualfunds.jpg" className="card-img-top" style={{ width: '115px', height: '70px', objectFit: 'cover' }} alt="Card 1" />
                          <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h6 className="card-text text-center">MUTUAL FUNDS</h6></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="card" style={{ boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>
                        <div className="card-body">
                          <img src="RD.jpg" className="card-img-top" style={{ width: '125px', height: '70px', objectFit: 'cover', paddingLeft: '50px' }} alt="Card 1" />
                          <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h6 className="card-text text-center">FD/RD</h6></Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 mb-3">
                      <div className="card" style={{ boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>
                        <div className="card-body">
                          <img src="forexCards.jpg" className="card-img-top" style={{ width: '125px', height: '70px', objectFit: 'cover', paddingLeft: '50px' }} alt="Card 1" />
                          <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h6 className="card-text text-center">FOREX CARDS</h6></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="card" style={{ boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>
                        <div className="card-body">
                          <img src="Loa.jpg" className="card-img-top" style={{ width: '160px', height: '70px', objectFit: 'cover', paddingLeft: '30px' }} alt="Card 1" />
                          <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h6 className="card-text text-center">LOANS</h6></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="card" style={{ boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>
                        <div className="card-body">
                          <img src="services.jpg" className="card-img-top" style={{ width: '130px', height: '70px', objectFit: 'cover', paddingLeft: '60px' }} alt="Card 1" />
                          <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h6 className="card-text text-center">SERVICES</h6></Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 mb-3">
                      <div className="card" style={{ boxShadow: '0px 4px 8px rgba(1, 1, 0, 0.3)' }}>
                        <div className="card-body">
                          <img src="fund transfer.jpg" className="card-img-top" style={{ width: '150px', height: '70px', objectFit: 'cover', paddingLeft: '30px' }} alt="Card 1" />
                          <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h6 className="card-text text-center">FUNDS TRANSFER</h6></Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3 mb-3" >
                      <div className="card" style={{ boxShadow: '0px 4px 8px rgba(1, 1, 0, 0.3)' }}>
                        <div className="card-body">
                          <img src="pay.jpg" className="card-img-top" style={{ width: '160px', height: '70px', objectFit: 'cover', paddingLeft: '40px' }} alt="Card 1" />
                          <Link to="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <h6 className="card-text text-center">PAYMENTS</h6>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr style={{ borderColor: '#333', marginTop: '20px' }} />
                  <DashboardCarousel />
                  <div className="card mt-2 mx-5" style={{ width: '420px', boxShadow: '0px 4px 8px rgba(1, 1, 1, 0.3)' }}>
                    <div className="card-body">
                      <h4 className="card-title">Security Notice</h4>
                      <p className="card-text">
                        For your security, please do not share your account information,
                        password, or any sensitive information with anyone. Axis Bank will
                        never ask for this information through email or phone.
                      </p>
                      <ul>
                        <li>
                          <Link to="#" style={{ color: '#871f40' }}>Contact Customer Support</Link>
                        </li>
                        <li>
                          <Link to="#" style={{ color: '#871f40' }}>New User?</Link>
                        </li>
                      </ul>
                      <Chatbot />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ComplaintWrapperButton onClick={handleComplaintWrapperClick} />

    </div>

  );
};

export default CustomerDashboard;
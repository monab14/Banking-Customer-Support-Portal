import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ComplaintsAndTeam from "../../components/ComplaintsAndTeam";
// import AdminAddFaq from './AdminAddFaq';
// import AdminSolveQuery from './AdminSolveQuery';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [AdminData, setAdminData] = useState(null);
  const [complaintData, setComplaintData] = useState(null);
  const [showComplaintsCard, setShowComplaintsCard] = useState(false);

  const handleViewComplaints = () => {
    setShowComplaintsCard(true);
  };

  const handleGoBack = () => {
    setShowComplaintsCard(false);
  };
  const Card = ({ imageUrl }) => (
    <div style={cardStyle}>
      <img src={imageUrl} alt="Card" style={cardImageStyle} />
    </div>
  );
  const cardStyle = {
    width: "80%",
    height: "60%",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
    margin: "0 10px",
  };

  const cardImageStyle = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "8px",
  };
  const handleLogout = () => {
    navigate("/adminlogin");
  };

  useEffect(() => {
    fetch("http://localhost:8090/admins/1")
      .then((response) => response.json())
      .then((data) => setAdminData(data))
      .catch((error) => console.error("Error fetching customer data:", error));

    fetch("http://localhost:8090/complaints/all")
      .then((response) => response.json())
      .then((data) => setComplaintData(data))
      .catch((error) => console.error("Error fetching complaint data:", error));

    // fetch('http://localhost:8090/api/assign/${complaintId}/${teamName}')
    //   .then(response => response.json())
    //   .then(data => setSelectedComplaint(data))
    //   .catch(error => console.error('Error fetching team data:', error));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const cardsData = [
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBqop2dpaj_GECWNOkEL1WPrSsXkHMDWi2jw&usqp=CAU",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQy4ju4RtFrTJEwnVx2UPG0wKl994Mok1A0w&usqp=CAU",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwrzv0k3WIvclfJofY1xQZOAGxcn-ytRNtzQ&usqp=CAU",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxfqtiY0DnpPSrG7OvzH1O7QD1_8Q4HN5A0A&usqp=CAU",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuhhkLnWRAKk71Ah_2gknGq7QBv9H8G2StD2xJ4pTLfUC7f7nW5uFMH8mISdl8ZDDDPtw&usqp=CAU",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQr2HJ-OEVHqviVnpLYU2KxUVxixKUk_riQ&usqp=CAU",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9gHlouJHIKXxOS0AnyquT8BzPBeTLHz3KA&usqp=CAU",
    },
  ];
  return (
    <div style={{ backgroundColor: "#f0f0f0" }}>
      <div
        className="dashboard-banner d-flex align-items-center justify-content-left"
        style={{
          height: "60px",
          backgroundColor: "#871f40",
          color: "#ffffff",
          padding: "8px",
        }}
      >
        <div className="logo">
          <img
            src="/MonaImages/axislogo.jpg"
            alt="Axis Bank Logo"
            height="50px"
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          height: "50px",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 16px",
          alignItems: "center",
          boxShadow: "0px 4px 8px rgba(1, 1, 1, 0.3)",
        }}
      >
        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              margin: 300,
              padding: 10,
            }}
          >
            <li style={{ marginRight: "200px", marginTop: "15px" }}>
              <Link to="/AdminAddFaq">
                <h5 style={{ color: "black" }}>Add FAQS</h5>
              </Link>
            </li>
            <li style={{ marginTop: "15px" }}>
              <Link to="#">
                <h5 style={{ color: "black" }}>Support Team</h5>
              </Link>
            </li>

            <li style={{ marginTop: "15px", marginLeft: "200px" }}>
              <Link to="/solveQuery">
                <h5 style={{ color: "black" }}>ALL QUERIES</h5>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container ml-0">
        <div className="row">
          <div className="col-md-1 ml-2 bg-dark sidebar text-white">
            <div className="d-flex flex-column align-items-center p-3">
              <div
                className="mb-4"
                style={{
                  backgroundColor: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                {" "}
                {/* Updated background color */}
                <img
                  src="/dashboard.jpg"
                  className="card-img-top mt-1"
                  alt="Dashboard Icon"
                  style={{ width: "60px", height: "50px", objectFit: "cover" }}
                />
                <h6
                  className="card-title mb-0"
                  style={{
                    fontSize: "14px",
                    fontWeight: "normal",
                    color: "#000",
                  }}
                >
                  Dashboard
                </h6>
              </div>

              <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="mb-3 border-top ">
                  <img
                    src="/account.jpg"
                    className="card-img-top pt-2"
                    alt="Accounts Icon"
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <h6
                    className="card-title mb-0"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      color: "#fff",
                    }}
                  >
                    ACCOUNTS
                  </h6>
                </div>
              </Link>
              <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="mb-3 border-top">
                  <img
                    src="/support.jpg"
                    className="card-img-top pt-2"
                    alt="FD Icon"
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <h6
                    className="card-title mb-0"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      color: "#fff",
                    }}
                  >
                    SUPPORT
                  </h6>
                </div>
              </Link>
              <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="mb-3 border-top">
                  <img
                    src="/Payments.jpg"
                    className="card-img-top pt-2"
                    alt="Payments Icon"
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <h6
                    className="card-title mb-0"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      color: "#fff",
                    }}
                  >
                    PAYMENTS
                  </h6>
                </div>
              </Link>
              <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="mb-3 border-top">
                  <img
                    src="/Loan.jpg"
                    className="card-img-top pt-2"
                    alt="Loans Icon"
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <h6
                    className="card-title mb-0"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      color: "#fff",
                    }}
                  >
                    LOANS
                  </h6>
                </div>
              </Link>
              <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="mb-3 border-top">
                  <img
                    src="/cards.jpg"
                    className="card-img-top pt-2"
                    alt="Cards Icon"
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <h6
                    className="card-title mb-0"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      color: "#fff",
                    }}
                  >
                    CARDS
                  </h6>
                </div>
              </Link>
              <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="mb-3 border-top">
                  <img
                    src="/Investment.jpg"
                    className="card-img-top pt-2"
                    alt="investment Icon"
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <h6
                    className="card-title mb-0"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      color: "#fff",
                    }}
                  >
                    INVESTMENT
                  </h6>
                </div>
              </Link>
              <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="mb-3 border-top">
                  <img
                    src="/FDRD.jpg"
                    className="card-img-top pt-2"
                    alt="FD Icon"
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <h6
                    className="card-title mb-0"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      color: "#fff",
                    }}
                  >
                    FD/RD
                  </h6>
                </div>
              </Link>
              <Link to="#" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="mb-3 border-top">
                  <img
                    src="/insurance.jpg"
                    className="card-img-top pt-2"
                    alt="FD Icon"
                    style={{
                      width: "80px",
                      height: "60px",
                      objectFit: "cover",
                    }}
                  />
                  <h6
                    className="card-title mb-0"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      color: "#fff",
                    }}
                  >
                    INSURANCE
                  </h6>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-md-10">
            <div className="mt-2">
              <div className="d-flex align-items-center justify-content-between">
                <div className="col-md-8">
                  <h2 style={{ marginLeft: "20px" }}> Admin Dashboard</h2>
                </div>
                <div className="col-md-3"></div>

                <div className="d-flex align-items-center">
                  <div className="mr-3">
                    <h5>
                      {AdminData ? `${AdminData.username} ` : "Your Profile"}
                    </h5>
                  </div>
                  <img
                    src="contacts.png"
                    alt="Contacts"
                    className="card-img-top ml-auto"
                    style={{
                      width: "70px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />

                  <button
                    className="btn btn-danger"
                    style={{
                      backgroundColor: "#871f40",
                      borderColor: "#871f40",
                      marginRight: "10px",
                    }}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>

              <div
                className="container bg-white p-5 mt-1"
                style={{
                  height: "1600px",
                  width: "1200px",
                  marginLeft: "40px",
                  boxShadow: "0px 4px 8px rgba(1, 1, 1, 0.3)",
                }}
              >
                <div className="row" style={{ marginTop: "1px" }}>
                  {complaintData && (
                    <div
                      className="card mt-2 "
                      style={{
                        width: "300px",
                        marginRight: "50px",
                        height: "300px",
                        padding: "20px",
                        boxShadow: "0px 4px 8px rgba(1, 1, 1, 0.3)",
                      }}
                    >
                      <div
                        className="card-body text-center"
                        style={{ color: "#871f40", marginTop: "0px" }}
                      >
                        <h4 className="card-title">COMPLAINTS LIST</h4>
                        <img
                          src="sup.jpg"
                          alt="Complaints"
                          className="card-img-top"
                          style={{
                            marginTop: "0px",
                            width: "160px",
                            height: "170px",
                            objectFit: "cover",
                          }}
                        />
                        <button
                          className="btn btn-primary"
                          style={{ backgroundColor: "#871f40" }}
                          onClick={handleViewComplaints}
                        >
                          Customer Complaints
                        </button>
                      </div>
                    </div>
                  )}
                  <div
                    className=" used cards"
                    style={{
                      width: "700px",
                      height: "300px",
                      marginTop: "10px",
                      boxShadow: "0px 4px 8px rgba(1, 1, 1, 0.3)",
                    }}
                  >
                    <div className="row">
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <div
                            className="card-body"
                            style={{ width: "130px", height: "130px" }}
                          >
                            <img
                              src="acc.jpg"
                              className="card-img-top"
                              style={{
                                width: "90px",
                                height: "70px",
                                objectFit: "cover",
                                paddingLeft: "-10px",
                              }}
                              alt="Card 1"
                            />
                            <Link
                              to="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text-center">ACCOUNTS</h6>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <div
                            className="card-body"
                            style={{
                              width: "110px",
                              height: "130px",
                              paddingLeft: "-10px",
                            }}
                          >
                            <img
                              src="Mutualfunds.jpg"
                              className="card-img-top"
                              style={{
                                width: "80px",
                                height: "60px",
                                objectFit: "cover",
                                paddingLeft: "-10px",
                              }}
                              alt="Card 1"
                            />
                            <Link
                              to="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text text-center">
                                MUTUAL FUNDS
                              </h6>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div
                          className="card"
                          style={{ width: "140px", height: "130px" }}
                        >
                          <div className="card-body">
                            <img
                              src="RD.jpg"
                              className="card-img-top"
                              style={{
                                width: "75px",
                                height: "65px",
                                objectFit: "cover",
                                paddingRight: "5px",
                              }}
                              alt="Card 1"
                            />
                            <Link
                              to="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text text-center">FD/RD</h6>
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <div
                            className="card-body"
                            style={{
                              width: "130px",
                              height: "130px",
                              paddingleft: "25px",
                            }}
                          >
                            <img
                              src="forexCards.jpg"
                              className="card-img-top"
                              style={{
                                width: "75px",
                                height: "60px",
                                objectFit: "cover",
                                paddingLeft: "-10px",
                              }}
                              alt="Card 1"
                            />
                            <Link
                              to="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text text-center">
                                FOREX CARDS
                              </h6>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <div
                            className="card-body"
                            style={{
                              width: "100px",
                              height: "130px",
                              paddingleft: "25px",
                            }}
                          >
                            <img
                              src="Loa.jpg"
                              className="card-img-top"
                              style={{
                                width: "70px",
                                height: "70px",
                                objectFit: "cover",
                                paddingLeft: "-10px",
                              }}
                              alt="Card 1"
                            />
                            <Link
                              to="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text text-center">LOANS</h6>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <div
                            className="card-body"
                            style={{
                              width: "140px",
                              height: "130px",
                              paddingleft: "20px",
                            }}
                          >
                            <img
                              src="services.jpg"
                              className="card-img-top"
                              style={{
                                width: "60px",
                                height: "70px",
                                objectFit: "cover",
                                paddingLeft: "20px",
                              }}
                              alt="Card 1"
                            />
                            <Link
                              to="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text text-center">
                                SERVICES
                              </h6>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <div
                            className="card-body"
                            style={{
                              width: "140px",
                              height: "130px",
                              paddingleft: "20px",
                            }}
                          >
                            <img
                              src="pay.jpg"
                              className="card-img-top"
                              style={{
                                width: "80px",
                                height: "70px",
                                objectFit: "cover",
                                paddingLeft: "0px",
                              }}
                              alt="Card 1"
                            />
                            <Link
                              to="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text text-center">
                                PAYMENTS
                              </h6>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div className="card">
                          <div
                            className="card-body"
                            style={{
                              width: "140px",
                              height: "130px",
                              paddingleft: "20px",
                            }}
                          >
                            <img
                              src="fund transfer.jpg"
                              className="card-img-top"
                              style={{
                                width: "90px",
                                height: "50px",
                                objectFit: "cover",
                                paddingLeft: "0px",
                              }}
                              alt="Card 1"
                            />
                            <Link
                              to="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text text-center">
                                FUNDS TRANSFER
                              </h6>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {showComplaintsCard && (
                    <div
                      className="card"
                      style={{
                        width: "1120px",
                        boxShadow: "0px 4px 8px rgba(1, 1, 1, 0.3)",
                      }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">
                          Customer Complaint Details
                        </h5>
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Customer ID</th>
                              <th>Complaint ID</th>
                              <th>Category</th>
                              {/* <th>Status</th> */}
                              <th>Created At</th>
                              <th>Resolved At</th>
                              <th>Complaint Text</th>
                              <th>Assign to</th>
                            </tr>
                          </thead>
                          <tbody>
                            {complaintData.map((complaint) => (
                              <tr key={complaint.complaintId}>
                                <td>{complaint.customer.customerid}</td>
                                <td>{complaint.complaintId}</td>
                                <td>{complaint.category}</td>
                                {/* <td>{complaint.status}</td> */}
                                <td>{complaint.createdAt}</td>
                                <td>{complaint.resolvedAt}</td>
                                <td>{complaint.complaintText}</td>
                                <td>
                                  {<ComplaintsAndTeam complaint={complaint} />}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <button
                          className="btn btn-primary"
                          style={{ backgroundColor: "#871f40" }}
                          onClick={handleGoBack}
                        >
                          Back
                        </button>
                      </div>
                    </div>
                  )}

                  <hr style={{ borderColor: "#333", marginTop: "20px" }} />
                  <h2 className="mt-5 mb-3" style={{ color: "#750D37" }}>
                    Latest Updates
                  </h2>
                  <Slider {...sliderSettings}>
                    {cardsData.map((card, index) => (
                      <Card key={index} imageUrl={card.imageUrl} />
                    ))}
                  </Slider>
                  <img
                    src="img.png"
                    className="card-img-top"
                    style={{
                      width: "1300px",
                      height: "500px",
                      objectFit: "half",
                      paddingLeft: "40px",
                    }}
                    alt="Card 1"
                  />
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

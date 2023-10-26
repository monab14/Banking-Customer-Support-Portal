import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SupportCarousel from "../SupportCarousel";
const SupportTeam = () => {
  const navigate = useNavigate();
  const [TeamData, setTeamData] = useState(null);
  const [complaintData, setComplaintData] = useState(null);
  const [showComplaintsCard, setShowComplaintsCard] = useState(false);

  const handleViewComplaints = () => {
    setShowComplaintsCard(true);
  };

  const handleGoBack = () => {
    setShowComplaintsCard(false);
  };

  const handleLogout = () => {
    navigate("/adminlogin");
  };

  const handleStatusChange = (newStatus, complaintId) => {

    fetch(`http://localhost:8090/complaints/updateStatus/${complaintId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((response) => response.json())
      .then((updatedComplaint) => {
        // Update the complaint status if necessary
        const updatedComplaintData = complaintData.map((complaint) => {
          if (complaint.complaintId === complaintId) {
            const indianDate = new Date().toLocaleString("en-US", {
              timeZone: "Asia/Kolkata",
            });

            return {
              ...complaint,
              status: updatedComplaint.status,
              resolvedAt: indianDate,
            };
          }
          return complaint;
        });

        setComplaintData(updatedComplaintData);
      })
      .catch((error) =>
        console.error("Error updating complaint status:", error)
      );
  };

  useEffect(() => {
    // Fetch customer data
    const supportTeam = JSON.parse(localStorage.getItem("team"));
    fetch(`http://localhost:8090/teams/${supportTeam.teamId}`)
      .then((response) => response.json())
      .then((data) => setTeamData(data))
      .catch((error) => console.error("Error fetching customer data:", error));

    // Fetch complaint data
    fetch("http://localhost:8090/complaints/all")
      .then((response) => response.json())
      .then((data) => {
        setComplaintData(data);
      })
      .catch((error) => console.error("Error fetching complaint data:", error));
  }, []);

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
            height="50"
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          height: "20px",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 16px",
          alignItems: "center",
          boxShadow: "0px 4px 8px rgba(1, 1, 1, 0.3)",
        }}
      ></div>

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

              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
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
              </a>
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
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
              </a>
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
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
              </a>
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
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
              </a>
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
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
              </a>
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
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
              </a>
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
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
              </a>
              <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
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
              </a>
            </div>
          </div>
          <div className="col-md-10">
            <div className="mt-2">
              <div className="d-flex align-items-center justify-content-between">
                <div className="col-md-8">
                  <h2 style={{ marginLeft: "20px", color: "grey" }}>
                    Axis Bank Support Team{" "}
                    <span style={{ fontStyle: "italic", color: "#871f40" }}>
                      Dil se open
                    </span>
                  </h2>
                </div>
                <div className="col-md-4"></div>

                <div className="d-flex align-items-center">
                  <div className="mr-2" style={{ whiteSpace: "nowrap" }}>
                    <h5>
                      {TeamData ? `${TeamData.teamName} ` : "Your Profile"}
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
                  <SupportCarousel
                    style={{
                      marginTop: "10px",
                      marginLeft: "30px",
                      marginRight: "30px",
                      boxShadow: "0px 4px 8px rgba(1, 1, 1, 0.3)",
                    }}
                  />

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
                              <th>Category</th>
                              <th>Status</th>
                              <th>New Status</th>
                              <th>Created At</th>
                              <th>Resolved At</th>
                              <th>Complaint Text</th>
                              <th>Update Complaints Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            {complaintData.length > 0 &&
                              complaintData.map((complaint) => (
                                <tr key={complaint.complaintId}>
                                  <td>{complaint.customer.customerid}</td>
                                  <td>{complaint.category}</td>
                                  <td>{complaint.status}</td>
                                  <td>
                                    <select
                                      value={complaint.status}
                                      onChange={(e) =>
                                        handleStatusChange(
                                          e.target.value,
                                          complaint.complaintId
                                        )
                                      }
                                    >
                                      <option value="Inprogress">
                                        Inprogress
                                      </option>
                                      <option value="Resolved">Resolved</option>
                                      <option value="Closed">Closed</option>
                                    </select>
                                  </td>
                                  <td>{complaint.createdAt}</td>
                                  <td>{complaint.resolvedAt}</td>
                                  <td>{complaint.complaintText}</td>

                                  <td>
                                    <button
                                      className="btn btn-primary"
                                      style={{
                                        backgroundColor: "#871f40",
                                        borderColor: "#871f40",
                                      }}
                                      onClick={() =>
                                        handleStatusChange(
                                          complaint.status,
                                          complaint.complaintId
                                        )
                                      }
                                    >
                                      Update
                                    </button>
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
                  <div
                    className=" used cards"
                    style={{
                      width: "1200px",
                      height: "300px",
                      marginTop: "10px",
                      boxShadow: "0px 4px 8px rgba(1, 1, 1, 0.3)",
                    }}
                  >
                    <div className="row">
                      <div className="col-md-3 mb-3">
                        <div
                          className="card"
                          style={{
                            boxShadow: "0px 4px 8px rgba(1, 1, 1, 0.3)",
                          }}
                        >
                          <div className="card-body">
                            <img
                              src="acc.jpg"
                              className="card-img-top"
                              style={{
                                width: "145px",
                                height: "70px",
                                objectFit: "cover",
                                paddingLeft: "40px",
                              }}
                              alt="Card 1"
                            />
                            <a
                              href="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text text-center">
                                ACCOUNTS
                              </h6>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div
                          className="card"
                          style={{
                            boxShadow: "0px 4px 8px rgba(1, 1, 1, 0.3)",
                          }}
                        >
                          <div
                            className="card-body"
                            style={{ paddingLeft: "50px" }}
                          >
                            <img
                              src="Mutualfunds.jpg"
                              className="card-img-top"
                              style={{
                                width: "115px",
                                height: "70px",
                                objectFit: "cover",
                              }}
                              alt="Card 1"
                            />
                            <a
                              href="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text text-center">
                                MUTUAL FUNDS
                              </h6>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div
                          className="card"
                          style={{
                            boxShadow: "0px 4px 8px rgba(1, 1, 1, 0.3)",
                          }}
                        >
                          <div className="card-body">
                            <img
                              src="RD.jpg"
                              className="card-img-top"
                              style={{
                                width: "125px",
                                height: "70px",
                                objectFit: "cover",
                                paddingLeft: "50px",
                              }}
                              alt="Card 1"
                            />
                            <a
                              href="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text text-center">FD/RD</h6>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 mb-3">
                        <div
                          className="card"
                          style={{
                            boxShadow: "0px 4px 8px rgba(1, 1, 1, 0.3)",
                          }}
                        >
                          <div className="card-body">
                            <img
                              src="forexCards.jpg"
                              className="card-img-top"
                              style={{
                                width: "125px",
                                height: "70px",
                                objectFit: "cover",
                                paddingLeft: "50px",
                              }}
                              alt="Card 1"
                            />
                            <a
                              href="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text text-center">
                                FOREX CARDS
                              </h6>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div
                          className="card"
                          style={{
                            boxShadow: "0px 4px 8px rgba(1, 1, 1, 0.3)",
                          }}
                        >
                          <div className="card-body">
                            <img
                              src="Loa.jpg"
                              className="card-img-top"
                              style={{
                                width: "160px",
                                height: "70px",
                                objectFit: "cover",
                                paddingLeft: "30px",
                              }}
                              alt="Card 1"
                            />
                            <a
                              href="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text text-center">LOANS</h6>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div
                          className="card"
                          style={{
                            boxShadow: "0px 4px 8px rgba(1, 1, 1, 0.3)",
                          }}
                        >
                          <div className="card-body">
                            <img
                              src="services.jpg"
                              className="card-img-top"
                              style={{
                                width: "130px",
                                height: "70px",
                                objectFit: "cover",
                                paddingLeft: "60px",
                              }}
                              alt="Card 1"
                            />
                            <a
                              href="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text text-center">
                                SERVICES
                              </h6>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <div
                          className="card"
                          style={{
                            boxShadow: "0px 4px 8px rgba(1, 1, 0, 0.3)",
                          }}
                        >
                          <div className="card-body">
                            <img
                              src="fund transfer.jpg"
                              className="card-img-top"
                              style={{
                                width: "150px",
                                height: "70px",
                                objectFit: "cover",
                                paddingLeft: "30px",
                              }}
                              alt="Card 1"
                            />
                            <a
                              href="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text text-center">
                                FUNDS TRANSFER
                              </h6>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3 mb-3">
                        <div
                          className="card"
                          style={{
                            boxShadow: "0px 4px 8px rgba(1, 1, 0, 0.3)",
                          }}
                        >
                          <div className="card-body">
                            <img
                              src="pay.jpg"
                              className="card-img-top"
                              style={{
                                width: "160px",
                                height: "70px",
                                objectFit: "cover",
                                paddingLeft: "40px",
                              }}
                              alt="Card 1"
                            />
                            <a
                              href="#"
                              style={{
                                textDecoration: "none",
                                color: "inherit",
                              }}
                            >
                              <h6 className="card-text text-center">
                                PAYMENTS
                              </h6>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr style={{ borderColor: "#333", marginTop: "20px" }} />
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

export default SupportTeam;

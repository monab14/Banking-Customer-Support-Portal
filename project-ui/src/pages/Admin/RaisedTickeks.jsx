import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const containerStyle = {
  backgroundColor: "#F0F2EF",
  borderRadius: "10px",
  padding: "10px",
  marginTop: "20px",
};

const TicketTable = ({ ticket, onStatusChange }) => {
  if (!ticket) {
    return <p>No data available.</p>;
  }
  const handleOptionSelect = (newStatus) => {
    onStatusChange(ticket.customerid, ticket.ticketid, newStatus);
  };
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Ticket ID</th>
          <th>Customer ID</th>
          <th>Query</th>
          <th>Created At</th>
          <th>Resolved At</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{ticket.ticketid}</td>
          <td>{ticket.customerid}</td>
          <td>{ticket.query}</td>
          <td>{ticket.createdat}</td>
          <td>{ticket.resolvedAt}</td>
          <td>
            <div
              className="dropdown text-center  d-flex justify-content-center align-items-center"
              
            >
              <button
                className={`btn btn-secondary dropdown-toggle`}
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  backgroundColor: "#F0F2EF",
                  color: "#750D37",
                  width: "100px",
                  padding: "10px",
                }}
              >
                {ticket.status}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <button
                    className="dropdown-item"
                    style={{
                      backgroundColor: "#F0F2EF",
                      color: "#750D37",

                      textAlign: "center",
                    }}
                    onClick={() => handleOptionSelect("Open")}
                  >
                    Open
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    style={{
                      backgroundColor: "#F0F2EF",
                      color: "#750D37",

                      textAlign: "center",
                    }}
                    onClick={() => handleOptionSelect("In Review")}
                  >
                    In Review
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    style={{
                      backgroundColor: "#F0F2EF",
                      color: "#750D37",

                      textAlign: "center",
                    }}
                    onClick={() => handleOptionSelect("Closed")}
                  >
                    Closed
                  </button>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const RaisedTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null); // State to store selected ticket

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get("http://localhost:8090/api/allticket");
        if (response.status === 200) {
          setTickets(response.data);
        }
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  const handleStatusChange = async (customerid, ticketid, newStatus) => {
    console.log("Customer ID:", customerid);
    console.log("Ticket ID:", ticketid);
    try {
      const resolvedAt = new Date().toLocaleString();

      const selectedTicket = tickets.find(
        (ticket) => ticket.ticketid === ticketid
      );
      const query = selectedTicket.query;

      const response = await axios.put(
        `http://localhost:8090/api/${customerid}/ticket/${ticketid}`,
        JSON.stringify({ status: newStatus, resolvedAt : resolvedAt, query }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setTickets((prevTickets) =>
          prevTickets.map((ticket) =>
            ticket.ticketid === ticketid
              ? { ...ticket, status: newStatus, resolvedAt, query }
              : ticket
          )
        );

        setSelectedTicket((prevSelectedTicket) => ({
          ...prevSelectedTicket,
          status: newStatus,
          resolvedAt,
          query,
        }));
      }
    } catch (error) {
      console.error("Error updating ticket status:", error);
    }
  };

  const handleTicketClick = (ticketid) => {
    const selected = tickets.find((ticket) => ticket.ticketid === ticketid);
    console.log("Selected Ticket:", selected);
    setSelectedTicket(selected);
  };

  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="faq-section">
        <div
          className="container mt-5 mb-5 px-5 rounded mx-auto"
          style={containerStyle}
        >
          <h2 className="text-center" style={{ color: "#871f40" }}>
            All Raised Tickets
          </h2>

          <div className="accordion" style={{ textAlign: "center" }}>
            {tickets.map((ticket) => (
              <div key={ticket.ticketid} className="accordion-item">
                <h2
                  className="accordion-header"
                  style={{ backgroundColor: "#FFFFFF", borderRadius: "10px" }}
                >
                  <button
                    className="accordion-button"
                    type="button"
                    onClick={() => handleTicketClick(ticket.ticketid)}
                    style={{ backgroundColor: "#FFFFFF", borderRadius: "10px", padding: "30px" }}
                  >
                    {ticket.ticketid}
                  </button>
                </h2>
                {selectedTicket &&
                  selectedTicket.ticketid === ticket.ticketid && (
                    <div className="accordion-collapse show">
                      <div className="accordion-body">
                        <TicketTable
                          ticket={selectedTicket}
                          customerid={selectedTicket.customerid}
                          onStatusChange={handleStatusChange}
                        />
                      </div>
                    </div>
                  )}
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

export default RaisedTickets;

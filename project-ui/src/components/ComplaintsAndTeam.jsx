import React, { useState } from "react";

function ComplaintsAndTeam({ complaint }) {
  const [teamName, setTeamName] = useState();
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  const handleAssignComplaint = () => {
    if (selectedTeamId && complaint) {
      const complaintId = complaint.complaintId;
      fetch(
        `http://localhost:8090/api/assign/${complaintId}/${selectedTeamId}`,
        {
          method: "POST",
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Response data:", data);

          if (data) {
            alert("Complaint assigned successfully to team: " + teamName);
          } else {
            alert("Failed to assign the complaint");
          }
        })
        .catch((error) => {
          console.error("Error assigning complaint:", error);
          alert("An error occurred while assigning the complaint");
        });
    }
  };

  const fetchComplaint = async (complaint) => {
    try {
      const response = await fetch(
        `http://localhost:8090/api/assignment/customer/assignment/${complaint.complaintId}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (!data || !data.teamId) {
        throw new Error(
          "Invalid response or missing 'teamId' in response data."
        );
      }

      const res = await fetch("http://localhost:8090/teams/all");
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const teamsData = await res.json();
      const team = teamsData.find((team) => team.teamId === data.teamId);
      if (!team) {
        throw new Error("Team not found in response data.");
      }

      setTeamName(team.teamName);
    } catch (error) {
      console.error("Error fetching or processing data:", error);
      // Handle the error as needed, e.g., set an error state or show an error message.
    }
  };

  useState(() => {
    fetchComplaint(complaint);
  });

  return teamName ? (
    teamName
  ) : (
    <div>
      <select onChange={(e) => setSelectedTeamId(e.target.value)}>
        <option value="">Select Team</option>
        <option value={1}>Debit Card</option>
        <option value={2}>Credit Card</option>
        <option value={3}>Loan Team</option>
        <option value={4}>Customer Care</option>
      </select>
      <button
        className="btn btn-primary"
        style={{ backgroundColor: "#871f40" }}
        onClick={() => handleAssignComplaint()}
      >
        Assign
      </button>
    </div>
  );
}

export default ComplaintsAndTeam;

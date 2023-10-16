import React, { useState, useEffect } from 'react';


const ComplaintTable = ({ complaints }) => (
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
      {complaints.map((complaint) => (
        <tr key={complaint.complaintId}>
          <td>{complaint.complaintId}</td>
          <td>{complaint.customer.customerName}</td>
          <td>{complaint.category}</td>
          <td>{complaint.status}</td>
          <td>{complaint.createdAt}</td>
          <td>{complaint.resolvedAt}</td>
          <td>{complaint.complaintText}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ComplaintTable;

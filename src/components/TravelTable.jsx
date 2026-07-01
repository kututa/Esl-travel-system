import React from 'react';
import StatusBadge from './StatusBadge.jsx';

function TravelTable({ requests }) {
  const tableContainerStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse'
  };

  const thStyle = {
    padding: '12px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
    background: '#f0f0f0',
    fontWeight: 'bold'
  };

  const tdStyle = {
    padding: '12px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left'
  };

  return (
    <div style={tableContainerStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Employee</th>
            <th style={thStyle}>Destination</th>
            <th style={thStyle}>Purpose</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Start Date</th>
            <th style={thStyle}>End Date</th>
            <th style={thStyle}>Estimated Cost</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td style={tdStyle}>{request.employeeName}</td>
              <td style={tdStyle}>{request.destination}</td>
              <td style={tdStyle}>{request.purpose}</td>
              <td style={tdStyle}><StatusBadge status={request.status} /></td>
              <td style={tdStyle}>{request.startDate}</td>
              <td style={tdStyle}>{request.endDate}</td>
              <td style={tdStyle}>${request.estimatedCost.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TravelTable;
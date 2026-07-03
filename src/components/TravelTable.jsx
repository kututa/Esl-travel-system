import React from "react";
import StatusBadge from "./StatusBadge";

function TravelTable({ requests }) {
  return (
    <div className="table-container">
      <table className="travel-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Destination</th>
            <th>Purpose</th>
            <th>Status</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Estimated Cost</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.employeeName}</td>
              <td>{request.destination}</td>
              <td>{request.purpose}</td>
              <td>
                <StatusBadge status={request.status} />
              </td>
              <td>{request.startDate}</td>
              <td>{request.endDate}</td>
              <td>${request.estimatedCost.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TravelTable;
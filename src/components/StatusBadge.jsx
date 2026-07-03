import React from "react";

function StatusBadge({ status }) {
  let statusClass = "status-pending";

  if (status === "Approved") {
    statusClass = "status-approved";
  } else if (status === "Rejected") {
    statusClass = "status-rejected";
  }

  return (
    <span className={`status-badge ${statusClass}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
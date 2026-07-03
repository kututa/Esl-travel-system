import React from "react";

function DashboardCard({ title, value, icon }) {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card-icon">
        {icon}
      </div>

      <h3 className="dashboard-card-title">
        {title}
      </h3>

      <h2 className="dashboard-card-value">
        {value}
      </h2>
    </div>
  );
}

export default DashboardCard;
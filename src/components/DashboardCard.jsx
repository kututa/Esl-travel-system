import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
function DashboardCard({ title, value, icon }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}
export default DashboardCard;

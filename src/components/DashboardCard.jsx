import React from "react";
import { FaHome, FaUser } from "react-icons/fa";

function DashboardCard({ title, value, icon }) {
  // Internal Styles
  const cardStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    flex: 1,
    minWidth: '200px', // Prevents cards from getting too squished on smaller screens
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
  };

  const iconStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '20px',
    color: '#888' // Subtle grey color for the icon
  };

  const titleStyle = {
    margin: 0,
    fontSize: '16px',
    color: '#555',
    fontWeight: 'normal'
  };

  const valueStyle = {
    margin: '10px 0 0 0',
    fontSize: '30px',
    fontWeight: 'bold',
    color: '#333'
  };

  return (
    <div style={cardStyle}>
      <div style={iconStyle}>{icon}</div>
      <h3 style={titleStyle}>{title}</h3>
      <h2 style={valueStyle}>{value}</h2>
    </div>
  );
}

export default DashboardCard;
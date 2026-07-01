import React, { useState } from 'react';

function SideBar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Internal Layout Structure Styles
  const sidebarStyle = {
    width: '260px', // Slightly wider for structural elegance
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: '#0f172a', // Premium deep slate/dark navy
    color: '#f8fafc',
    padding: '30px 20px',
    boxSizing: 'border-box',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1001,
    borderRight: '1px solid #1e293b'
  };

  const logoStyle = {
    margin: '0 0 30px 10px',
    fontSize: '22px',
    fontWeight: '800',
    letterSpacing: '1px',
    color: '#38bdf8', // Pop accent color (sky blue)
  };

  const ulStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px' // Modern tight gaps between elements
  };

  const getLiStyle = (item) => ({
    padding: '12px 16px',
    cursor: 'pointer',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    color: hoveredItem === item ? '#ffffff' : '#94a3b8',
    backgroundColor: hoveredItem === item ? '#1e293b' : 'transparent', // Smooth responsive background shift
    transition: 'all 0.2s ease-in-out',
  });

  // Grouped array to simulate a professional modular layout profile
  const menuItems = [
    'Dashboard', 'Travel Requests', 'Reports', 'Approval Queue', 
    'Analytics', 'Expense Management', 'Travel Policies', 
    'Calendar', 'Notifications', 'Messages', 'Profile', 
    'Settings', 'Support', 'Help', 'Logout'
  ];

  return (
    <aside style={sidebarStyle}>
      <h2 style={logoStyle}>ESL TRMS</h2>
      <nav>
        <ul style={ulStyle}>
          {menuItems.map((item) => (
            <li 
              key={item} 
              style={getLiStyle(item)}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
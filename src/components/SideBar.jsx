import React from "react";
import "../components/styles/SideBar.css";

function SideBar() {
  const menuItems = [
    "Dashboard",
    "Travel Requests",
    "Reports",
    "Approval Queue",
    "Analytics",
    "Expense Management",
    "Travel Policies",
    "Calendar",
    "Notifications",
    "Messages",
    "Profile",
    "Settings",
    "Support",
    "Help",
    "Logout",
  ];

  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">ESL TRMS</h2>

      <nav>
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item} className="sidebar-item">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
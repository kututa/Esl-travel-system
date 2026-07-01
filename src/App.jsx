import React, { useState } from 'react';
import { travelRequests } from './data/travel_Requests.jsx';
import DashboardCard from './components/DashboardCard.jsx';
import { FaHome, FaUser } from "react-icons/fa";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import TravelTable from './components/TravelTable.jsx';
import SideBar from './components/SideBar.jsx';
import { FaClipboardList, FaCheckCircle, FaClock, FaTimesCircle, FaDollarSign } from "react-icons/fa";

function App() {
  const [requests, setRequests] = useState(travelRequests);
  const totalRequests = requests.length;
  const approvedRequests = requests.filter((request) => request.status === 'Approved').length;
  const pendingRequests = requests.filter((request) => request.status === 'Pending').length;
  const rejectedRequests = requests.filter((request) => request.status === 'Rejected').length;
  const totalEstimatedCost = requests.reduce((total, request) => total + request.estimatedCost, 0);

  // Internal Styles
  const appStyle = {
    padding: '30px',
    marginLeft: '240px' // Offset added to prevent Sidebar from overlapping content
  };

  const cardsContainerStyle = {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px',
    flexWrap: 'wrap'
  };

  return (
    <div style={appStyle}>
      <SideBar />
      <Header />
     <div style={cardsContainerStyle}>
  <DashboardCard title="Total Requests" value={totalRequests} icon={<FaClipboardList />} />
  <DashboardCard title="Approved Requests" value={approvedRequests} icon={<FaCheckCircle style={{ color: 'green' }} />} />
  <DashboardCard title="Pending Requests" value={pendingRequests} icon={<FaClock style={{ color: 'orange' }} />} />
  <DashboardCard title="Rejected Requests" value={rejectedRequests} icon={<FaTimesCircle style={{ color: 'red' }} />} />
  <DashboardCard title="Total Estimated Cost" value={`$${totalEstimatedCost.toFixed(2)}`} icon={<FaDollarSign />} />
</div>

      <TravelTable requests={requests} />
      <Footer />
    </div>
  );
}

export default App;
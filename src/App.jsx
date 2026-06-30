import React from 'react'
import { useState } from 'react'
import { travelRequests } from './data/travel_Requests.jsx'
import DashboardCard from './components/DashboardCard.jsx'
import { FaHome, FaUser } from "react-icons/fa";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import StatusBadge from './components/StatusBadge.jsx'
import TravelTable from './components/TravelTable.jsx'


function App() {
  const [requests, setRequests] = useState(travelRequests)
  const totalRequests = requests.length
  const approvedRequests = requests.filter((request) => request.status === 'Approved').length
  const pendingRequests = requests.filter((request) => request.status === 'Pending').length
  const rejectedRequests = requests.filter((request) => request.status === 'Rejected').length
  const totalEstimatedCost = requests.reduce((total, request) => total + request.estimatedCost, 0)
  
  return (
    <div className="app">
      <Header />
      <div className="cards">
        <DashboardCard title="Total Requests" value={totalRequests} icon={<FaHome />} />
        <DashboardCard title="Approved Requests" value={approvedRequests} icon={<FaUser />} />
        <DashboardCard title="Pending Requests" value={pendingRequests} icon={<FaUser />} />
        <DashboardCard title="Rejected Requests" value={rejectedRequests} icon={<FaUser />} />
        <DashboardCard title="Total Estimated Cost" value={`$${totalEstimatedCost.toFixed(2)}`} icon={<FaUser />} />
      </div>

      <TravelTable requests={requests} />

      <Footer />
    </div>
  )
}

export default App

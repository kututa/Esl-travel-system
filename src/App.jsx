import React, { useState } from "react";
import { travelRequests } from "./data/travel_Requests";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import DashboardCard from "./components/DashboardCard";
import TravelTable from "./components/TravelTable";
import "./components/styles/app.css";
import {
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaDollarSign,
} from "react-icons/fa";

function App() {
  const [requests] = useState(travelRequests);
  const [travelData, setTravelData] = useState(travelRequests);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [requestsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    employeeName: "",
    destination: "",
    purpose: "",
    status: "",
    startDate: "",
    endDate: "",
    estimatedCost: 0,
  });

  const handleFilterChange = (status) => {
    setFilterStatus(status);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on search change
  };

  const handleSortChange = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  const totalRequests = requests.length;
  const approvedRequests = requests.filter(
    (request) => request.status === "Approved"
  ).length;
  const pendingRequests = requests.filter(
    (request) => request.status === "Pending"
  ).length;
  const rejectedRequests = requests.filter(
    (request) => request.status === "Rejected"
  ).length;

  const totalEstimatedCost = requests.reduce(
    (total, request) => total + request.estimatedCost,
    0
  );

  return (
    <div className="app">
      <SideBar />

      <div className="main-content">
        <Header />

        <div className="dashboard-cards">
          <DashboardCard
            title="Total Requests"
            value={totalRequests}
            icon={<FaClipboardList />}
          />

          <DashboardCard
            title="Approved Requests"
            value={approvedRequests}
            icon={<FaCheckCircle className="icon-success" />}
          />

          <DashboardCard
            title="Pending Requests"
            value={pendingRequests}
            icon={<FaClock className="icon-warning" />}
          />

          <DashboardCard
            title="Rejected Requests"
            value={rejectedRequests}
            icon={<FaTimesCircle className="icon-danger" />}
          />

          <DashboardCard
            title="Total Estimated Cost"
            value={`$${totalEstimatedCost.toFixed(2)}`}
            icon={<FaDollarSign />}
          />
        </div>
        {/* # Search and Filter Section */}
        {/* make styling */}
        <div className="search-filter-section">
          <input 
            type="text"
            placeholder="Search by Employee or Destination"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
          />

          <select
            value={filterStatus}
            onChange={(e) => handleFilterChange(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>


        <TravelTable requests={requests} />

        <Footer />
      </div>
    </div>
  );
}

export default App;
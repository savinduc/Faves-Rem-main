import React from "react";
import { useNavigate } from "react-router-dom";
import "../stylesheet/DashboardNavbar.css";

export default function DashboardNavbar() {

  const navigate = useNavigate();

  return (
    <div className="dashboard-top-navbar">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-navbar-icons">
      <button className="manage-teachers-btn" onClick={() => navigate("/courseRequests")}>Course Requests</button>
        <button className="manage-teachers-btn" onClick={() => navigate("/courses")}>Manage Courses</button>
        <button className="manage-teachers-btn" onClick={() => navigate("/user-list")}>Manage Teachers</button>
        <button 
          className="manage-teachers-btn" 
          onClick={() => navigate("/dashboard-admin", { replace: false, state: { scrollTo: "dashboard-button-grid" } })}
        >
          Manage Bookings
        </button>

        {/* <i className="bx bx-bell"></i> */}
        <i className="bx bx-home" onClick={() => navigate("/dashboard-admin")}></i>
        {/* <i className="bx bx-user-circle"></i> */}
      </div>
    </div>
  );
}
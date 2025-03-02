import React from "react";
import "../stylesheet/SideBar.css";
import logo from "../assets/logo.png";
import 'boxicons/css/boxicons.min.css';


export default function SideBar() {
  return (
    <div className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" width="200" />
      </div>

      {/* Sidebar title */}
      <h2 className="sidebar-title">
        Faves Remedies
        </h2>
        <p className="sidebar-description">Admin Panel</p>
      

      {/* Navigation links */}
      <ul className="sidebar-links">
        <li>Dashboard</li>
        <li>Manage Bookings</li>
        <li>Authors</li>
        <li>Settings</li>
      </ul>

      {/* Logout button */}
      <button className="logout-button">
        <i className="bx bx-log-out"></i>
        Logout
        </button>

    </div>
  );
}

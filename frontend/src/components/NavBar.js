import React from "react";
import "../stylesheet/NavBar.css";
import 'boxicons/css/boxicons.min.css';


export default function SideBar() {
  return (
    <div className="navbar-container">
        <nav className="navbar">
            <ul>
              <li><a href="#"><i className='bx bx-home'></i> Home</a></li>  {/* Replace '#' with actual path */}
              <li><a href="#"><i className='bx bx-user'></i> Profile</a></li> {/* Replace '#' with actual path */}
            </ul>
        </nav>
      </div>
  );
}

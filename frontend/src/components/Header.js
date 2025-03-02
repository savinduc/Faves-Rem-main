import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    
    return (
        <div className="dv11">
            <nav>
                <Link to="/" className="logo">
                    <img src={logo} alt="Logo" />
                </Link>
                <ul className={isMenuOpen ? "active" : ""}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AboutUs">About Us</Link></li>
                    <li><Link to="/ServiceList">Services</Link></li>
                    <li><Link to="/Careers">Careers</Link></li>
                    <li><Link to="/resource" >Resources</Link></li>
                    <li><Link to="/addcontact" >Contact Us</Link></li>
                </ul>
                <i className='bx bx-menu-alt-right' id="menu" onClick={toggleMenu}></i>
            </nav>
        </div>
    );
}

export default Header;
import React from "react";
import "../styles/Footer.css";

export default function Footer(){
    return(
        <div>
        <footer>
            <div className="col-left">
                <div className="col-box">
                    <span><i className='bx bxs-location-plus'></i></span>
                    <span>Wattala, Sri Lanka</span>
                </div>
                <div className="col-box">
                    <span><i className='bx bxs-phone'></i></span>
                    <span>+94 71 9417 597 / +94 70 1725 835</span>
                </div>
                <div className="col-box">
                    <span><i className='bx bxl-whatsapp'></i></span>
                    <span>+94 71 9417 597 / +94 70 1725 835</span>
                </div>

                <div id="col-box" className="col-box">
                    <span><i className='bx bxs-envelope'></i></span>
                    <span>favesremedies@gmail.com</span>
                </div>
            </div>
            <div className="col-right">
                <span>Empowering Education for All</span>
                <p>
                Faves Remedies empowers children and supports teachers through personalized learning, 
                effective strategies, and strong parent-teacher collaboration. We shape brighter futures with 
                quality education for all.
                </p>
                <div className="social-icons">
                <a href="https://www.facebook.com/share/1YQFbdZyo7majKww/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-facebook-circle'></i>
                </a>
                
                    {/* <i className='bx bxl-twitter'></i> */}
                <a href="https://youtube.com/@favesremedies?si=6mJcd57NKwEUA4h0" target="_blank" rel="noopener noreferrer">
                    <i className="bx bxl-youtube"></i>
                </a>
                   
                    <i className='bx bxl-instagram'></i>
                </div>
            </div>
        </footer>
        <div className="footer-bottom">
        <p>&copy; 2024 FavesRemedies. All Rights Reserved.</p>
        </div>
    </div>
    )
}
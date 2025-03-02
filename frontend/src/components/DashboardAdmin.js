import React,{useEffect} from "react";
import "../stylesheet/DashboardAdmin.css";
import 'boxicons/css/boxicons.min.css';
import DashboardNavbar from "./DashboardNavbar";
import logo from "../assets/logo.png";
import AdminFooter from "./AdminFooter";
import { useNavigate, useLocation } from "react-router-dom";
import announcementImage from "../assets/ann.png"; 


export default function DashboardAdmin() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

    return (
        <>
        <DashboardNavbar />
        <div className="dashboard-container">
            {/* Main content area */}
            <div className="dashboard-main-content">
                {/* Header with Logo */}
                <div className="header-logo">
                    <img src={logo} alt="Logo" width="150" />
                </div>

                {/* Welcome Section */}
                <div className="dashboard-welcome-section">
                    <h1>Welcome, Admin!</h1>
                    <p>Here's an overview of your platform's performance.</p>
                </div>

                {/* Key Metrics Section */}
                <div className="dashboard-metrics-grid">
                    <div className="dashboard-metric-card">
                        <div className="metric-icon">
                            <i className='bx bx-user'></i> {/* Icon for Total Users */}
                        </div>
                        <h3>Total Users</h3>
                        <p>1,234</p>
                        <small>+5% from last month</small>
                    </div>
                    <div className="dashboard-metric-card">
                        <div className="metric-icon">
                            <i className='bx bx-dollar'></i> {/* Icon for Revenue */}
                        </div>
                        <h3>Revenue</h3>
                        <p>$12,345</p>
                        <small>+15% from last month</small>
                    </div>
                    <div className="dashboard-metric-card">
                        <div className="metric-icon">
                            <i className='bx bx-calendar'></i> {/* Icon for Pending Bookings */}
                        </div>
                        <h3>Pending Bookings</h3>
                        <p>56</p>
                        <small>-10% from last month</small>
                    </div>
                    <div className="dashboard-metric-card">
                        <div className="metric-icon">
                            <i className='bx bx-group'></i> {/* Icon for Active Sessions */}
                        </div>
                        <h3>Active Sessions</h3>
                        <p>23</p>
                        <small>+8% from last month</small>
                    </div>
                </div>

                {/* Announcement Section */}
                <div className="dashboard-announcement">
                    <div className="announcement-content">
                        <h2>New Announcement</h2>
                        <p>We’ve introduced new features to improve your experience. Check them out now!</p>
                        <button className="announcement-btn">Learn More</button>
                    </div>
                    <div className="announcement-image">
                        <img src={announcementImage} alt="Announcement" />
                    </div>
                </div>

                {/* Recent Activities Section */}
                <div className="dashboard-recent-activities">
                    <h2>Recent Activities</h2>
                    <ul>
                        <li>New user registered: John Doe</li>
                        <li>Booking confirmed: Shadow Teacher Session</li>
                        <li>Payment received: $500</li>
                        <li>New feedback received from a client</li>
                    </ul>
                </div>

                <div className="dashboard-button-grid">
                    <button className="dashboard-btn" onClick={() => navigate("/adddetails")}>
                        Add Teachers' Details
                    </button>
                    <button className="dashboard-btn" onClick={() => navigate("/alldetails")}>
                        View All Teachers
                    </button>
                    <button className="dashboard-btn" onClick={() => navigate("/getcontact")}>
                        Contact Details
                    </button>
                </div>

                {/* Button Set at the Bottom */}
                <div className="dashboard-button-grid" id="dashboard-button-grid">
                    <button className="dashboard-btn" onClick={() => navigate("/manage-counselling-teacher-booking")}>
                        Counselling Teacher Booking
                    </button>
                    <button className="dashboard-btn" onClick={() => navigate("/manage-shadow-teacher-booking")}>
                        Shadow Teacher Booking
                    </button>
                    <button className="dashboard-btn" onClick={() => navigate("/readiness-teacher-booking")}>
                        Readiness Teacher Booking
                    </button>
                    <button className="dashboard-btn" onClick={() => navigate("/therapy-session-teacher-booking")}>
                        Therapy Session Booking
                    </button>
                    <button className="dashboard-btn" onClick={() => navigate("/manage-special-need-teacher-booking")}>
                        Special Need Teacher Booking
                    </button>
                </div>
            </div>

            {/* Footer */}
            <AdminFooter />
        </div></>
    );
}
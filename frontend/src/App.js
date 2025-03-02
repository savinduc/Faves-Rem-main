import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/RegisterForm";
import Careers from "./components/Careers";
import UserList from "./components/UserList";
import Login from "./components/Login";
import PendingUsers from "./components/PendingUsers";
import {jwtDecode} from "jwt-decode";
import RejectedUsers from "./components/RejectedUsers";
import ActiveUsers from "./components/ActiveUsers";
import CourseRequests from "./components/CourseRequests";


import ShadowTeacherBooking from './components/ShadowTeacherBooking';
import SpecialNeedTeacherBooking from './components/SpecialNeedTeacherBooking';
import ReadinessTeacherBooking from './components/ReadinessTeacherBooking';
import CounsellingTeacherBooking from './components/CounsellingTeacherBooking';
import TherapySessionTeacherBooking from './components/TherapySessionTeacherBooking';
import ShadowTeacherBookingManage from './components/ShadowTeacherBookingManage';
import SpecialNeedTeacherBookingManage from './components/SpecialNeedTeacherBookingManage';
import CounsellingTeacherBookingManage from './components/CounsellingTeacherBookingManage';
import ReadinessTeacherBookingManage from './components/ReadinessTeacherBookingManage';
import TherapySessionTeacherBookingManage from './components/TherapySessionTeacherBookingManage';
import DashboardAdmin from "./components/DashboardAdmin";


//import Header from './Components/Header';

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ServiceList from './components/SeviceList';
import ShadowTeacher from './components/ShadowTeacher';
import ServiceCategory from './components/Admin/ServiceCategory';
import DisplayDetails from './components/Admin/DisplayDetails';
import Contact from './components/Admin/Contact';
import UpdateDetails from './components/Admin/UpdateDetails';
import SpecialNeeds from './components/SpecialNeeds';
import ReadnessProgram from './components/ReadnessProgram';
import StudentCounseling from './components/StudentCounseling';
import Speech from './components/Speech';
import ParentCounseling from './components/ParentCounseling';
import Resource from './components/Resource';
import ContactUs from './components/ContactUs';
import AddCourses from "./components/AddCourses";
import CourseList from "./components/CourseList";
//import Footer from './Components/Footer';

// Utility functions
const getToken = () => localStorage.getItem("token");

const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (err) {
    console.error("Failed to decode token:", err);
    return null;
  }
};

const isTokenValid = (token) => {
  const decoded = decodeToken(token);
  return decoded && decoded.exp * 1000 > Date.now();
};

const isAdmin = (token) => {
  const decoded = decodeToken(token);
  return decoded?.role === "Admin";
};

const isUser = (token) => {
  const decoded = decodeToken(token);
  const validRoles = [
    "Shadow_Teacher",
    "Home_Visiting_Teacher",
    "Behavior_Therapist",
    "Occupational_Therapist",
    "Counselor",
  ];
  return decoded && validRoles.includes(decoded?.role);
};



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token && isTokenValid(token)) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      localStorage.removeItem("token");
    }
  }, []);

  const ProtectedRoute = ({ children, adminOnly }) => {
    const token = getToken();

    if (!token || !isTokenValid(token)) {
      console.log("No token or not authenticated. Redirecting to login.");
      return <Navigate to="/login" />;
    }
    

    if (adminOnly && !isAdmin(token)) {
      console.log("User is not admin. Redirecting to login.");
      return <Navigate to="/login" />;
    }

    if (!adminOnly && !isUser(token)) {
      console.log("User role is not allowed. Redirecting to login.");
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/Careers" element={<Careers />}/>
          <Route path="/courseRequests" element={
              <ProtectedRoute adminOnly={true}>
                <CourseRequests />
              </ProtectedRoute>
            }
          />
          <Route path="/courses" element={
              <ProtectedRoute adminOnly={true}>
                <CourseList />
              </ProtectedRoute>
            }
          />
          <Route path="/addCourse" element={
              <ProtectedRoute adminOnly={true}>
                <AddCourses />
              </ProtectedRoute>
            }
          />
          <Route path="/user-list" element={
              <ProtectedRoute adminOnly={true}>
                <UserList />
              </ProtectedRoute>
            }
          />
          <Route path="/pending-user-list" element={
              <ProtectedRoute adminOnly={true}>
                <PendingUsers />
              </ProtectedRoute>
            }
          />
          <Route path="/rejected-user-list" element={
              <ProtectedRoute adminOnly={true}>
                <RejectedUsers />
              </ProtectedRoute>
            }
          />
          <Route path="/approved-user-list" element={
              <ProtectedRoute adminOnly={true}>
                <ActiveUsers />
              </ProtectedRoute>
            }
          />
          
          <Route path="/booking-shadow-teacher" element={<ShadowTeacherBooking/>} />
          <Route path="/booking-special-needs-teacher" element={<SpecialNeedTeacherBooking/>} />
          <Route path="/booking-readiness-teacher" element={<ReadinessTeacherBooking/>} />
          <Route path="/booking-counselling-teacher" element={<CounsellingTeacherBooking/>} />
          <Route path="/booking-therapy-session-teacher" element={<TherapySessionTeacherBooking/>} />

          <Route path="/manage-shadow-teacher-booking" element={<ShadowTeacherBookingManage/>} />
          <Route path="/manage-special-need-teacher-booking" element={<SpecialNeedTeacherBookingManage/>} />
          <Route path="/manage-counselling-teacher-booking" element={<CounsellingTeacherBookingManage/>} />
          <Route path="/readiness-teacher-booking" element={<ReadinessTeacherBookingManage/>} />
          <Route path="/therapy-session-teacher-booking" element={<TherapySessionTeacherBookingManage/>} />

          <Route path="/dashboard-admin" element={<DashboardAdmin/>} />




          <Route path="/" element={<Home/>} />  
          <Route path="/AboutUs" element={<AboutUs/>} />  
          <Route path="/ServiceList" element={<ServiceList/>} /> 
          <Route path="/shadow-teacher" element={<ShadowTeacher/>} /> 
          <Route path="/adddetails" element={
            <ProtectedRoute adminOnly={true}>
            <ServiceCategory/>
            </ProtectedRoute>
            }
          /> 
          <Route path="/alldetails" element={
            <ProtectedRoute adminOnly={true}>
            <DisplayDetails/>
            </ProtectedRoute>
            } 
          /> 
          <Route path="/updatedetails/:detailId" element={
            <ProtectedRoute adminOnly={true}>
            <UpdateDetails/>
            </ProtectedRoute>
            } 
          /> 
          <Route path="/special-needs" element={<SpecialNeeds/>} /> 
          <Route path="/school-readiness" element={<ReadnessProgram/>} /> 
          <Route path="/student-counseling" element={<StudentCounseling/>} /> 
          <Route path="/speech-therapy" element={<Speech/>} /> 
          <Route path="/parent-counseling" element={<ParentCounseling/>} /> 
          <Route path="/parent-counseling" element={<ParentCounseling/>} /> 
          <Route path="/resource" element={<Resource/>} /> 
          <Route path="/addcontact" element={<ContactUs/>} /> 
          <Route path="/getcontact" element={
            <ProtectedRoute adminOnly={true}>
            <Contact/>
            </ProtectedRoute>
            } 
          /> 
        </Routes>
      </Router>
    </div>
    

  );
}

export default App;
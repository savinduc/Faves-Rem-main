import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../stylesheet/CounsellingTeacherBooking.css'; // External CSS file for styling
import logo from "../assets/logo.png";
import Header from './Header.js';
import Footer from './Footer.js';
import axios from "axios";

export default function CounsellingTeacherBooking() {

  const [childName, setChildname] = useState("");
  const [childAge, setChildage] = useState("");
  const [schoolGrade, setSchoolgrade] = useState("");
  const [noOfsessionPerweek, setNoofsessionperweek] = useState("");
  const [requirementsNeeds, setRequirementsneeds] = useState("");
  const [childCondition, setChildcondition] = useState("");
  const [diagnosedCondition, setDiagnosedcondition] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newBooking = {
      childName,
      childAge,
      schoolGrade,
      noOfsessionPerweek,
      requirementsNeeds,
      childCondition,
      diagnosedCondition,
    };

    console.log(newBooking);

    axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/counselling-teacher/add-booking`, newBooking)
      .then((response) => {
        alert("Your booking has been successfully added!");
        console.log('Response:', response);
        console.log('Booking ID', response.data.bookingId);

        setChildname("");
        setChildage("");
        setSchoolgrade("");
        setNoofsessionperweek("");
        setRequirementsneeds("");
        setChildcondition("");
        setDiagnosedcondition("");

      }).catch((err) => {
        alert(err);
      });
  }

  return (
    <><Header /><div className="root">
  
      {/* Card Section */}
      <div className="card">

        <div className="content">
          <div className="title-section">
            <h2 style={{ color: '#203822' }}>Book a Student counseling Teacher</h2>
            <p className="caption">Fill out the form below to proceed with your booking</p>
          </div>

          {/* Divider */}
          <hr />

          {/* Form Section */}
          <form onSubmit={sendData}>
            <div className="form-group">
              <label htmlFor="childName">Child's Name</label>
              <input
                type="text"
                id="childName"
                placeholder="Enter your child's name in here"
                value={childName}
                onChange={(e) => setChildname(e.target.value)}
                required />
            </div>

            <div className="form-group">
              <label htmlFor="childAge">Child's Age</label>
              <input
                type="number"
                id="childAge"
                placeholder="Enter your child's age in here"
                value={childAge}
                onChange={(e) => setChildage(e.target.value)}
                required />
            </div>

            <div className="form-group">
              <label htmlFor="schoolGrade">School Grade</label>
              <input
                type="number"
                id="schoolGrade"
                placeholder="Enter your child's school grade in here"
                value={schoolGrade}
                onChange={(e) => setSchoolgrade(e.target.value)}
                required />
            </div>

            <div className="form-group">
              <label htmlFor="noOfsessionPerweek">No of sessions per week</label>
              <input
                type="number"
                id="noOfsessionPerweek"
                placeholder="Enter the no of sessions do you need per week"
                value={noOfsessionPerweek}
                onChange={(e) => setNoofsessionperweek(e.target.value)}
                required />
            </div>

            <div className="form-group">
              <label htmlFor="requirementsNeeds">Requirements/Needs</label>
              <textarea
                id="requirementsNeeds"
                placeholder="Enter the requirements that you need from the teacher"
                value={requirementsNeeds}
                onChange={(e) => setRequirementsneeds(e.target.value)}
                required />
            </div>

            <div className="form-group">
              <label htmlFor="childCondition">Child's Condition</label>
              <textarea
                id="childCondition"
                placeholder="Enter your child's condition in here"
                value={childCondition}
                onChange={(e) => setChildcondition(e.target.value)}
                required />
            </div>

            <div className="form-group">
              <label htmlFor="diagnosedCondition">Diagnosed Condition</label>
              <input
                type="text"
                id="diagnosedCondition"
                placeholder="Enter if your child diagnosed the condition"
                value={diagnosedCondition}
                onChange={(e) => setDiagnosedcondition(e.target.value)}
                required />
            </div>

            <button type="submit" className="submit-btn" style={{ backgroundColor: '#203822' }}>Submit Booking</button>
          </form>

          {/* Footer Section */}
          <div className="footer-section">
            <RouterLink to="#" className="footer-link">
              Need help? Contact us.
            </RouterLink>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        <p>www.fevesremedies.com</p>
        <p>&copy; fevesremedies.com</p>
      </div>
    </div></>

    
  );
}
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import '../stylesheet/ShadowTeacherBooking.css'; // External CSS file for styling
import Header from './Header';
import axios from "axios";


export default function ShadowTeacherBooking() {

  const [childName, setChildname] = useState("");
  const [childAge, setChildage] = useState("");
  const [schoolName, setSchoolname] = useState("");
  const [location, setLocation] = useState("");
  const [schoolGrade, setSchoolgrade] = useState("");
  const [schoolTimeDuration, setSchooltimeduration] = useState("");
  const [requirementsNeeds, setRequirementsneeds] = useState("");
  const [childNeeds, setChildneeds] = useState("");
  const [diagnosedCondition, setDiagnosedcondition] = useState("");
  const [startingDate, setStartingdate] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newBooking = {
      childName,
      childAge,
      schoolName,
      location,
      schoolGrade,
      schoolTimeDuration,
      requirementsNeeds,
      childNeeds,
      diagnosedCondition,
      startingDate
    };

    console.log(newBooking);

    axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/shadow-teacher/add-booking`, newBooking)
      .then((response) => {
        alert("Your booking has been successfully added!");
        console.log('Response:', response);
        console.log('Booking ID', response.data.bookingId);

        setChildname("");
        setChildage("");
        setSchoolname("");
        setLocation("");
        setSchoolgrade("");
        setSchooltimeduration("");
        setRequirementsneeds("");
        setChildneeds("");
        setDiagnosedcondition("");
        setStartingdate("");

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
            <h2>Book a Shadow Teacher</h2>
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
              <label htmlFor="schoolName">School Name</label>
              <input
                type="text"
                id="schoolName"
                placeholder="Enter your child's school name in here"
                value={schoolName}
                onChange={(e) => setSchoolname(e.target.value)}
                required />
            </div>

            <div className="form-group">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                placeholder="Enter your location in here"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
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
              <label htmlFor="schoolTimeDuration">School Time Duration</label>
              <input
                type="text"
                id="schoolTimeDuration"
                placeholder="Enter your child's school time duration in here"
                value={schoolTimeDuration}
                onChange={(e) => setSchooltimeduration(e.target.value)}
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
              <label htmlFor="childNeeds">Child's Needs</label>
              <textarea
                id="childNeeds"
                placeholder="Enter your child's need in here"
                value={childNeeds}
                onChange={(e) => setChildneeds(e.target.value)}
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

            <div className="form-group">
              <label htmlFor="startingDate">Starting Date</label>
              <input
                type="date"
                id="startingDate"
                placeholder="Enter the date that you need to start sessions"
                value={startingDate}
                onChange={(e) => setStartingdate(e.target.value)}
                required />
            </div>

            <button type="submit" className="shadowsubmit-btn">Submit Booking</button>
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

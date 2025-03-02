import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./ServiceCategory.css";
import DashboardNavbar from "../DashboardNavbar";
import AdminFooter from "../AdminFooter";

const ServiceCategory = () => {
  const location = useLocation();
  const { full_name, teacher_type } = location.state || {}; // Get passed values
  
  const [service, setService] = useState(teacher_type || ""); 
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewImage, setPreviewImage] = useState("");
  const [tName, setTName] = useState(full_name || ""); 
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [ageError, setAgeError] = useState("");
  const [experienceError, setExperienceError] = useState("");

  const navigate = useNavigate();

  const handleQualificationChange = (e) => {
    setQualifications(e.target.value);
  };

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAge(value);
    if (value === "") {
      setAgeError("");
    } else if (value < 18 || value > 70) {
      setAgeError("Age must be between 18 and 70.");
    } else {
      setAgeError("");
    }
  };

  const handleExperienceChange = (e) => {
    const value = e.target.value;
    if (value === "" || (value >= 0 && value < 70 && !isNaN(value))) {
      setExperience(value);
      setExperienceError("");
    } else {
      setExperienceError("Experience must be a non-negative number and less than 70 years.");
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ageError || experienceError) {
      return;
    }

    const formData = new FormData();
    formData.append("service", service);
    formData.append("profilePicture", profilePicture);
    formData.append("tName", tName);
    formData.append("age", age);
    formData.append("experience", experience);
    formData.append("qualification", qualifications); // No need to split by newline

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/category/adddetails`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Details Added Successfully");
      setService("");
      setProfilePicture(null);
      setPreviewImage("");
      setTName(full_name || ""); // Reset to original value if provided
      setAge("");
      setExperience("");
      setQualifications("");
      setAgeError("");
      setExperienceError("");
      navigate("/alldetails");
    } catch (error) {
      console.log(error);
      alert("Error adding details");
    }
  };

  return (
    <><><DashboardNavbar />
    <br/>
    <br/>

    <div className="service-category-container">
      <h2>Teacher Details</h2>
      <form onSubmit={handleSubmit} className="service-category-form">
        <div className="form-group">
          <label>Service Category:</label>
          <select name="service" value={service} onChange={handleServiceChange} required>
            <option value="">Select a category</option>
            <option value="Shadow teacher for school">Shadow teacher for school</option>
            <option value="Special needs teacher for home">Special needs teacher for home</option>
            <option value="School Readiness Program">School Readiness Program</option>
            <option value="Student counseling">Student counseling</option>
            <option value="Speech and behavior occupational therapy session">Speech and behavior occupational therapy session</option>
            <option value="Parent counseling/Parenting session">Parent counseling & Parenting session</option>
          </select>
        </div>

        <div className="form-group">
          <label>Upload Profile Picture:</label>
          <input type="file" accept="image/*" onChange={handleProfilePictureChange} required />
          {previewImage && (
            <div className="image-preview">
              <img src={previewImage} alt="Profile Preview" style={{ width: "150px", height: "150px", marginTop: "10px" }} />
            </div>
          )}
        </div>

        <div className="form-group">
          <label>Teacher Name:</label>
          <input type="text" value={tName} onChange={(e) => setTName(e.target.value)} placeholder="Enter teacher's name" required />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input type="number" value={age} onChange={handleAgeChange} placeholder="Enter age" required />
          {ageError && <div className="error-message" style={{ color: "red" }}>{ageError}</div>}
        </div>

        <div className="form-group">
          <label>Experience (in years):</label>
          <input type="number" value={experience} onChange={handleExperienceChange} placeholder="Enter years of experience" required />
          {experienceError && <div className="error-message" style={{ color: "red" }}>{experienceError}</div>}
        </div>

        <div className="form-group">
          <label>Qualifications:</label>
          <textarea value={qualifications} onChange={handleQualificationChange} placeholder="Enter qualifications, each on a new line" rows="5" />
        </div>

        <button type="submit" className="categorysubmit-button">Add Details</button>
      </form>
    </div></><AdminFooter /></>
  );
};

export default ServiceCategory;


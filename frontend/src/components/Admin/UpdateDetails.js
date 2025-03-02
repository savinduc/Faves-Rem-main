import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Import useParams and useNavigate
import './UpdateDetails.css';
import DashboardNavbar from "../DashboardNavbar";
import AdminFooter from "../AdminFooter";


const UpdateDetails = () => {
  const { detailId } = useParams(); // Extract the detailId from the URL params
  const navigate = useNavigate(); // Get the navigate function

  const [formData, setFormData] = useState({
    service: "",
    tName: "",
    age: "",
    experience: "",
    qualification: "",
  });

  // Fetch current details when the component mounts
  useEffect(() => {
    console.log('detailId:', detailId); // Log the detailId to check if it's being passed

    const fetchDetails = async () => {
      try {
        if (!detailId) {
          console.error('Invalid detailId:', detailId);
          return;
        }

        // Make sure the URL path matches the backend endpoint
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/details/${detailId}`);
        console.log("Fetched details:", response.data); // Log the fetched data to verify

        // Check if the response data is as expected
        if (response.data && response.data.category) {
          setFormData({
            service: response.data.category.service,
            tName: response.data.category.tName,
            age: response.data.category.age,
            experience: response.data.category.experience,
            qualification: response.data.category.qualification,
          });
        }
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchDetails();
  }, [detailId]);

  // Handle form submission (updating details)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/category/updatedetails/${detailId}`,
        formData
      );
      alert(response.data.status);

      // Navigate to DisplayDetails.js after successful update
      navigate(`/alldetails`); // Adjust this route according to your actual route path
    } catch (error) {
      console.error("Error updating details:", error);
      alert("Failed to update details.");
    }
  };

  return (
    <><DashboardNavbar />
    <div className="update-details-container">
      <h2>Update Teacher Details</h2>
      <form onSubmit={handleSubmit} className="update-form">
        <div className="form-group">
          <label>Service</label>
          <input
            type="text"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Teacher Name</label>
          <input
            type="text"
            value={formData.tName}
            onChange={(e) => setFormData({ ...formData, tName: e.target.value })}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Experience</label>
          <input
            type="number"
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Qualifications</label>
          <textarea
            value={formData.qualification}
            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
            className="form-textarea"
          />
        </div>
        <button type="submit" className="servicesubmit-btn">Update</button>
      </form>
    </div>
    <AdminFooter /></>
  );
};

export default UpdateDetails;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ParentCounseling.css";
import Header from "./Header";
import Footer from "./Footer";
import p20 from "../assets/p20.jpeg";

const ParentCounseling = () => {
  const [details, setDetails] = useState([]);
  const [error, setError] = useState("");
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

;

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_BASE_URL}/category/counselingdetails?service=Parent counseling/Parenting session`
        );
        console.log("Fetched details:", response.data);
        setDetails(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch details.");
      }
    };

    fetchDetails();
  }, []);
  
  const handleBookNow = (id) => {
    alert(`Booking initiated for therapist with ID: ${id}`);
    
  };

  const getProfilePicture = (name, profileImage) => {
    if (profileImage) {
      return `${process.env.REACT_APP_BACKEND_BASE_URL}${profileImage}`;  
    }
    console.log("No profile picture found for:", name);
    return require('../assets/default.png');  
  };
  
  const renderQualifications = (qualifications) => {
    const qualificationsArray = qualifications.split(","); 
    return qualificationsArray.map((qualification, index) => (
      <p key={index} className="qualification-item">{qualification.trim()}</p> 
    ));
  };

  return (
    <>
      <Header />
      <div className="parent-counseling-container">
        <div className="parent-counseling-header">
          <h2>Parent Counseling & Parenting Session</h2>
        </div>

         <div className="parent-counseling-hero">
            <img src={p20} alt="parent-counseling" className="parent-counseling-hero-image" />
        </div>

        <div className="parent-counseling-benefits">
          <h3>What is Parent Counseling & Parenting Session?</h3>
          <p>
            Parent counseling & Parenting sessions aim to support parents in managing challenges related to parenting and child behavior. These sessions help strengthen family bonds, improve communication, and provide strategies for handling various parenting issues.
          </p>
          <h3>Benefits of Parent Counseling</h3>
          <ul>
            <li>Support in managing parenting challenges</li>
            <li>Enhance communication between parents and children</li>
            <li>Develop strategies for effective discipline and guidance</li>
            <li>Promote emotional well-being for both parents and children</li>
            <li>Strengthen family relationships</li>
          </ul>
          <h3>Tips for Parents Seeking Counseling</h3>
          <ul>
            <li>Be open to learning new parenting strategies.</li>
            <li>Work collaboratively with the therapist for positive outcomes.</li>
            <li>Maintain consistency in applying techniques at home.</li>
            <li>Be patient as results may take time.</li>
            <li>Communicate openly about challenges and progress.</li>
          </ul>
        </div>

        <div className="parent-counseling-staff">
          <h3>Our Staff</h3>
          {error && <p className="parent-counseling-error">{error}</p>}
          {details.length > 0 ? (
            <ul className="parent-counseling-list">
              {details.map((detail) => {
                const profilePicturePath = getProfilePicture(detail.tName, detail.profileImage);

                return (
                  <li className="parent-counseling-item" key={detail._id}>
                    <img
                      src={`${process.env.REACT_APP_BACKEND_BASE_URL}/${detail.profilePicture}`} // Use the full URL for the image
                      alt={`${detail.tName}'s profile`}
                      className="profile-picture"
                    />
                    <p className="parent-counseling-item-title">
                      Name: <span>{detail.tName}</span>
                    </p>
                    <p>Age: <span>{detail.age}</span></p>
                    <p>Experience: <span>{detail.experience} years</span></p>
                    <div className="parent-counseling-qualifications">
                      <p>Qualifications:</p>
                      {renderQualifications(detail.qualification)} 
                    </div>
                    <button
                      className="parent-counseling-book-button"
                      onClick={() => handleBookNow(detail._id)}
                    >
                      Book Now
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No details available for Parent Counseling & Parenting Session.</p>
          )}
        </div>

        <div className="parent-counseling-call-to-action">
          <h2>Have Questions or Concerns?</h2>
          <p>
            We are here to help you get the support you need. Reach out to us and start your journey towards better parenting.
          </p>
          <button className="parent-counseling-cta-button" onClick={toggleModal}>
            Contact Us
          </button>
        </div>

        {isModalOpen && (
          <div className="parent-counseling-modal-overlay" onClick={toggleModal}>
            <div className="parent-counseling-modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Contact Us</h2>
              <h5> Send an Email to ;<br /></h5>
              <p>
                Email: favesremedies@gmail.com<br /> <br />
                or <br /> <br />
              </p>
              <h5>Send a WhatsApp message to ;<br /> </h5>
              <p>Phone: +94 71 9417 597<br />
                          +94 70 1725 835<br />
              </p>
              <button className="parent-counseling-modal-close" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ParentCounseling;



import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/Speech.css";
import Header from "./Header";
import Footer from "./Footer";
import p19 from "../assets/p19.jpeg";

const Speech = () => {
  const [details, setDetails] = useState([]);
  const [error, setError] = useState("");
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();
  const name = state?.name;
  console.log(name);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getProfilePicture = (name, profileImage) => {
    if (profileImage) {
      return `${process.env.REACT_APP_BACKEND_BASE_URL}${profileImage}`;  
    }
    console.log("No profile picture found for:", name);
    return require('../assets/default.png');  
  };
  

  // Function to render qualifications
  const renderQualifications = (qualifications) => {
    const qualificationsArray = qualifications.split(",");
    return qualificationsArray.map((qualification, index) => (
      <p key={index} className="qualification-item">{qualification.trim()}</p>
    ));
  };

  // Fetch counselor details from API
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_BASE_URL}/category/counselingdetails?service=Speech and behavior occupational therapy session`
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

  // Handle booking a therapy session
  const handleBookNow = (id) => {
    navigate(`/booking-therapy-session-teacher`, { id });
  };

  return (
    <>
      <Header />
      <div className="speech-therapy-container">
        <div className="speech-therapy-header">
          <h2>Speech and Behavior Occupational Therapy</h2>
        </div>

        <div className="speech-therapy-hero">
          <img src={p19} alt="speech-therapy" className="speech-therapy-hero-image" />
        </div>

        <div className="speech-therapy-benefits">
          <h3>What is Speech and Behavior Occupational Therapy?</h3>
          <p>
            Speech and Behavior Occupational Therapy focuses on improving speech, language, and behavioral skills. Our experienced therapists work closely with individuals to enhance communication, social interaction, and functional abilities. This therapy is particularly helpful for those facing speech disorders, behavioral challenges, and developmental delays.
          </p>
          <h3>Benefits of Therapy</h3>
          <ul>
            <li>Enhance speech and language skills</li>
            <li>Improve social communication and interactions</li>
            <li>Develop better coping mechanisms for behavioral challenges</li>
            <li>Support academic and social success</li>
            <li>Increase self-confidence and independence</li>
          </ul>
          <h3>Tips for Patients Seeking Therapy</h3>
          <ul>
            <li>Be patient with the therapy process and progress may take time.</li>
            <li>Ensure regular attendance and active participation in sessions.</li>
            <li>Work with the therapist to set achievable goals.</li>
            <li>Incorporate exercises at home to support session activities.</li>
            <li>Maintain open communication with your therapist about progress and concerns.</li>
          </ul>
        </div>

        <div className="speech-therapy-staff">
          <h3>Our Staff</h3>
          {error && <p className="speech-therapy-error">{error}</p>}
          {details.length > 0 ? (
            <ul className="speech-therapy-list">
              {details.map((detail) => {
                const profilePicturePath = getProfilePicture(detail.tName, detail.profileImage);

                return (
                  <li className="speech-therapy-item" key={detail._id}>
                  <img
                    src={`${process.env.REACT_APP_BACKEND_BASE_URL}/${detail.profilePicture}`} // Use the full URL for the image
                    alt={`${detail.tName}'s profile`}
                    className="profile-picture"
                  />
                    <p className="speech-therapy-item-title">
                      Name: <span>{detail.tName}</span>
                    </p>
                    <p>Age: <span>{detail.age}</span></p>
                    <p>Experience: <span>{detail.experience} years</span></p>
                    <div className="speech-therapy-qualifications">
                      <p>Qualifications:</p>
                      {renderQualifications(detail.qualification)}
                    </div>
                    <button
                      className="speech-therapy-book-button"
                      onClick={() => handleBookNow(detail._id)}
                    >
                      Book Now
                    </button>
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No details available for Speech and Behavior Occupational Therapy.</p>
          )}
        </div>

        <div className="therapy-call-to-action">
          <h2>Have Questions or Concerns?</h2>
          <p>
            We are here to help you get the support you need. Reach out to us and start your journey towards better communication and behavior management.
          </p>
          <button className="speech-therapy-cta-button" onClick={toggleModal}>
            Contact Us
          </button>
        </div>

        {isModalOpen && (
          <div className="speech-therapy-modal-overlay" onClick={toggleModal}>
            <div className="speech-therapy-modal-content" onClick={(e) => e.stopPropagation()}>
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
              <button className="speech-therapy-modal-close" onClick={toggleModal}>
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

export default Speech;

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/StudentCounseling.css";
import Header from "./Header";
import Footer from "./Footer";
import p18 from "../assets/p18.jpeg";


const StudentCounseling = () => {
  const [details, setDetails] = useState([]);
  const [error, setError] = useState("");
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
  

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_BASE_URL}/category/counselingdetails?service=Student counseling`
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

  const handleBookNow = (detail, name) => {
    navigate(`/booking-counselling-teacher`, { state: detail, name  });
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
      <div className="frstudent-counseling-container">
        <div className="frstudent-counseling-header">
          <h2>Student Counseling</h2>
        </div>

         <div className="frstudent-counseling-hero">
          <img src={p18} alt="student-counseling" className="frstudent-counseling-hero-image" />
        </div>


        <div className="frstudent-counseling-benefits">
        <h3>What is Student Counseling?</h3>
          <p>
            Student Counseling provides support to students for mental health, career guidance, and personal development.
            Our experienced counselors help you navigate academic pressures, emotional challenges, and life decisions.
            Seeking counseling is a proactive step towards building a healthier, happier academic life.
          </p>
          <h3>Benefits of Counseling</h3>
          <ul>
            <li>Improve mental well-being and reduce stress</li>
            <li>Receive guidance on career planning and decision-making</li>
            <li>Build better coping strategies for academic and personal challenges</li>
            <li>Develop personal growth and self-awareness</li>
            <li>Enhance relationships with peers and faculty members</li>
          </ul>
          <h3>Tips for Students Seeking Counseling</h3>
          <ul>
            <li>Be open and honest with your counselor about your feelings and concerns.</li>
            <li>Prepare specific questions or topics you'd like to discuss before your session.</li>
            <li>Remember, seeking help is a sign of strength, not weakness.</li>
            <li>Take notes during your session to remember important points.</li>
            <li>Stay committed to your personal growth after the counseling session.</li>
          </ul>
        </div>


        <div className="frstudent-counseling-staff">
        <h3>Our Staff</h3>
        {error && <p className="frstudent-counseling-error">{error}</p>}
        {details.length > 0 ? (
          <ul className="frstudent-counseling-list">
            {details.map((detail) => {
                const profilePicturePath = getProfilePicture(detail.tName, detail.profileImage);

              return (
                <li className="frstudent-counseling-item" key={detail._id}>
                <img
                  src={`${process.env.REACT_APP_BACKEND_BASE_URL}/${detail.profilePicture}`} // Use the full URL for the image
                  alt={`${detail.tName}'s profile`}
                  className="profile-picture"
                />
                  <p className="frstudent-counseling-item-title">
                    Name: <span>{detail.tName}</span>
                  </p>
                  <p>Age: <span>{detail.age}</span></p>
                  <p>Experience: <span>{detail.experience} years</span></p>
                  <div className="frstudent-counseling-qualifications">
                    <p>Qualifications:</p>
                    {renderQualifications(detail.qualification)} {/* Display qualifications line by line */}
                  </div>
                  <button
                    className="frstudent-counseling-book-button"
                    onClick={() => handleBookNow(detail._id)}
                  >
                    Book Now
                  </button>
                </li>
              );
            })}
          </ul>
          
        ) : (
          <p>No details available for Student Counseling.</p>
        )}
        </div>
        <div className="frcounseling-call-to-action">
          <h2>Any Concerns?</h2>
          <p>
            Partner with us to ensure every child receives the support they need to succeed. Together, we can create a brighter future for all.
          </p>
          <button className="counseling-cta-button" onClick={toggleModal}>
            Contact Us
          </button>
        </div>
        {isModalOpen && (
          <div className="counseling-modal-overlay" onClick={toggleModal}>
            <div className="counseling-modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Contact Us</h2>
              <h5> Send an Email to ;<br /></h5>
              <p>
                Email: favesremedies@gmail.com<br /> <br />
                or <br /> <br /> </p>
                <h5>Send an WhatsApp message to ;<br /> </h5>
                <p>Phone: +94 71 9417 597<br />
                          +94 70 1725 835<br />
                </p>
              
              <button className="counseling-modal-close" onClick={toggleModal}>
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

export default StudentCounseling;

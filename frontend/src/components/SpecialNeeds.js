import React, { useState } from "react";
import "../styles/SpecialNeeds.css";
import Header from "./Header";
import Footer from "./Footer";
import p17 from "../assets/p17.jpeg";
import { useNavigate } from "react-router-dom";


const SpecialNeeds = () => {

    const navigate = useNavigate();
  
  const specialNeedsServices = [
    {
      title: "Personalized Learning Plans",
      description: "Customized education to meet individual needs.",
      icon: "📘",
    },
    {
      title: "Floor Time Therapy",
      description: "Enhances communication and problem-solving through play.",
      icon: "🧸",
    },
    {
        title: "Sensory Integration Therapy",
        description: "Improves sensory processing and responses.",
        icon: "🌈",
    },
    {
        title: "Art Therapy",
        description: "Promotes emotional regulation through creative expression.",
        icon: "🎨",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (

    <>
      <Header />
      <div className="frspecial-needs-container">
        <h1 className="frspecial-needs-title">Special Needs Teacher for Home</h1>
        
        <p className="frspecial-needs-description">
          A special needs teacher for home provides personalized educational support to children with various needs in the comfort of their home. By focusing on individualized approaches, these educators help improve skills, enhance communication, and promote emotional and social development in a familiar environment.
        </p>
        
        <div className="frspecial-needs-hero">
          <img src={p17} alt="Shadow Teacher with Student" className="frspecial-needs-hero-image" />
        </div>

        <div className="frradial-layout">
          {specialNeedsServices.map((service, index) => (
            <div key={index} className={`frradial-item item-${index}`}>
              <div className="frradial-icon">{service.icon}</div>
              <h2 className="frradial-title">{service.title}</h2>
              <p className="frradial-description">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="frspecial-teacher-call-to-action">
          <h2>Ready to Make a Difference?</h2>
          <p>
            Partner with us to ensure every child receives the support they need to succeed. Together, we can create a brighter future for all.
          </p>
          <button className="special-teacher-cta-button" onClick={toggleModal}>
            Contact Us
          </button>
        </div>
        {isModalOpen && (
          <div className="special-teacher-modal-overlay" onClick={toggleModal}>
            <div className="special-teacher-modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Contact Us</h2>
              <h5> Send an Email to ;<br /></h5>
              <p>
                Email: favesremedies@gmail.com<br /> <br />
                or <br /> <br /> </p>
                <h5>Send an WhatsApp message to ;<br /> </h5>
                <p>Phone: +94 71 9417 597<br />
                          +94 70 1725 835<br />
                </p>
              
              <button className="special-teacher-modal-close" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Call to Action Section */}
      <div className="book-teacher">
          <h2>Book Special Needs Teacher</h2>
          <p>
            Partner with us to ensure every child receives the support they need to succeed. Together, we can create a brighter future for all.
          </p>
          <button className="book-teacher-cta-button" onClick={() => navigate("/booking-special-needs-teacher")}>
            Book Now
          </button>
        </div>
      <Footer />
    </>
  );
};

export default SpecialNeeds;

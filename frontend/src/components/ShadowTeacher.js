import React, { useState } from "react";
import "../styles/ShadowTeacher.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import p14 from "../assets/p14.jpeg";
import p1 from "../assets/p1.jpeg";

const ShadowTeacher = () => {

  const navigate = useNavigate();
  
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Header />
      <div className="frshadow-teacher-container">
        {/* Header Section */}
        <div className="frshadow-teacher-header">
          <h1>Empowering Students with Shadow Teachers</h1>
          <p>
            Shadow teachers provide one-on-one support, ensuring children with special needs thrive academically, socially, and emotionally in mainstream classrooms.
          </p>
          <blockquote>
            "Our shadow teacher transformed our child’s learning experience. We’re so grateful!"
            <span> - A Grateful Parent</span>
          </blockquote>
        </div>

        {/* Hero Section */}
        <div className="frshadow-teacher-hero">
          <img src={p14} alt="Shadow Teacher with Student" className="frshadow-teacher-hero-image" />
        </div>

        {/* Services Section */}
        <div className="frshadow-teacher-services">
          
          <div className="frservices-grid">
            <div className="frservice-card">
              <div className="frservice-icon">🎓</div>
              <h3>Personalized Academic Support</h3>
              <p>
                Tailored lesson plans and one-on-one teaching methods designed to meet each child’s unique learning needs.
              </p>
            </div>
            <div className="frservice-card">
              <div className="frservice-icon">🧠</div>
              <h3>Behavior Management</h3>
              <p>
                Effective strategies to address behavioral challenges, ensuring a positive learning environment.
              </p>
            </div>
            <div className="frservice-card">
              <div className="frservice-icon">📊</div>
              <h3>Daily Progress Monitoring</h3>
              <p>
                Regular updates, progress reports, and data-driven insights shared with parents and teachers.
              </p>
            </div>
            <div className="frservice-card">
              <div className="frservice-icon">🤝</div>
              <h3>Parent & Teacher Collaboration</h3>
              <p>
                Strong partnerships with educators and parents to build a supportive and inclusive environment.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="frshadow-teacher-testimonials">
          <h2>What Parents Are Saying</h2>
          <div className="frtestimonial">
            <img src={p1} alt="Parent" className="frtestimonial-image" />
            <p>
              "Having a shadow teacher made all the difference for our child. The personal attention and care were extraordinary."
            </p>
            <span>- Happy Parent</span>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="frshadow-teacher-faq">
          <h2>Frequently Asked Questions</h2>
          <div className="frfaq-item">
            <h3>What is a shadow teacher?</h3>
            <p>A shadow teacher is an educational aide who supports students with special needs to integrate into mainstream classrooms.</p>
          </div>
          <div className="frfaq-item">
            <h3>How can I hire a shadow teacher?</h3>
            <p>You can contact us using the form below or reach out to local educational services for assistance.</p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="frshadow-teacher-call-to-action">
          <h2>Ready to Make a Difference?</h2>
          <p>
            Partner with us to ensure every child receives the support they need to succeed. Together, we can create a brighter future for all.
          </p>
          <button className="shadow-teacher-cta-button" onClick={toggleModal}>
            Contact Us
          </button>
        </div>
      {/* Modal Section */}
      {isModalOpen && (
          <div className="shadow-teacher-modal-overlay" onClick={toggleModal}>
            <div className="shadow-teacher-modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Contact Us</h2>
              <h5> Send an Email to ;<br /></h5>
              <p>
                Email: favesremedies@gmail.com<br /> <br />
                or <br /> <br /> </p>
                <h5>Send an WhatsApp message to ;<br /> </h5>
                <p>Phone: +94 71 9417 597<br />
                          +94 70 1725 835<br />
                </p>
              
              <button className="shadow-teacher-modal-close" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <div className="book-teacher">
          <h2>Book Your Shadow Teacher</h2>
          <p>
            Partner with us to ensure every child receives the support they need to succeed. Together, we can create a brighter future for all.
          </p>
          <button className="book-teacher-cta-button" onClick={() => navigate("/booking-shadow-teacher")}>
            Book Now
          </button>
        </div>
      <Footer />
    </>
  );
};

export default ShadowTeacher;

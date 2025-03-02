import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook
import "../styles/ContactUs.css";
import Header from "./Header";
import Footer from "./Footer";

export const ContactUs = () => {
  const navigate = useNavigate();  // Initialize the navigate function

const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
  
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/contact/addcontact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();  // Get JSON response from the backend
      if (response.ok) {
        alert(data.message);
        // Optionally, you can reset the form after submission
        e.target.reset();
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  
  
  return (
    <>
      <Header />
      <div className="contact-us-container">
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, feel free to reach out to us using the information below.</p>
        <div className="contact-details">
          <p><i className="bx bx-envelope"></i> favesremedies@gmail.com</p>
          <p><i className="bx bx-phone"></i> +94 71 9417 597 / +94 70 1725 835</p>
          <p><i className="bx bx-map"></i> Wattala, Sri Lanka</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            className="input-field" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            className="input-field" 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            className="textarea-field" 
            required 
          />
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

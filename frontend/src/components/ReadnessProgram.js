import React, { useState } from "react";
import "../styles/ReadnessProgram.css";
import Header from "./Header";
import Footer from "./Footer";
import p15 from "../assets/p15.jpeg";

const ReadnessProgram = () => {
    
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      title: "Step 1: Social Skills",
      description:
        "Helping your child develop social skills such as making friends, understanding emotions, and taking turns.",
    },
    {
      title: "Step 2: Academic Skills",
      description:
        "Preparing your child for academic success by teaching basic skills, including letter/number recognition and shapes/colors.",
    },
    {
      title: "Step 3: Emotional Regulation",
      description:
        "Helping your child manage their emotions with coping strategies and creating a structured, stress-free environment.",
    },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <><Header/>
    <div className="frreadiness-program">
      <h1 className="frreadiness-program-header" style={{ color: '#4a8c60' }}>School Readiness Program</h1>
    <div className="frreadiness-program-hero">
          <img src={p15} alt="Readness Program" className="frhero-readnessimage" />
        </div>
      <div className="frreadiness-program-steps-container">
        <div className="frreadiness-program-steps">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`frreadiness-program-step ${currentStep === index + 1 ? "active" : ""}`}
            >
              <div className="frreadiness-program-step-indicator">
                <span>{index + 1}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="frreadiness-program-progress-bar-container">
        <div
          className="frreadiness-program-progress-bar"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        ></div>
      </div>

      <div className="frreadiness-program-button-container">
        <button
          className="prev-button"
          onClick={handlePrevStep}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button
          className="next-button"
          onClick={handleNextStep}
          disabled={currentStep === steps.length}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      </div>

<section className="parental-tips">
  <h2>Parental Involvement Tips</h2>
 
    <li>Stay positive and encourage learning</li>
    <li>Establish a consistent routine for your child</li>
    <li>Be a role model for good behavior and communication</li>
</section>

 <div className="readness-call-to-action">
          <h2>Ready to Make a Difference?</h2>
          <p>
            Partner with us to ensure every child receives the support they need to succeed. Together, we can create a brighter future for all.
          </p>
          <button className="frreadiness-program-cta-button" onClick={toggleModal}>
            Contact Us
          </button>
        </div>
    
      {isModalOpen && (
          <div className="frreadiness-program-modal-overlay" onClick={toggleModal}>
            <div className="frreadiness-program-modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Contact Us</h2>
              <h5> Send an Email to ;<br /></h5>
              <p>
                Email: favesremedies@gmail.com<br /> <br />
                or <br /> <br /> </p>
                <h5>Send an WhatsApp message to ;<br /> </h5>
                <p>Phone: +94 71 9417 597<br />
                          +94 70 1725 835<br />
                </p>
              
              <button className="frreadiness-program-modal-close" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        )}
    </div>
    <Footer/></>
  );
};

export default ReadnessProgram;
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Register.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: '',
    home_address: '',
    phone_number: '',
    whatsapp_number: '',
    email: '',
    teacher_type: '',
    password: '',
    cv: null,
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files[0].type === 'application/pdf') {
      setFormData({ ...formData, cv: e.target.files[0] });
      setErrorMessage('');
    } else {
      setErrorMessage('Only PDF files are allowed.');
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
    return phoneRegex.test(phoneNumber);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhoneNumber(formData.phone_number)) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!validatePhoneNumber(formData.whatsapp_number)) {
      setErrorMessage('Please enter a valid 10-digit WhatsApp number.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        form.append(key, formData[key]);
      });

      const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/create`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setSuccessMessage(response.data.message || 'Registered successfully!');
      
      // Navigate to ServiceCategory and pass full_name & teacher_type
      navigate('/adddetails', {
        state: {
          full_name: formData.full_name,
          teacher_type: formData.teacher_type
        }
      });
    } catch (err) {
      console.error("Error during registration:", err);
      setErrorMessage(err.response?.data?.message || 'Error occurred.');
    }
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className='register-wrapper'>
        <div className="register-container">
          <h2>Teacher Registration</h2>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}

            <div className="form-group">
              <label htmlFor="full_name">Full Name</label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                placeholder="Enter your full name"
                value={formData.full_name}
                onChange={handleChange}
                required />
            </div>

            <div className="form-group">
              <label htmlFor="home_address">Home Address</label>
              <input
                type="text"
                id="home_address"
                name="home_address"
                placeholder='Enter your home address'
                value={formData.home_address}
                onChange={handleChange}
                required />
            </div>

            <div className="form-group">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                placeholder='Enter your phone number'
                value={formData.phone_number}
                onChange={handleChange}
                required />
            </div>

            <div className="form-group">
              <label htmlFor="whatsapp_number">WhatsApp Number</label>
              <input
                type="text"
                id="whatsapp_number"
                name="whatsapp_number"
                placeholder='Enter your WhatsApp number'
                value={formData.whatsapp_number}
                onChange={handleChange}
                required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter your email address'
                value={formData.email}
                onChange={handleChange}
                required />
            </div>

            <div className="form-group">
              <label htmlFor="teacher_type">Teacher Type</label>
              <select
                id="teacher_type"
                name="teacher_type"
                value={formData.teacher_type}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Teacher Type</option>
                <option value="Shadow_Teacher">Shadow Teacher</option>
                <option value="Home_Visiting_Teacher">Home Visiting Teacher</option>
                <option value="Behavior_Therapist">Behavior Therapist</option>
                <option value="Occupational_Therapist">Occupational Therapist</option>
                <option value="Counselor">Counselor</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder='Enter your password'
                value={formData.password}
                onChange={handleChange}
                required />
            </div>

            <div className="form-group">
              <label htmlFor="cv">Upload CV (PDF only)</label>
              <input
                type="file"
                id="cv"
                name="cv"
                accept="application/pdf"
                onChange={handleFileChange}
                required />
            </div>

            <button type="submit" className="register-button">Register</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
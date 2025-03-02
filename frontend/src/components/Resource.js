import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/Resource.css";
import logo from "../assets/logo.png";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Resource = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null); // Track the selected course for description

    // Fetch courses from the database
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/course/getcourses`);
                setCourses(response.data.data.courses);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };
        fetchCourses();
    }, []);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const requestData = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            course: formData.get('course')
        };

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/course/add-course-requests`, requestData);
            alert('Request submitted successfully!');
            setShowForm(false);
            navigate('/resource');
        } catch (error) {
            console.error('Error submitting request:', error);
            alert('Failed to submit request.');
        }
    };

    // Handle course click to show description
    const handleCourseClick = (course) => {
        setSelectedCourse(course);
    };

    // Handle closing the description
    const handleCloseDescription = () => {
        setSelectedCourse(null);
    };

    return (
        <>
            <Header />
            <div className="instructions-container">
                <div className="header-logo">
                    <img src={logo} alt="Logo" width="200" />
                </div>
                <h1 className="instructions-title">Faves Remedies Resources</h1>
                <p className="instructions-description">
                    Empower your teaching journey with valuable insights and resources to 
                    effectively support children with autism. Explore our instructional videos, teaching tips, and understanding autism below.
                </p>

                {/* Videos Section */}
                <div className="videos-section">
                    <h2 className="videos-title">Instructional Videos</h2>
                    <div className="video-grid">
                        {courses.map((course) => (
                            <div
                                key={course._id}
                                className="video-card"
                                onClick={() => handleCourseClick(course)}
                            >
                                <img
                                    className="course-image"
                                    src={require("../assets/course.png")} // Ensure this path is correct based on where your images are stored
                                    alt={course.title}
                                    width="100%" // Adjust the size as needed
                                />
                                <p className="video-description">{course.title}</p>
                            </div>
                        ))}
                    </div>

                    <div className="request-access">
                        <button className="request-access-button" onClick={() => setShowForm(true)}>
                            Request Access to Courses
                        </button>
                    </div>
                    
                </div>

                {/* Course Description Modal */}
                {selectedCourse && (
                    <div className="course-description-overlay">
                        <div className="course-description-modal">
                            <h3>{selectedCourse.title}</h3>
                            <p>{selectedCourse.description}</p>
                            <button onClick={handleCloseDescription}>Close</button>
                        </div>
                    </div>
                )}

                {/* Request Access Form */}
                {showForm && (
                    <div className="request-form-overlay">
                        <div className="request-form">
                            <h2>Request Access</h2>
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="name" placeholder="Name" required />
                                <input type="tel" name="phone" placeholder="Phone Number" required />
                                <input type="email" name="email" placeholder="Email" required />
                                <select name="course" required>
                                    <option value="">Select a Course</option>
                                    {courses.map((course) => (
                                        <option key={course._id} value={course.title}>
                                            {course.title}
                                        </option>
                                    ))}
                                </select>
                                <button type="submit">Submit Request</button>
                                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Resource;
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddCourses.css'; // Import the updated CSS file
import { useNavigate } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import AdminFooter from './AdminFooter';

const AddCourses = () => {
    const navigate = useNavigate();
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseLink, setCourseLink] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/course/addCourse`, {
                name: courseName,
                description: courseDescription,
                link: courseLink
            });
            console.log('Course added successfully:', response.data);
            alert('Course added successfully!');
            navigate('/courses');
            setCourseName('');
            setCourseDescription('');
            setCourseLink('');
        } catch (error) {
            console.error('There was an error adding the course!', error);
            alert('Failed to add course. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <><><DashboardNavbar /><div className="add-course-container">
            <h2>Add New Course</h2>
            <form className="add-course-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Course Name:</label>
                    <input
                        type="text"
                        value={courseName}
                        onChange={(e) => setCourseName(e.target.value)}
                        required
                        placeholder="Enter course name" />
                </div>
                <div className="form-group">
                    <label>Course Description:</label>
                    <textarea
                        value={courseDescription}
                        onChange={(e) => setCourseDescription(e.target.value)}
                        required
                        placeholder="Enter course description"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Course Link:</label>
                    <input
                        type="text"
                        value={courseLink}
                        onChange={(e) => setCourseLink(e.target.value)}
                        required
                        placeholder="Enter course link" />
                </div>
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? 'Adding...' : 'Add Course'}
                </button>
            </form>
        </div></><AdminFooter /></>
    );
};

export default AddCourses;
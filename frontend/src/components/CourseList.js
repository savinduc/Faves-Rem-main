import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/CourseList.css'; // Updated CSS for styling
import { useNavigate } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import AdminFooter from './AdminFooter';

const CourseList = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [editCourse, setEditCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Fetch all courses
    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/course/getcourses`);
            setCourses(response.data.data.courses);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching courses:', error);
            setError('Failed to fetch courses. Please try again later.');
            setLoading(false);
        }
    };

    // Delete a course
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this course?')) {
            try {
                await axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/course/deleteCourse/${id}`);
                fetchCourses(); // Refresh the list
            } catch (error) {
                console.error('Error deleting course:', error);
            }
        }
    };

    // Update a course
    const handleUpdate = async (id, updatedData) => {
        try {
            await axios.put(`${process.env.REACT_APP_BACKEND_BASE_URL}/course/updateCourse/${id}`, updatedData);
            fetchCourses(); // Refresh the list
            setEditCourse(null); // Exit edit mode
        } catch (error) {
            console.error('Error updating course:', error);
        }
    };

    if (loading) return <div className="loading">Loading courses...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <>
            <DashboardNavbar />
            <div className="course-list-container">
                <h2>All Courses</h2>
                <button className="add-course-btn" onClick={() => navigate('/addCourse')}>
                    Add New Course
                </button>
                <ul className="course-list">
                    {courses.length === 0 ? (
                        <li className="no-courses">No courses found.</li>
                    ) : (
                        courses.map((course) => (
                            <li key={course._id} className="course-item">
                                {editCourse === course._id ? (
                                    <EditForm
                                        course={course}
                                        onUpdate={handleUpdate}
                                        onCancel={() => setEditCourse(null)}
                                    />
                                ) : (
                                    <>
                                        <div className="course-content">
                                            <h3>{course.title}</h3>
                                            <p>{course.description}</p>
                                            <a
                                                href={course.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="course-link"
                                            >
                                                Visit Course
                                            </a>
                                        </div>
                                        <div className="actions">
                                            <button
                                                className="edit-btn"
                                                onClick={() => setEditCourse(course._id)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="delete-btn"
                                                onClick={() => handleDelete(course._id)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))
                    )}
                </ul>
            </div>
            <AdminFooter />
        </>
    );
};

// Edit Form Component
const EditForm = ({ course, onUpdate, onCancel }) => {
    const [title, setTitle] = useState(course.title);
    const [description, setDescription] = useState(course.description);
    const [link, setLink] = useState(course.link);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(course._id, { title, description, link });
    };

    return (
        <form onSubmit={handleSubmit} className="edit-form">
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Course Title"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Course Description"
                required
            ></textarea>
            <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Course Link"
                required
            />
            <div className="form-actions">
                <button type="submit" className="save-btn">
                    Save
                </button>
                <button type="button" className="cancel-btn" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};

export default CourseList;
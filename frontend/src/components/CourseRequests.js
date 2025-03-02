import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/AdminRequests.css';
import DashboardNavbar from './DashboardNavbar';
import AdminFooter from './AdminFooter';

const AdminRequests = () => {
    const [requests, setRequests] = useState([]);

    // Fetch all course requests
    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/course/course-requests`);
                setRequests(response.data.data.requests);
            } catch (error) {
                console.error('Error fetching requests:', error);
            }
        };
        fetchRequests();
    }, []);

    // Update the status of a request
    const updateStatus = async (id, status) => {
        try {
            await axios.put(`${process.env.REACT_APP_BACKEND_BASE_URL}/course/course-requests/${id}`, { status });
            setRequests((prevRequests) =>
                prevRequests.map((request) =>
                    request._id === id ? { ...request, status } : request
                )
            );
        } catch (error) {
            console.error('Error updating request status:', error);
        }
    };

    return (
        <><DashboardNavbar /><div className="admin-requests-container">
            <h1>Course Requests</h1>
            <div className="requests-list">
                {requests.map((request) => (
                    <div key={request._id} className={`request-card ${request.status}`}>
                        <h3>{request.name}</h3>
                        <p>Phone: {request.phone}</p>
                        <p>Email: {request.email}</p>
                        <p>Course: {request.course}</p>
                        <p>Status: {request.status}</p>
                        <div className="actions">
                            {request.status === 'pending' && (
                                <>
                                    <button onClick={() => updateStatus(request._id, 'accepted')}>Accept</button>
                                    <button onClick={() => updateStatus(request._id, 'denied')}>Deny</button>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div><AdminFooter /></>
    );
};

export default AdminRequests;
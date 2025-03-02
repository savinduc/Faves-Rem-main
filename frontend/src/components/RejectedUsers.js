import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UserList.css";
import DashboardNavbar from "./DashboardNavbar";
import AdminFooter from "./AdminFooter";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/get`);
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || "Error fetching users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>{error}</div>;

  // Filter users to show only those with 'rejected' status
  const rejectedUsers = users.filter(user => user.status === "rejected");

  return (
    <><><DashboardNavbar /><div className="user-list-container">
      <h2>Rejected Users List</h2>
      <button style={{ backgroundColor: 'yellow', color: 'black' }} onClick={() => window.location.href = '/pending-user-list'}>Show Pending Users</button>
      <button style={{ backgroundColor: 'green', color: 'white' }} onClick={() => window.location.href = '/approved-user-list'}>Show Approved Users</button>
      <button onClick={() => window.location.href = '/user-list'}>Show All Users</button>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Home Address</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Whatsapp Number</th>
            <th>Teacher Type</th>
            <th>CV</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rejectedUsers.length === 0 ? (
            <tr>
              <td colSpan="9">No rejected users found</td>
            </tr>
          ) : (
            rejectedUsers.map((user) => (
              <tr key={user._id}>
                <td>{user.full_name}</td>
                <td>{user.home_address}</td>
                <td>{user.email}</td>
                <td>{user.phone_number}</td>
                <td>{user.whatsapp_number}</td>
                <td>{user.teacher_type}</td>
                <td>
                  <a
                    href={`${process.env.REACT_APP_BACKEND_BASE_URL}/${user.cv}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View CV
                  </a>
                </td>
                <td>{user.status}</td>
                <td>
                  {/* Actions (if needed) */}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div></><AdminFooter /></>
  );
};

export default UserList;

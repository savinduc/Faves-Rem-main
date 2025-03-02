import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/UserList.css";
import DashboardNavbar from "./DashboardNavbar";
import AdminFooter from "./AdminFooter";

const ActiveUserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editUserId, setEditUserId] = useState(null);
  const [newStatus, setNewStatus] = useState("");

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

  // Filter active users (status should not be 'rejected' or 'pending')
  const activeUsers = users.filter(
    (user) => user.status !== "rejected" && user.status !== "pending"
  );

  const handleStatusChange = async (id) => {
    try {
      const userToUpdate = users.find((user) => user._id === id);

      await axios.put(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/${id}/update`, {
        ...userToUpdate, // Send all fields but modify only the `status`
        status: newStatus,
      });

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === id ? { ...user, status: newStatus } : user
        )
      );

      setEditUserId(null); // Exit edit mode
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  if (loading) return <div>Loading users...</div>;
  if (error) return <div>{error}</div>;

  return (
    <><><DashboardNavbar /><div className="user-list-container">
      <h2>Active Users List</h2>
      <div className="filter-buttons">
        <button className="btn-yellow" onClick={() => window.location.href = '/pending-user-list'}>Show Pending Users</button>
        <button className="btn-red" onClick={() => window.location.href = '/rejected-user-list'}>Show Rejected Users</button>
        <button onClick={() => window.location.href = '/user-list'}>Show All Users</button>
      </div>
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
          {activeUsers.length === 0 ? (
            <tr>
              <td colSpan="9">No active users found</td>
            </tr>
          ) : (
            activeUsers.map((user) => (
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
                <td>
                  {editUserId === user._id ? (
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value)}
                    >
                      <option value="pending">Pending</option>
                      <option value="approved">Approved</option>
                      <option value="rejected">Rejected</option>

                    </select>
                  ) : (
                    user.status
                  )}
                </td>
                <td>
                  {editUserId === user._id ? (
                    <>
                    <div className="filter-buttons">

                      <button onClick={() => handleStatusChange(user._id)}>
                        Save
                      </button>
                      <button onClick={() => setEditUserId(null)}>Cancel</button>
                      </div>
                    </>
                  ) : (
                    <div className="filter-buttons">
                    <button
                      onClick={() => {
                        setEditUserId(user._id);
                        setNewStatus(user.status);
                      } }
                    >
                      Change Status
                    </button>
                    </div>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div></><AdminFooter /></>
  );
};

export default ActiveUserList;

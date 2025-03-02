import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../stylesheet/ShadowTeacherBookingManage.css";
import 'boxicons/css/boxicons.min.css';
import DashboardNavbar from "./DashboardNavbar";
import AdminFooter from "./AdminFooter";
import ReactPaginate from "react-paginate";

export default function ReadinessTeacherBookingManage() {
  const [bookingteacher, setBookingTeacher] = useState([]);
  const [editedItem, setEditedItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8; // Number of items per page

  const navigate = useNavigate();

  useEffect(() => {
    getBooking();
  }, []);

  // Fetch all bookings
  const getBooking = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_BASE_URL}/readiness-teacher/view-booking`)
      .then((res) => {
        setBookingTeacher(res.data);
      })
      .catch((err) => {
        console.error("Error fetching shadow teacher bookings:", err);
      });
  };

  // Start editing a booking
  const handleEdit = (item) => {
    setEditedItem(item._id);
    setFormData({ ...item }); // Pre-fill the form data with current values
  };

  // Save the edited booking
  const saveEdit = (bookingid) => {
    axios
      .put(`${process.env.REACT_APP_BACKEND_BASE_URL}/readiness-teacher/update-booking/${bookingid}`, formData)
      .then(() => {
        alert("Shadow teacher booking updated successfully.");
        setEditedItem(null);
        getBooking();
      })
      .catch((err) => {
        console.error("Error updating shadow teacher booking:", err);
      });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Delete a booking
  const deleteData = (bookingid) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/readiness-teacher/delete-booking/${bookingid}`)
      .then(() => {
        alert("Booking deleted successfully.");
        getBooking();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // Navigate based on the selected option
  const handleNavigate = (event) => {
    const value = event.target.value;
    if (value === "Shadow teacher for school") {
      navigate("/manage-shadow-teacher-booking");
    } else if (value === "Special needs teacher for Home") {
      navigate("/manage-special-need-teacher-booking");
    } else if (value === "School readiness program") {
      navigate("/readiness-teacher-booking");
    } else if (value === "Student counseling") {
      navigate("/manage-counselling-teacher-booking");
    } else if (value === "Speech and Behavior occupational Therapy sessions") {
      navigate("/therapy-session-teacher-booking");
    }
  };

  // Pagination logic
  const pageCount = Math.ceil(bookingteacher.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = bookingteacher.slice(offset, offset + itemsPerPage);


  return (
    <><><DashboardNavbar /><div className="main-container">
      <div className="content-container">
        <h1 className="page-title">School readiness program</h1>
        <select onChange={handleNavigate}>
          <option value="#">Select Category</option>
          <option value="Special needs teacher for Home">Special needs teacher for Home</option>
          <option value="School readiness program">School readiness program</option>
          <option value="Student counseling">Student counseling</option>
          <option value="Shadow teacher for school">Shadow teacher for school</option>
          <option value="Speech and Behavior occupational Therapy sessions">
            Speech and Behavior occupational Therapy sessions
          </option>
        </select>
        <div className="table-container">
          <table className="booking-table">
            <thead>
              <tr className="tbhead">
                <th>#</th>
                <th>Child Name</th>
                <th>Child Age</th>
                <th>Grade</th>
                <th>Home Location</th>
                <th>Requirements</th>
                <th>Diagnosed Condition</th>
                <th>No of days per week</th>
                <th>No of hours per week</th>
                <th>Needs</th>
                <th>Starting Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookingteacher.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    {editedItem === item._id ? (
                      <input
                        type="text"
                        name="childName"
                        value={formData.childName || ""}
                        onChange={handleInputChange} />
                    ) : (
                      item.childName
                    )}
                  </td>
                  <td>
                    {editedItem === item._id ? (
                      <input
                        type="number"
                        name="childAge"
                        value={formData.childAge || ""}
                        onChange={handleInputChange} />
                    ) : (
                      item.childAge
                    )}
                  </td>
                  <td>
                    {editedItem === item._id ? (
                      <input
                        type="text"
                        name="schoolGrade"
                        value={formData.schoolGrade || ""}
                        onChange={handleInputChange} />
                    ) : (
                      item.schoolGrade
                    )}
                  </td>
                  <td>
                    {editedItem === item._id ? (
                      <input
                        type="text"
                        name="homeLocation"
                        value={formData.homeLocation || ""}
                        onChange={handleInputChange} />
                    ) : (
                      item.homeLocation
                    )}
                  </td>
                  <td>
                    {editedItem === item._id ? (
                      <input
                        type="text"
                        name="requirementsNeeds"
                        value={formData.requirementsNeeds || ""}
                        onChange={handleInputChange} />
                    ) : (
                      item.requirementsNeeds
                    )}
                  </td>
                  <td>
                    {editedItem === item._id ? (
                      <input
                        type="text"
                        name="diagnosedCondition"
                        value={formData.diagnosedCondition || ""}
                        onChange={handleInputChange} />
                    ) : (
                      item.diagnosedCondition
                    )}
                  </td>
                  <td>
                    {editedItem === item._id ? (
                      <input
                        type="number"
                        name="noOfdaysPerweek"
                        value={formData.noOfdaysPerweek || ""}
                        onChange={handleInputChange} />
                    ) : (
                      item.noOfdaysPerweek
                    )}
                  </td>
                  <td>
                    {editedItem === item._id ? (
                      <input
                        type="number"
                        name="noOfhoursPerweek"
                        value={formData.noOfhoursPerweek || ""}
                        onChange={handleInputChange} />
                    ) : (
                      item.noOfhoursPerweek
                    )}
                  </td>
                  <td>
                    {editedItem === item._id ? (
                      <input
                        type="text"
                        name="childNeeds"
                        value={formData.childNeeds || ""}
                        onChange={handleInputChange} />
                    ) : (
                      item.childNeeds
                    )}
                  </td>
                  <td>
                    {editedItem === item._id ? (
                      <input
                        type="date"
                        name="startingDate"
                        value={formData.startingDate || ""}
                        onChange={handleInputChange} />
                    ) : (
                      new Date(item.startingDate).toLocaleDateString()
                    )}
                  </td>
                  <td>
                    {editedItem === item._id ? (
                      <select
                        name="status"
                        value={formData.status || ""}
                        onChange={handleInputChange}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    ) : (
                      item.status
                    )}
                  </td>
                  <td>
                    {editedItem === item._id ? (
                      <>
                        <button className="iconbtn save-btn" onClick={() => saveEdit(item._id)}>
                          <i className="bx bx-save"></i> Save
                        </button>
                        <button className="iconbtn cancel-btn" onClick={() => setEditedItem(null)}>
                          <i className="bx bx-x"></i> Cancel
                        </button>
                      </>
                    ) : (
                      <button className="iconbtn edit-btn" onClick={() => handleEdit(item)}>
                        <i className="bx bx-pencil"></i> Edit
                      </button>
                    )}
                    <button className="iconbtn delete-btn" onClick={() => deleteData(item._id)}>
                      <i className="bx bx-trash"></i> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
      </div>
    </div></><AdminFooter /></>
  );
}

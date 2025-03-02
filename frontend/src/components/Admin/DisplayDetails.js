import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { jsPDF } from "jspdf"; 
import "./DisplayDetails.css";
import autoTable from "jspdf-autotable";
import DashboardNavbar from "../DashboardNavbar";
import AdminFooter from "../AdminFooter";

const DisplayDetails = () => {
  const [details, setDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/alldetails`);
        setDetails(response.data);
      } catch (error) {
        console.log("Error fetching details:", error);
      }
    };

    fetchDetails();
  }, []);

  const handleEdit = (detailId) => {
    navigate(`/updatedetails/${detailId}`);
  };

  const handleDelete = async (detailId) => {
    if (window.confirm("Are you sure you want to delete this detail?")) {
      try {
        const response = await axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}/category/deletedetails/${detailId}`);
        alert(response.data.status);
        setDetails(details.filter(detail => detail._id !== detailId));
      } catch (error) {
        console.error("Error deleting details:", error);
        alert("Failed to delete details.");
      }
    }
  };

  const filteredDetails = details.filter((detail) =>
    detail.tName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Teachers' Details Report", 20, 10);

    const headers = [["No.", "Teacher", "Service", "Age", "Experience", "Qualifications"]];

    const data = filteredDetails.map((detail, index) => {
      const qualifications =
        typeof detail.qualification === "string"
          ? detail.qualification.split(/\n|,/).map((qual) => qual.trim()).join("\n")
          : Array.isArray(detail.qualification)
          ? detail.qualification.join("\n")
          : "";

      return [
        index + 1, // Add the numbering column (1-based index)
        detail.tName,
        detail.service,
        String(detail.age),
        `${detail.experience} years`,
        qualifications,
      ];
    });

    autoTable(doc, {
      head: headers,
      body: data,
      startY: 20,
      theme: "striped",
      styles: {
        fontSize: 10,
        cellPadding: 4,
        overflow: "linebreak",
      },
      headStyles: {
        fillColor: [75, 0, 130], 
        textColor: [255, 255, 255], 
        fontStyle: "bold",
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245], 
      },
    });

    doc.save("teachers_details_report.pdf");
  };

  return (
    <> <DashboardNavbar />
     <h2 style={{marginTop:"20px", color: "#2c3e50" }}>Teachers' Details</h2>


      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Teacher's Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="details-list">
        {filteredDetails.length > 0 ? (
          filteredDetails.map((detail) => (
            <div key={detail._id} className="detail-card">
              <h3>{detail.tName}</h3>
              <p>Profile:</p>
              <img
                src={`${process.env.REACT_APP_BACKEND_BASE_URL}/${detail.profilePicture}`} 
                alt={`${detail.tName}'s profile`}
                className="profile-picture"
              />
              <p>Service: {detail.service}</p>
              <p>Age: {detail.age}</p>
              <p>Experience: {detail.experience} years</p>
              <p>Qualifications:</p>
              <div>
                {typeof detail.qualification === "string"
                  ? detail.qualification.split(/\n|,/).map((qual, index) => (
                      <p key={index}>{qual.trim()}</p>
                    ))
                  : Array.isArray(detail.qualification)
                  ? detail.qualification.map((qual, index) => (
                      <p key={index}>{qual}</p>
                    ))
                  : null}
              </div>
              <div className="button-container">
                {/* Update Button */}
                <button onClick={() => handleEdit(detail._id)} className="update-btn">
                  Update
                </button>
                {/* Delete Button */}
                <button onClick={() => handleDelete(detail._id)} className="delete-btn">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No details found.</p>
        )}
      </div>
      <button onClick={exportPDF} className="export-btn">
        Generate Report
      </button> <AdminFooter />
    </>
  );
};

export default DisplayDetails;

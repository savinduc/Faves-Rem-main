import React, { useEffect, useState } from 'react';
import "./Contact.css";  
import DashboardNavbar from "../DashboardNavbar";
import AdminFooter from "../AdminFooter";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/contact/getcontact`);
        const data = await response.json();
        setContacts(data);  
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);  

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/contact/deletecontact/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setContacts(contacts.filter(contact => contact._id !== id));  
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
      alert("An error occurred while deleting the contact.");
    }
  };

  return (
    <><DashboardNavbar />
    <div className="contact-admin-container">
      <h1>Contact Details</h1>
      <p>Here are the messages sent by users:</p>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>
                <button 
                  onClick={() => handleDelete(contact._id)} 
                  className="delete-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <AdminFooter />
    </>
  );
};

export default Contact;

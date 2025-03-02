// routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/contact'); 
 
  
router.post('/addcontact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const contact = new Contact({ name, email, message });
      await contact.save();
      
      // Send the contact ID in the response
      res.status(201).json({
        message: 'Messege submitted successfully!',
        contactId: contact._id,  // Include the contact ID
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to sumbit messegge.' });
    }
  });
  
// Get all contacts
router.get('/getcontact', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch contacts.' });
  }
});

router.delete('/deletecontact/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Contact.findByIdAndDelete(id);
      res.status(200).json({ message: 'Messege deleted successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete messege.' });
    }
  });
  
module.exports = router;

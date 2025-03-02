const express = require('express');
const router = express.Router();
const therapysessionteacherbookingController = require('../controllers/therapysessionteacherbookingController');

//Add booking
router.post('/add-booking', therapysessionteacherbookingController.addBooking);

//View all booking
router.get('/view-booking', therapysessionteacherbookingController.viewBooking);

//Update booking
router.put('/update-booking/:bookingid', therapysessionteacherbookingController.updateBooking);

//Delete booking
router.delete('/delete-booking/:bookingid', therapysessionteacherbookingController.deleteBooking);

//Fetch a single booking
router.get('/get-booking/:bookingid', therapysessionteacherbookingController.getBooking);

module.exports = router;
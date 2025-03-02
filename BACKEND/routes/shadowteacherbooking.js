const express = require('express');
const router = express.Router();
const shadowteacherbookingController = require('../controllers/shadowteacherbookingController');

//Add booking
router.post('/add-booking', shadowteacherbookingController.addBooking);

//View all booking
router.get('/view-booking', shadowteacherbookingController.viewBooking);

//Update booking
router.put('/update-booking/:bookingid', shadowteacherbookingController.updateBooking);

//Delete booking
router.delete('/delete-booking/:bookingid', shadowteacherbookingController.deleteBooking);

//Fetch a single booking
router.get('/get-booking/:bookingid', shadowteacherbookingController.getBooking);

module.exports = router;
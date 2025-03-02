const express = require('express');
const router = express.Router();
const specialneedteacherbookingController = require('../controllers/specialneedteacherbookingController');

//Add booking
router.post('/add-booking', specialneedteacherbookingController.addBooking);

//View all booking
router.get('/view-booking', specialneedteacherbookingController.viewBooking);

//Update booking
router.put('/update-booking/:bookingid', specialneedteacherbookingController.updateBooking);

//Delete booking
router.delete('/delete-booking/:bookingid', specialneedteacherbookingController.deleteBooking);

//Fetch a single booking
router.get('/get-booking/:bookingid', specialneedteacherbookingController.getBooking);

module.exports = router;
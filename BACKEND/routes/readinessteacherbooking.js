const express = require('express');
const router = express.Router();
const readinessteacherbookingController = require('../controllers/readinessteacherbookingController');

//Add booking
router.post('/add-booking', readinessteacherbookingController.addBooking);

//View all booking
router.get('/view-booking', readinessteacherbookingController.viewBooking);

//Update booking
router.put('/update-booking/:bookingid', readinessteacherbookingController.updateBooking);

//Delete booking
router.delete('/delete-booking/:bookingid', readinessteacherbookingController.deleteBooking);

//Fetch a single booking
router.get('/get-booking/:bookingid', readinessteacherbookingController.getBooking);

module.exports = router;
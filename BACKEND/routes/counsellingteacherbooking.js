const express = require('express');
const router = express.Router();
const counsellingteacherbookingController = require('../controllers/counsellingteacherbookingController');

//Add booking
router.post('/add-booking', counsellingteacherbookingController.addBooking);

//View all booking
router.get('/view-booking', counsellingteacherbookingController.viewBooking);

//Update booking
router.put('/update-booking/:bookingid', counsellingteacherbookingController.updateBooking);

//Delete booking
router.delete('/delete-booking/:bookingid', counsellingteacherbookingController.deleteBooking);

//Fetch a single booking
router.get('/get-booking/:bookingid', counsellingteacherbookingController.getBooking);

module.exports = router;
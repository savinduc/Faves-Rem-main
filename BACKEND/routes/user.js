const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const userController = require('../controllers/user');

// Set up Multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

// File filter to ensure only PDF files are uploaded
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
        cb(null, true); // Accept file
    } else {
        cb(new Error('Only PDF files are allowed'), false); // Reject non-PDF files
    }
};

// Multer upload configuration
const upload = multer({ 
    storage: storage, 
    fileFilter: fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 } // Set limit to 10MB (adjust if necessary)
});

// Routes
router.post('/create', upload.single('cv'), userController.createUser);
router.post('/login', userController.loginUser);

router.get('/get',userController.getAllUsers);

router.get('/:id',userController.getUserById);


// Route to update a user by ID (if needed to allow updating the CV, it would require additional logic)
router.put('/:id/update', userController.updateUserById);

// Route to delete a user by ID
router.delete('/:id/delete', userController.deleteUserById);

module.exports = router;

const CourseRequest = require('../models/CourseRequest');

// Create a new course request
exports.createCourseRequest = async (req, res) => {
    try {
        const { name, phone, email, course } = req.body;
        const newRequest = await CourseRequest.create({ name, phone, email, course });
        res.status(201).json({
            status: 'success',
            data: {
                request: newRequest
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get all course requests
exports.getAllCourseRequests = async (req, res) => {
    try {
        const requests = await CourseRequest.find().sort({ createdAt: -1 });
        res.status(200).json({
            status: 'success',
            data: {
                requests
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Update the status of a course request
exports.updateCourseRequestStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const request = await CourseRequest.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );
        if (!request) {
            return res.status(404).json({
                status: 'fail',
                message: 'Request not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                request
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};
const Course = require('../models/course');

// Get all courses
exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({
            status: 'success',
            results: courses.length,
            data: {
                courses
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Get a single course by ID
exports.getCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({
                status: 'fail',
                message: 'Course not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                course
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Create a new course
exports.createCourse = async (req, res) => {
    try {
        const { name, description, link } = req.body;
        const newCourse = await Course.create({
            title: name, // Map "name" to "title"
            description,
            link
        });
        res.status(201).json({
            status: 'success',
            data: {
                course: newCourse
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Update an existing course
exports.updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!course) {
            return res.status(404).json({
                status: 'fail',
                message: 'Course not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                course
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) {
            return res.status(404).json({
                status: 'fail',
                message: 'Course not found'
            });
        }
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};
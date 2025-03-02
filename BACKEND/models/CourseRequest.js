const mongoose = require('mongoose');

const courseRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    course: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'denied'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CourseRequest = mongoose.model('CourseRequest', courseRequestSchema);

module.exports = CourseRequest;
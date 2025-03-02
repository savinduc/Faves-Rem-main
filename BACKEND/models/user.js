const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    full_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    home_address: {
        type: String,
        required: true,
        trim: true
    },
    phone_number: {
        type: String,
        required: true,
        unique: true
    },
    whatsapp_number: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    teacher_type: {
        type: String,
        required: true,
        trim: true,
        enum: ['Shadow_Teacher', 'Home_Visiting_Teacher','Behavior_Therapist', 'Occupational_Therapist','Counselor', 'Admin']
    },
    password: {
        type: String,
        required: true
    },
    cv: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const specialneedteacherbookingSchema = new Schema({
    childName: {
        type: String,
        required: true
    },
    childAge: {
        type: Number,
        required: true
    },
    homeLocation: {
        type: String,
        required: false
    },
    schoolGrade: {
        type: Number,
        required: true
    },
    noOfsessionPerweek: {
        type: Number,
        required: false
    },
    requirementsNeeds: {
        type: String,
        required: true
    },
    childNeeds: {
        type: String,
        required: false
    },
    diagnosedCondition: {
        type: String,
        required: true
    },
    startingDate: {
        type: Date,
        required: false
    },
    status: {
        type: String,
        required: false
    }

})

const SpecialNeedTeacherBooking = mongoose.model("SpecialNeedTeacherBooking", specialneedteacherbookingSchema);

module.exports = SpecialNeedTeacherBooking;
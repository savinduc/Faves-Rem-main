const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shadowteacherbookingSchema = new Schema({
    childName: {
        type: String,
        required: true
    },
    childAge: {
        type: Number,
        required: true
    },
    schoolName: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: false
    },
    schoolGrade: {
        type: Number,
        required: true
    },
    schoolTimeDuration: {
        type: String,
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

const ShadowTeacherBooking = mongoose.model("ShadowTeacherBooking", shadowteacherbookingSchema);

module.exports = ShadowTeacherBooking;
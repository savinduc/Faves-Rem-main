const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const therapysessionteacherbookingSchema = new Schema({
    childName: {
        type: String,
        required: true
    },
    childAge: {
        type: Number,
        required: true
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
    childCondition: {
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

const TherapySessionTeacherBooking = mongoose.model("TherapySessionTeacherBooking", therapysessionteacherbookingSchema);

module.exports = TherapySessionTeacherBooking;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const readinessteacherbookingSchema = new Schema({
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
    noOfdaysPerweek: {
        type: Number,
        required: false
    },
    noOfhoursPerweek: {
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

const ReadinessTeacherBooking = mongoose.model("ReadinessTeacherBooking", readinessteacherbookingSchema);

module.exports = ReadinessTeacherBooking;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const counsellingteacherbookingSchema = new Schema({
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
    status: {
        type: String,
        required: false
    }

})

const CounsellingTeacherBooking = mongoose.model("CounsellingTeacherBooking", counsellingteacherbookingSchema);

module.exports = CounsellingTeacherBooking;
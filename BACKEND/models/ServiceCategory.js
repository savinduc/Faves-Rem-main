const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    service: {
        type: String,
        required: true,
        enum: ['Shadow teacher for school', 'Special needs teacher for home', 'School Readiness Program', 
            'Student counseling','Speech and behavior occupational therapy session',
        'Parent counseling/Parenting session'], 
        message: '{VALUE} is not a valid category' 
    },
    profilePicture: { 
        type: String, 
        required: true
    },
    tName : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    experience : {
        type : Number,
        required : true
    },
    qualification : {
        type : String,
        required : true
    }
})

const Category = mongoose.model("Category",categorySchema);

module.exports = Category;
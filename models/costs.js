//Valeria Shafran 320954258
//Einav Kogut 318902285

const mongoose = require('mongoose');
const schema = mongoose.Schema;

// creating new mongo schema for the costs
const costsSchema = new schema({
    
    user_id: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true,
        default: () => new Date().getFullYear() // Default to current year
    },
    month: {
        type: Number,
        required: true,
        default: () => new Date().getMonth() + 1 // Default to current month 
    },
    day: {
        type: Number,
        required: true,
        default: () => new Date().getDate() // Default to current day of the month

    },
    description: {
        type: String,
        required: true
    },
    id:{
        type: String, 
        unique: true
    },
    category: {
        type: String,
        enum: ['food', 'health', 'housing', 'sport', 'education', 'transportation', 'other'],
        required: true,

    },
    sum: {
        type: Number,
        required: true
    },
},{versionKey:false});

const cost = mongoose.model('costs',costsSchema);

module.exports = cost;


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

    },
    month: {
        type: Number,

    },
    day: {
        type: Number,

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


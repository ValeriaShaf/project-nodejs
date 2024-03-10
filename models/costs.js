const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CostsSchema = new Schema({
    
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
        type: Number, // Assuming you want to store the ObjectId as a number
        
        default: function() {
            // Generate a new ObjectId and convert it to a number
            return new Date().valueOf();
        }
        
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

const Cost = mongoose.model('costs',CostsSchema);

module.exports = Cost;


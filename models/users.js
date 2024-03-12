//Valeria Shafran 320954258
//Einav Kogut 318902285

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating new mongo schema for the users
const UsersSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    firstname: {
        type: String,
        required: true

    },
    lastname: {
        type: String,
        required: true

    },
    birthday: {
        type: String,
        required: true

    },

},{versionKey:false});

const User = mongoose.model('users',UsersSchema);

module.exports = User;


const mongoose = require('mongoose');

// Room Schema
const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    maxcount: {
        type: Number,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    rentperday: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    features: {
        type: [String],  // An array of strings
        required: true
    },
    roomIssuedDate: {
        type: Date,
        default: Date.now
    },
    availability: {
        type: Boolean,
        default: true
    }
});

// Create a model from the schema
const Room = mongoose.model('Room', roomSchema);

module.exports = Room;

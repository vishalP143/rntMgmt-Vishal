const mongoose = require('mongoose');

// Room Schema
const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Room name is required"],
        trim: true,
    },
    maxcount: {
        type: Number,
        required: [true, "Max count is required"],
        min: [1, "Max count must be at least 1"], // Minimum value validation
    },
    phonenumber: {
        type: String,
        required: [true, "Phone number is required"],
        match: [/^\d{10}$/, "Phone number must be exactly 10 digits"], // Exact 10-digit validation
    },
    rentperday: {
        type: Number,
        required: [true, "Rent per day is required"],
        min: [0, "Rent per day cannot be negative"], // Minimum rent validation
    },
    type: {
        type: String,
        required: [true, "Type is required"],
        enum: {
            values: ["Single", "Double", "Suite", "Deluxe"], // Example room types, customize as needed
            message: "Type must be one of: Single, Double, Suite, Deluxe",
        },
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        trim: true,
    },
    location: {
        type: String,
        required: [true, "Location is required"],
        trim: true,
    },
    features: {
        type: [String], // Array of strings
        required: [true, "Features are required"],
        validate: {
            validator: function (arr) {
                return arr.length > 0; // Ensure at least one feature
            },
            message: "At least one feature must be provided",
        },
    },
    roomIssuedDate: {
        type: Date,
        default: Date.now,
    },
    availability: {
        type: Boolean,
        default: true,
    },
});

// Create a model from the schema
const Room = mongoose.model('Room', roomSchema);

module.exports = Room;

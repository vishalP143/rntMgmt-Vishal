const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: [true, "Room number is required"],
        trim: true, // Optional: Can be removed if not necessary for numbers
        min: [1, "Room number must be greater than 0"],
    },
    maxcount: {
        type: Number,
        required: [true, "Maximum occupancy is required"],
    },
    phonenumber: {
        type: String,
        required: [true, "Phone number is required"],
        match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },
    rentperday: {
        type: Number,
        required: [true, "Rent per day is required"],
    },
    type: {
        type: String,
        required: [true, "Room type is required"],
    },
    description: {
        type: String,
        required: [true, "Room description is required"],
    },
    location: {
        type: String,
        required: [true, "Room location is required"],
    },
    features: {
        type: [String],
        required: [true, "Room features are required"],
    },
    availability: {
        type: Boolean,
        default: true,
    },
    roomIssuedDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Room", roomSchema);

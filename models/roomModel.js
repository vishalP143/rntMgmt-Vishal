const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    room_number: {
        type: String,
        required: true,
        unique: true
    },
    floor_number: {
        type: Number,
        required: true
    },
    building_name: {
        type: String,
        required: true
    },
    room_type: {  // e.g., Single, Double, Shared
        type: String,
        required: true
    },
    rent: {
        type: Number,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    },
    tenant_name: {
        type: String,  // Optional, will be null if the room is available
        default: null
    },
    tenant_email: {
        type: String,  // Optional, will be null if the room is available
        default: null
    },
    tenant_phone: {
        type: String,  // Optional, will be null if the room is available
        default: null
    },
    lease_start_date: {
        type: Date,  // Optional, can be null if the room is available
        default: null
    },
    lease_end_date: {
        type: Date,  // Optional, can be null if the room is available
        default: null
    }
});

const roomModel = mongoose.model('Room', roomSchema);

module.exports = roomModel;

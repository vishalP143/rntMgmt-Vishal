const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    room_number: {
        type: String,
        required: [true, "Room number is required."],
        unique: true,
        trim: true,  // Removes leading/trailing whitespace
        match: [/^\d+[A-Za-z]*$/, "Invalid room number format."] // Example: 101, 201A
    },
    floor_number: {
        type: Number,
        required: [true, "Floor number is required."],
        index: true,
        min: [1, "Floor number must be at least 1."]
    },
    building_name: {
        type: String,
        required: [true, "Building name is required."],
        trim: true,
        maxlength: [100, "Building name cannot exceed 100 characters."]
    },
    room_type: {
        type: String,
        enum: {
            values: ['Single', 'Double', 'Shared'],
            message: 'Room type must be Single, Double, or Shared.'
        },
        required: [true, "Room type is required."]
    },
    rent: {
        type: Number,
        required: [true, "Rent is required."],
        min: [0, "Rent must be a positive number."]
    },
    availability: {
        type: Boolean,
        required: [true, "Availability status is required."]
    },
    tenant_name: {
        type: String,
        trim: true,
        default: null,
        maxlength: [50, "Tenant name cannot exceed 50 characters."]
    },
    tenant_email: {
        type: String,
        default: null,
        lowercase: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Invalid email address format."
        ]
    },
    tenant_phone: {
        type: String,
        default: null,
        match: [
            /^\+?\d{10,15}$/,
            "Invalid phone number format. Must be 10-15 digits."
        ]
    },
    lease_start_date: {
        type: Date,
        default: null,
        validate: {
            validator: function (value) {
                if (this.lease_end_date && value) {
                    return value < this.lease_end_date;
                }
                return true;
            },
            message: "Lease start date must be earlier than lease end date."
        }
    },
    lease_end_date: {
        type: Date,
        default: null,
        validate: {
            validator: function (value) {
                if (this.lease_start_date && value) {
                    return value > this.lease_start_date;
                }
                return true;
            },
            message: "Lease end date must be later than lease start date."
        }
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

// Compound index for efficient filtering by building, floor, and availability
roomSchema.index({ building_name: 1, floor_number: 1, availability: 1 });

const roomModel = mongoose.model('Room', roomSchema);

module.exports = roomModel;

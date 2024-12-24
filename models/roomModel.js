const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Removes extra whitespace
  },
  type: {
    type: String,
    required: true,
    enum: ['Single', 'Double', 'Suite'], // Restricts to predefined values
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Ensures the price is not negative
  },
  isAvailable: {
    type: Boolean,
    default: true, // Defaults to available when created
  },
  features: {
    type: [String], // Array of features, e.g., ['WiFi', 'AC', 'TV']
    default: [],
  },
  bookedDate: {
    type: Date,
    default: null, // Null if not booked
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets creation date
  },
  updatedAt: {
    type: Date,
    default: Date.now, // Automatically updates on modification
  },
});

// Middleware to update the `updatedAt` field
RoomSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Room', RoomSchema);

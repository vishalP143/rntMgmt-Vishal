const roomModel = require('../models/roomModel');

// Create a new room
exports.createRoom = async (req, res) => {
    try {
        const { room_number, rent, lease_start_date, lease_end_date } = req.body;

        // Check for duplicate room number
        const existingRoom = await roomModel.findOne({ room_number });
        if (existingRoom) {
            return res.status(400).json({ error: 'Room number already exists.' });
        }

        // Validate rent
        if (rent <= 0) {
            return res.status(400).json({ error: 'Rent must be a positive number.' });
        }

        // Validate lease dates
        if (lease_start_date && lease_end_date && new Date(lease_start_date) > new Date(lease_end_date)) {
            return res.status(400).json({ error: 'Lease start date cannot be later than the lease end date.' });
        }

        // Create new room
        const newRoom = await roomModel.create(req.body);
        res.status(201).json(newRoom);
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: `Validation error: ${err.message}` });
        }
        res.status(500).json({ error: `Server error: ${err.message}` });
    }
};

// Get all rooms
exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await roomModel.find();
        res.status(200).json(rooms);
    } catch (err) {
        res.status(500).json({ error: `Server error: ${err.message}` });
    }
};

// Get single room by ID
exports.getRoomById = async (req, res) => {
    try {
        const room = await roomModel.findById(req.params.id);
        if (!room) {
            return res.status(404).json({ error: 'Room not found.' });
        }
        res.status(200).json(room);
    } catch (err) {
        res.status(400).json({ error: `Invalid ID or server error: ${err.message}` });
    }
};

// Update room details
exports.updateRoom = async (req, res) => {
    try {
        const { room_number, rent, lease_start_date, lease_end_date } = req.body;

        // Validate rent
        if (rent <= 0) {
            return res.status(400).json({ error: 'Rent must be a positive number.' });
        }

        // Validate lease dates
        if (lease_start_date && lease_end_date && new Date(lease_start_date) > new Date(lease_end_date)) {
            return res.status(400).json({ error: 'Lease start date cannot be later than the lease end date.' });
        }

        const updatedRoom = await roomModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true } // Ensures validation during update
        );

        if (!updatedRoom) {
            return res.status(404).json({ error: 'Room not found.' });
        }

        res.status(200).json(updatedRoom);
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: `Validation error: ${err.message}` });
        }
        res.status(500).json({ error: `Server error: ${err.message}` });
    }
};

// Delete room by ID
exports.deleteRoomById = async (req, res) => {
    try {
        const deletedRoom = await roomModel.findByIdAndDelete(req.params.id);
        if (!deletedRoom) {
            return res.status(404).json({ error: 'Room not found.' });
        }
        res.status(204).send(); // No content
    } catch (err) {
        res.status(500).json({ error: `Server error: ${err.message}` });
    }
};

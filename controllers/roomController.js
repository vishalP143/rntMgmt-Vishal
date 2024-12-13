const RoomModel = require('../models/roomModel');  // Import Room model

// Create a new Room
exports.createRoom = async (req, res) => {
    try {
        // Destructure fields from the request body
        const {
            name,
            maxcount,
            phonenumber,
            rentperday,
            type,
            description,
            location,
            features,
            roomIssuedDate,
            availability
        } = req.body;

        // Validate required fields
        if (!name || !maxcount || !phonenumber || !rentperday || !type || !description || !location || !features) {
            return res.status(400).send({ message: 'All fields are required.' });
        }

        // Create a new room instance
        const newRoom = new RoomModel({
            name,
            maxcount: Number(maxcount),  // Ensure maxcount is a number
            phonenumber,
            rentperday: Number(rentperday),  // Ensure rentperday is a number
            type,
            description,
            location,
            features: features.split(',').map(item => item.trim()),  // Split features into an array and trim
            roomIssuedDate: roomIssuedDate || Date.now(),  // Default to current date if not provided
            availability: availability || true  // Default to true if not provided
        });

        // Save the new room to the database
        const savedRoom = await newRoom.save();

        // Send the saved room as a response
        res.status(201).send(savedRoom);
    } catch (err) {
        console.error('Error saving room:', err);
        // Send error message if something goes wrong
        res.status(400).send({ message: err.message });
    }
};

// Retrieve all rooms
exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await RoomModel.find();  // Fetch all rooms
        res.status(200).send(rooms);
    } catch (err) {
        console.error('Error retrieving rooms:', err);
        res.status(400).send({ message: err.message });
    }
};

// Retrieve a room by ID
exports.getRoomById = async (req, res) => {
    try {
        const room = await RoomModel.findById(req.params.id);  // Find room by ID
        if (!room) {
            return res.status(404).send({ message: 'Room not found.' });
        }
        res.status(200).send(room);
    } catch (err) {
        console.error('Error retrieving room:', err);
        res.status(400).send({ message: err.message });
    }
};

// Update a room by ID
exports.updateRoom = async (req, res) => {
    try {
        const updatedRoom = await RoomModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }  // Return the updated room
        );

        if (!updatedRoom) {
            return res.status(404).send({ message: 'Room not found.' });
        }

        res.status(200).send(updatedRoom);
    } catch (err) {
        console.error('Error updating room:', err);
        res.status(400).send({ message: err.message });
    }
};

// Delete a room by ID
exports.deleteRoom = async (req, res) => {
    try {
        const deletedRoom = await RoomModel.findByIdAndDelete(req.params.id);  // Delete room by ID
        if (!deletedRoom) {
            return res.status(404).send({ message: 'Room not found.' });
        }
        res.status(200).send({ message: 'Room deleted successfully.' });
    } catch (err) {
        console.error('Error deleting room:', err);
        res.status(400).send({ message: err.message });
    }
};

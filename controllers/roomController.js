const RoomModel = require('../models/roomModel'); // Import Room model

// Create a new Room
exports.createRoom = async (req, res) => {
    try {
        const newRoom = new RoomModel({
            roomNumber: req.body.roomNumber,
            type: req.body.type,
            price: req.body.price,
            isAvailable: req.body.isAvailable,
            features: req.body.features,
            bookedDate: req.body.bookedDate,
        });

        const savedRoom = await newRoom.save(); // Save the new room to the database
        res.status(201).send(savedRoom); // Send the saved room as a response
    } catch (err) {
        res.status(400).send({ error: err.message }); // Send an error response if something goes wrong
    }
};

// Get all rooms
exports.getAllRooms = async (req, res) => {
    try {
        const allRooms = await RoomModel.find(); // Fetch all rooms from the database
        res.status(200).send(allRooms); // Send all rooms as a response
    } catch (err) {
        res.status(400).send({ error: err.message }); // Send an error response if something goes wrong
    }
};

// Get a room by ID
exports.getRoomById = async (req, res) => {
    try {
        const roomById = await RoomModel.findById(req.params.id); // Find room by ID
        if (!roomById) return res.status(404).send({ error: 'Room not found in database' }); // If room is not found, return 404
        res.status(200).send(roomById); // Send the room as a response
    } catch (err) {
        res.status(400).send({ error: err.message }); // Send an error response if something goes wrong
    }
};

// Update a room by ID
exports.updateRoom = async (req, res) => {
    try {
        const updatedRoom = await RoomModel.findByIdAndUpdate(
            req.params.id,
            {
                roomNumber: req.body.roomNumber,
                type: req.body.type,
                price: req.body.price,
                isAvailable: req.body.isAvailable,
                features: req.body.features,
                bookedDate: req.body.bookedDate,
            },
            { new: true } // Return the updated room
        );

        if (!updatedRoom) return res.status(404).send({ error: 'Room not found in database' }); // If room is not found, return 404
        res.status(200).send(updatedRoom); // Send the updated room as a response
    } catch (err) {
        res.status(400).send({ error: err.message }); // Send an error response if something goes wrong
    }
};

// Delete a room by ID
exports.deleteRoom = async (req, res) => {
    try {
        const deletedRoom = await RoomModel.findByIdAndDelete(req.params.id); // Find room by ID and delete it
        if (!deletedRoom) return res.status(404).send({ error: 'Room not found in database' }); // If room is not found, return 404
        res.status(200).send({ message: 'Room deleted successfully' }); // Send success message
    } catch (err) {
        res.status(400).send({ error: err.message }); // Send an error response if something goes wrong
    }
};

const roomModel = require('../models/roomModel'); // Importing the room model

// Create new room
exports.createRoom = async (req, res) => {
    try {
        let newRoom = new roomModel({
            room_number: req.body.room_number,
            floor_number: req.body.floor_number,
            building_name: req.body.building_name,
            room_type: req.body.room_type,
            rent: req.body.rent,
            availability: req.body.availability
        });
        newRoom = await newRoom.save();
        res.status(201).send(newRoom);  // Return newly created room
    } catch (err) {
        res.status(400).send(err.message);  // Send an error response if something goes wrong
    }
};

// Get all rooms
exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await roomModel.find(); // Get all rooms from the database
        res.send(rooms);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Get single room by ID
exports.getRoomById = async (req, res) => {
    try {
        const room = await roomModel.findById(req.params.id);
        if (!room) return res.status(404).send('Room not found in database');
        res.send(room);
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Update room details
exports.updateRoom = async (req, res) => {
    try {
        const room = await roomModel.findByIdAndUpdate(req.params.id, {
            room_number: req.body.room_number,
            floor_number: req.body.floor_number,
            building_name: req.body.building_name,
            room_type: req.body.room_type,
            rent: req.body.rent,
            availability: req.body.availability,
            tenant_name: req.body.tenant_name,
            tenant_email: req.body.tenant_email,
            tenant_phone: req.body.tenant_phone,
            lease_start_date: req.body.lease_start_date,
            lease_end_date: req.body.lease_end_date
        }, { new: true });

        if (!room) return res.status(404).send('Room not found in database');
        res.send(room);
        console.log("Room updated successfully");
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Delete room by ID
exports.deleteRoomById = async (req, res) => {
    try {
        const room = await roomModel.findByIdAndDelete(req.params.id);
        if (!room) return res.status(404).send('Room not found in database');
        res.status(204).send("Room deleted successfully");
    } catch (err) {
        res.status(400).send(err.message);
    }
};

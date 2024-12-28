const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// Routes for Room CRUD operations
router.post('/rooms', roomController.createRoom);      // Create a new room
router.get('/rooms', roomController.getAllRooms);      // Get all rooms
router.get('/rooms/:id', roomController.getRoomById);  // Get a single room by ID
router.put('/rooms/:id', roomController.updateRoom);   // Update a room by ID
router.delete('/rooms/:id', roomController.deleteRoomById); // Corrected function name

module.exports = router;

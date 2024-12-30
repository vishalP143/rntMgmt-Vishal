const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// Room CRUD routes
router.post('/rooms', roomController.createRoom);
router.get('/rooms', roomController.getAllRooms);
router.get('/rooms/:id', roomController.getRoomById);
router.put('/rooms/:id', roomController.updateRoom);
router.delete('/rooms/:id', roomController.deleteRoomById);

module.exports = router;

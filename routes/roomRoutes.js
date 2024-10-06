const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

// Routes without authentication middleware
router.post('/rooms', roomController.createRoom); // Create a new room
router.get('/rooms', roomController.getAllRooms); // Get all rooms
router.get('/rooms/:id', roomController.getRoomById); // Get room by ID
router.put('/rooms/:id', roomController.updateRoom); // Update room by ID
router.delete('/rooms/:id', roomController.deleteRoom); // Delete room by ID

module.exports = router;







// const express = require('express');
// const router = express.Router();
// const roomController = require('../controllers/roomController');
// const authenticateJWT = require('../middlewares/authMiddleware'); // Import the authentication middleware

// // Apply middleware to protect these routes
// router.post('/rooms', authenticateJWT, roomController.createRoom); // Create a new room
// router.get('/rooms', roomController.getAllRooms); // Get all rooms
// router.get('/rooms/:id', roomController.getRoomById); // Get room by ID
// router.put('/rooms/:id', authenticateJWT, roomController.updateRoom); // Update room by ID
// router.delete('/rooms/:id', authenticateJWT, roomController.deleteRoom); // Delete room by ID

// module.exports = router;

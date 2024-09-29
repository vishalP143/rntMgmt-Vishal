const express = require('express');
const connectDB = require('./config/db');
const roomRoutes = require('./routes/roomRoutes'); // Import room routes

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Basic route for home page
app.get("/", (req, res) => {
    res.send("Hii book here your room and enjoy your quality time.Thank you for choosing us.Visit again");
});

// Use room routes with prefix '/api'
app.use('/api', roomRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
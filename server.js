const express = require('express');
const connectDB = require('./config/db'); // Import the database connection function
const roomRoutes = require('./routes/roomRoutes'); // Import room routes

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(express.json()); // Middleware to parse JSON requests

app.get("/", (req, res) => {
    res.send("HomePage Of The Rental Management App"); // Home page route
});

app.use('/api', roomRoutes); // Use room routes with prefix '/api'

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

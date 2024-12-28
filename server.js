const express = require('express');
const cors = require('cors');  // Importing CORS middleware
const dotenv = require("dotenv");
const connectDB = require('./config/db'); // Import the database connection function
const roomRoutes = require('./routes/roomRoutes'); // Import room routes
dotenv.config({ path: "./config.env" });

const app = express();

// Connect to MongoDB
connectDB();

// CORS Middleware - allow all origins for testing (adjust as necessary for production)
app.use(cors());  // Allow all origins (you can specify particular origins here if needed)
app.use(cors({
    origin: '*', // Allow all origins (adjust for production)
}));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Debugging middleware: logs each incoming request
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});

// Home route
app.get("/", (req, res) => {
    res.send("HomePage Of The Rental Management App");
});

// Use room routes with prefix '/api'
app.use('/api', roomRoutes);

// Error handling for unhandled routes
app.use((req, res, next) => {
    res.status(404).send('Route not found');
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 5000;
// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

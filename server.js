const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const roomRoutes = require('./routes/roomRoutes');

dotenv.config({ path: './config.env' });

const app = express();

// Connect to MongoDB
connectDB();

// CORS Middleware
app.use(cors({ origin: '*' }));

// Middleware to parse JSON requests
app.use(express.json());

// Debugging Middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    console.log('Body:', req.body);
    next();
});

// Home route
app.get('/', (req, res) => {
    res.send('HomePage Of The Rental Management App');
});

// Room routes
app.use('/api', roomRoutes);

// 404 Error Handling for undefined routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

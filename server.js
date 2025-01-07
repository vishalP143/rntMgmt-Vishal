const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const roomRoutes = require('./routes/roomRoutes');
const path = require('path');

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

// Room routes
app.use('/api', roomRoutes);

// Serve frontend for production
if (process.env.NODE_ENV === 'production') {
    const clientBuildPath = path.join(__dirname, 'client', 'build');
    app.use(express.static(clientBuildPath));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(clientBuildPath, 'index.html'));
    });
} else {
    // Home route for development
    app.get('/', (req, res) => {
        res.send('HomePage Of The Rental Management App');
    });
}

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

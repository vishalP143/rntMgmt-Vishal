const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to MongoDB without deprecated options
    await mongoose.connect('mongodb://localhost:27017/mydatabase');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;

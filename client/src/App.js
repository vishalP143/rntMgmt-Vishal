import React from 'react';
import { Box } from '@mui/material'; // Material-UI Box for layout management
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route for routing
import Navbar from './components/Navbar'; // Import the Navbar component
import Footer from './components/Footer'; // Import the Footer component

// Placeholder components for routing
const Home = () => <h1>Welcome to the Rental Management System</h1>;
const AboutUs = () => <h1>About Us Page</h1>;
const ShowRooms = () => <h1>Show All Rooms Page</h1>;
const CreateRoom = () => <h1>Create Room Page</h1>;

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensures the footer stays at the bottom
      }}
    >
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content */}
      <Box
        sx={{
          flex: 1, // Makes this box take up remaining space
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/show-rooms" element={<ShowRooms />} />
          <Route path="/create-room" element={<CreateRoom />} />
        </Routes>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default App;

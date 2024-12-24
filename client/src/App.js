import React from 'react';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import CreateRoom from './components/CreateRoom';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// import AboutUs from './components/AboutUs';
// import ShowRoomList from './components/ShowRoomList';
// import ShowRoomDetails from './components/ShowRoomDetails';
// import UpdateRoomInfo from './components/UpdateRoomInfo';

// Main App Component
const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensures full page height
      }}
    >
      <Navbar />

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2, // Optional padding to give spacing around content
        }}
      >
        <Routes>
          {/* Define Routes */}
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about-us" element={<AboutUs />} /> */}
          <Route path="/create-room" element={<CreateRoom />} />
          {/* <Route path="/show-rooms" element={<ShowRoomList />} /> */}
          {/* <Route path="/show-room/:roomId" element={<ShowRoomDetails />} /> */}
          {/* <Route path="/update-room/:roomId" element={<UpdateRoomInfo />} /> */}
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
};

export default App;

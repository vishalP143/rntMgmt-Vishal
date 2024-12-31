import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/neonGlowTheme';  // Import the custom theme
import HomePage from './components/HomePage';
import CreateRoom from './components/CreateRoom';
import ShowRoomList from './components/ShowRoomList';
import ShowRoomDetails from './components/ShowRoomDetails';
import QRCodePage from './components/QRCodePage';
import UpdateRoomInfo from './components/UpdateRoomInfo';
import SearchRooms from './components/SearchRooms';
import Navbar from './components/Navbar';  // A separate Navbar component
import axios from 'axios';
import ExportPage from './components/ExportPage';

const App = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await axios.get('https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/rooms');
      setRooms(response.data);
    };

    fetchRooms();
  }, []);

  const handleDeleteRoom = (roomId) => {
    setRooms(rooms.filter(room => room._id !== roomId));
  };

  const handleUpdateRoom = (updatedRoom) => {
    setRooms(rooms.map(room => room._id === updatedRoom._id ? updatedRoom : room));
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        {/* <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Rental Management Systemss
            </Typography>
          </Toolbar>
        </AppBar> */}

        <Navbar />

        <Container>
          <Routes>
            <Route path="/" element={<HomePage rooms={rooms} />} />
            <Route path="/create-room" element={<CreateRoom />} />
            <Route path="/rooms" element={<ShowRoomList rooms={rooms} onDelete={handleDeleteRoom} />} />
            <Route path="/rooms/:id" element={<ShowRoomDetails onUpdate={handleUpdateRoom} onDelete={handleDeleteRoom} />} />
            <Route path="/export" element={<ExportPage rooms={rooms} />} />
            <Route path="/qr-code/:roomId" element={<QRCodePage />} />
            <Route path="/edit-room/:id" element={<UpdateRoomInfo onUpdate={handleUpdateRoom} />} />
            <Route path="/search" element={<SearchRooms onSearch={setRooms} />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

export default App;

import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline, CircularProgress, useMediaQuery, IconButton } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { darkTheme, lightTheme } from './theme/neonGlowTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy-load components
const HomePage = lazy(() => import('./components/HomePage'));
const CreateRoom = lazy(() => import('./components/CreateRoom'));
const ShowRoomList = lazy(() => import('./components/ShowRoomList'));
const ShowRoomDetails = lazy(() => import('./components/ShowRoomDetails'));
const QRCodePage = lazy(() => import('./components/QRCodePage'));
const UpdateRoomInfo = lazy(() => import('./components/UpdateRoomInfo'));
const SearchRooms = lazy(() => import('./components/SearchRooms'));
const ExportPage = lazy(() => import('./components/ExportPage'));

const App = () => {
    const [rooms, setRooms] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Fetch room data
    const fetchRooms = async () => {
        try {
            const response = await axios.get(
                'https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/rooms'
            );
            setRooms(response.data);
        } catch (error) {
            console.error('Error fetching room data:', error);
        }
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    // Detect system dark mode preference
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    
    useEffect(() => {
        setIsDarkMode(prefersDarkMode);  // Adjust theme based on user/system preference
    }, [prefersDarkMode]);

    const handleDeleteRoom = (roomId) => {
        setRooms(rooms.filter((room) => room._id !== roomId));
    };

    const handleUpdateRoom = (updatedRoom) => {
        setRooms(rooms.map((room) => (room._id === updatedRoom._id ? updatedRoom : room)));
    };

    const theme = createTheme({
        ...darkTheme,  // Use darkTheme or lightTheme depending on isDarkMode
        palette: {
            ...darkTheme.palette,
            mode: isDarkMode ? 'dark' : 'light',
        },
    });

    const toggleDarkMode = () => setIsDarkMode(prev => !prev);

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <CssBaseline />
                <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
                
                <Container sx={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'auto' }}>
                    <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '20px' }}><CircularProgress /></div>}>
                        <Routes>
                            <Route path="/" element={<HomePage rooms={rooms} />} />
                            <Route path="/create-room" element={<CreateRoom />} />
                            <Route path="/rooms" element={<ShowRoomList rooms={rooms} onDelete={handleDeleteRoom} />} />
                            <Route path="/rooms/:id" element={<ShowRoomDetails onUpdate={handleUpdateRoom} onDelete={handleDeleteRoom} />} />
                            <Route path="/export" element={<ExportPage rooms={rooms} />} />
                            <Route path="/qrcodes" element={<QRCodePage />} />
                            <Route path="/edit-room/:id" element={<UpdateRoomInfo onUpdate={handleUpdateRoom} />} />
                            <Route path="/search" element={<SearchRooms onSearch={setRooms} />} />
                        </Routes>
                    </Suspense>
                </Container>

                <Footer />
            </Router>
        </ThemeProvider>
    );
};

export default App;

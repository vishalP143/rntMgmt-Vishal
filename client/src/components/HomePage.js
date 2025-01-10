import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Typography,
    Button,
    Box,
    Grid,
    Card,
    CardContent,
    Divider,
    Slide,
    CircularProgress,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import BarChartIcon from '@mui/icons-material/BarChart';
import QrCodeIcon from '@mui/icons-material/QrCode';
import BackgroundImage from '../assets/home-bg.jpg'; // Add the background image here
import axios from 'axios';

const Homepage = () => {
    const [stats, setStats] = useState({
        totalRooms: 0,
        availableRooms: 0,
        rentedRooms: 0,
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch room data from the API
        axios.get('https://rntmgmt-vishal.onrender.com/api/rooms')
            .then((res) => {
                const rooms = res.data;
                const totalRooms = rooms.length;
                const availableRooms = rooms.filter(room => room.availability).length;
                const rentedRooms = totalRooms - availableRooms;

                setStats({ totalRooms, availableRooms, rentedRooms });
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching room data:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                sx={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box
            sx={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.5)', // Add a dark overlay
                    zIndex: 0,
                }}
            />
            <Container maxWidth="lg" sx={{ zIndex: 1, textAlign: 'center' }}>
                {/* Welcome Section */}
                <Box mb={6}>
                    <Typography
                        variant="h3"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 800,
                            textShadow: '0 4px 12px rgba(0,0,0,0.7)',
                            color: '#ffffff',
                        }}
                    >
                        Welcome to Rental Management System
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                            color: '#f1f1f1',
                        }}
                    >
                        Efficiently manage your rentals with ease
                    </Typography>
                </Box>

                {/* Stats Section */}
                <Grid container spacing={4} mb={6}>
                    {[
                        { icon: <BarChartIcon />, value: stats.totalRooms, label: 'Total Rooms' },
                        { icon: <HomeIcon />, value: stats.availableRooms, label: 'Available Rooms' },
                        { icon: <AddBusinessIcon />, value: stats.rentedRooms, label: 'Rented Rooms' },
                    ].map((stat, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Slide direction="up" in={true} timeout={600 + index * 200}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                        color: 'white',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                                        textAlign: 'center',
                                    }}
                                >
                                    <CardContent>
                                        <Box sx={{ fontSize: 48 }}>{stat.icon}</Box>
                                        <Typography variant="h4">{stat.value}</Typography>
                                        <Typography variant="subtitle1">{stat.label}</Typography>
                                    </CardContent>
                                </Card>
                            </Slide>
                        </Grid>
                    ))}
                </Grid>

                {/* Action Section */}
                <Grid container spacing={3} justifyContent="center">
                    {[
                        { to: '/rooms', label: 'View Rooms', icon: <HomeIcon /> },
                        { to: '/create-room', label: 'Create Room', icon: <AddBusinessIcon /> },
                        { to: '/export', label: 'Export Data', icon: <BarChartIcon /> },
                        { href: 'https://github.com/vishalP143/rntMgmt-Vishal', label: 'GitHub', icon: <GitHubIcon /> },
                        { to: '/search', label: 'Search Rooms', icon: <SearchIcon /> },
                        { to: '/qrcodes', label: 'QR Codes', icon: <QrCodeIcon /> },
                    ].map((action, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Button
                                component={action.href ? 'a' : Link}
                                to={action.to}
                                href={action.href}
                                variant="contained"
                                size="large"
                                startIcon={action.icon}
                                fullWidth
                                sx={{
                                    py: 2,
                                    backgroundColor: '#212121',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#424242',
                                    },
                                }}
                            >
                                {action.label}
                            </Button>
                        </Grid>
                    ))}
                </Grid>

                <Divider sx={{ my: 4 }} />
            </Container>
        </Box>
    );
};

export default Homepage;

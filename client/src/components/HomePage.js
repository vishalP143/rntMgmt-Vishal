import React, { useState } from 'react';
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
    Slide
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import BarChartIcon from '@mui/icons-material/BarChart';
import QrCodeIcon from '@mui/icons-material/QrCode';
import BackgroundImage from '../assets/home-bg.jpg'; // Add the background image here

const Homepage = () => {
    const [stats] = useState({
        totalRooms: 50, // Example data
        availableRooms: 20,
        rentedRooms: 30
    });

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
            <Container maxWidth="lg">
                {/* Welcome Section */}
                <Box textAlign="center" mb={6}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Welcome to Rental Management System
                    </Typography>
                    <Typography variant="h6">
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
                                <Card sx={{ height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                                    <CardContent>
                                        {stat.icon}
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
                                sx={{ py: 2 }}
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

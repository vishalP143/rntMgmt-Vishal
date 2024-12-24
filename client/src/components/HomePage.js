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
  Fade,
  CircularProgress
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios';

const HomePage = () => {
  const [stats, setStats] = useState({
    totalRooms: 0,
    availableRooms: 0,
    latestBooking: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/rooms')
      .then(res => {
        const rooms = res.data;
        const availableRooms = rooms.filter(room => room.isAvailable).length;
        const latestBooking = rooms
          .filter(room => room.bookedDate)
          .sort((a, b) => new Date(b.bookedDate) - new Date(a.bookedDate))[0];

        setStats({
          totalRooms: rooms.length,
          availableRooms,
          latestBooking
        });
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching stats:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Fade in={true} timeout={800}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h1" color="primary" gutterBottom>
            Welcome to Rental Management System
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Streamline your room rental processes efficiently
          </Typography>
        </Box>

        <Grid container spacing={4} mb={6}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <LibraryBooksIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {stats.totalRooms}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Total Rooms
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <LibraryBooksIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  {stats.availableRooms}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Available Rooms
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <CardContent sx={{ textAlign: 'center', width: '100%' }}>
                <LibraryBooksIcon color="primary" sx={{ fontSize: 40, mb: 2 }} />
                <Typography variant="h4" gutterBottom>
                  Latest Booking
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {stats.latestBooking?.roomNumber || 'No bookings yet'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant="h5" gutterBottom color="primary">
            Features at a Glance
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/rooms"
              variant="contained"
              size="large"
              startIcon={<LibraryBooksIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              View Rooms
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/create-room"
              variant="contained"
              size="large"
              startIcon={<AddIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              Add Room
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              component={Link}
              to="/search"
              variant="contained"
              size="large"
              startIcon={<SearchIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              Search Rooms
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Button
              component="a"
              href="https://github.com/vishalP143/rntMgmt-Vishal"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              fullWidth
              sx={{ py: 2 }}
            >
              GitHub Repository
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default HomePage;

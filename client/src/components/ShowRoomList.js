import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Container, Grid, CircularProgress, Box } from '@mui/material';
import RoomCard from './RoomCard';  // You need to create this component for displaying room details.

function ShowRoomList() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
        .get(`https://rntmgmt-vishal.onrender.com/api/rooms`)
        .then((res) => {
            setRooms(res.data);
            setLoading(false);
        })
        .catch((err) => {
            setError('Error loading rooms, please try again later.');
            setLoading(false);
            console.error("Error fetching rooms:", err); // Log the error for debugging
        });
    }, []);

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h3" component="h1" color="primary" gutterBottom>
                Rooms List
            </Typography>

            <Button 
                component={Link}
                to="/create-room"  // Link to the page where users can add a new room
                color="primary"
                variant="contained"
                sx={{ mb: 4 }}
                aria-label="Add new room"
            >
                Add New Room
            </Button>

            {loading ? (
                <Box display="flex" justifyContent="center" mt={4}>
                    <CircularProgress aria-live="polite" />
                </Box>
            ) : error ? (
                <Box display="flex" justifyContent="center" mt={4}>
                    <Typography variant="h6" color="error">{error}</Typography>
                </Box>
            ) : (
                <Grid container spacing={3}>
                    {rooms.length === 0 ? (
                        <Grid item xs={12}>
                            <Typography variant="h6" color="text.secondary">
                                No Rooms found!
                            </Typography>
                        </Grid>
                    ) : (
                        rooms.map((room) => (
                            <Grid item xs={12} sm={6} md={4} key={room._id}>
                                <RoomCard room={room} />
                            </Grid>
                        ))
                    )}
                </Grid>
            )}
        </Container>
    );
}

export default ShowRoomList;

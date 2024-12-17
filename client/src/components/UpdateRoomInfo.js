import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, TextField, Typography, Button, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const UpdateRoomInfo = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: '',
  });

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/rooms/${roomId}`);
        setRoom(response.data);
      } catch (error) {
        console.error('Error fetching room details:', error);
      }
    };

    fetchRoomDetails();
  }, [roomId]);

  const handleChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/rooms/${roomId}`, room);
      setNotification({
        open: true,
        message: 'Room details updated successfully!',
        severity: 'success',
      });
      setTimeout(() => navigate(`/show-room/${roomId}`), 1500);
    } catch (error) {
      setNotification({
        open: true,
        message: 'Failed to update room details.',
        severity: 'error',
      });
    }
  };

  if (!room) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 4, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom>
        Update Room Information
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Room Name"
          name="name"
          variant="outlined"
          value={room.name}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Rent per Day"
          name="rentperday"
          variant="outlined"
          value={room.rentperday}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          variant="outlined"
          value={room.description}
          onChange={handleChange}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" type="submit">
          Update Room
        </Button>
      </form>

      {/* Notification Snackbar */}
      <Snackbar open={notification.open} autoHideDuration={6000} onClose={() => setNotification({ ...notification, open: false })}>
        <Alert severity={notification.severity}>{notification.message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default UpdateRoomInfo;

import React, { useState } from 'react';
import { Link,  } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress
} from '@mui/material';

const CreateRoom = () => {
  // const navigate = useNavigate();
  const [room, setRoom] = useState({
    roomNumber: '',
    type: '',
    price: '',
    isAvailable: true,
    description: '',
  });
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 5000); // Hides notification after 5 seconds
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formattedRoom = {
      ...room,
      roomNumber: room.roomNumber.trim(),
      type: room.type.charAt(0).toUpperCase() + room.type.slice(1).toLowerCase(),
      price: Number(room.price),
      isAvailable: JSON.parse(room.isAvailable),
    };

    try {
      await axios.post('https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/rooms', formattedRoom);
      setRoom({
        roomNumber: '',
        type: '',
        price: '',
        isAvailable: true,
        description: '',
      });
      showNotification('success', 'Room added successfully!');
      // navigate('/');
    } catch (err) {
      console.error('Error in CreateRoom:', err);
      showNotification('error', 'Failed to add room. Check your input and try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      {notification && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '15px',
            textAlign: 'center',
            fontSize: '16px',
            zIndex: 1000,
            color: '#fff',
            backgroundColor: notification.type === 'success' ? '#28a745' : '#dc3545',
          }}
        >
          {notification.message}
        </Box>
      )}

      <Box mb={4}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Button variant="outlined" color="primary">
            Show Room List
          </Button>
        </Link>
      </Box>

      <Typography variant="h4" align="center" gutterBottom>
        Create Room
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        Add a new room to the system
      </Typography>

      <form onSubmit={onSubmit}>
        <TextField
          label="Room Number"
          name="roomNumber"
          fullWidth
          margin="normal"
          variant="outlined"
          value={room.roomNumber}
          onChange={onChange}
          required
        />

        <TextField
          label="Room Type (Single, Double, Suite)"
          name="type"
          fullWidth
          margin="normal"
          variant="outlined"
          value={room.type}
          onChange={onChange}
          required
        />

        <TextField
          label="Price per Night"
          name="price"
          type="number"
          fullWidth
          margin="normal"
          variant="outlined"
          value={room.price}
          onChange={onChange}
          required
        />

        <TextField
          label="Room Description"
          name="description"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          variant="outlined"
          value={room.description}
          onChange={onChange}
        />

        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel>Availability</InputLabel>
          <Select
            name="isAvailable"
            value={room.isAvailable}
            onChange={onChange}
            label="Availability"
          >
            <MenuItem value={true}>Available</MenuItem>
            <MenuItem value={false}>Not Available</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={24} color="inherit" /> : null}
          >
            {loading ? 'Creating...' : 'Create Room'}
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default CreateRoom;

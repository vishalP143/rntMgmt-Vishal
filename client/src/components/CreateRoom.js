import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  TextField, MenuItem, Button, FormControlLabel, Checkbox, Container,
  Typography, Grid, Paper, CircularProgress
} from '@mui/material';

const CreateRoom = () => {
  const navigate = useNavigate();
  const [room, setRoom] = useState({
    room_number: '', floor_number: '', building_name: '', room_type: 'Single', rent: '',
    availability: true, tenant_name: '', tenant_email: '', tenant_phone: '',
    lease_start_date: '', lease_end_date: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setRoom((prevRoom) => ({
      ...prevRoom,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate rent
    if (room.rent <= 0) {
      setError('Rent must be a positive number.');
      setLoading(false);
      return;
    }

    // Validate lease dates
    if (room.lease_start_date && room.lease_end_date && new Date(room.lease_start_date) > new Date(room.lease_end_date)) {
      setError('Lease start date cannot be later than the lease end date.');
      setLoading(false);
      return;
    }

    axios
      .post('https://rntmgmt-vishal.onrender.com/api/rooms', room)
      .then(() => {
        alert('Room created successfully!');
        setRoom({
          room_number: '', floor_number: '', building_name: '', room_type: 'Single', rent: '',
          availability: true, tenant_name: '', tenant_email: '', tenant_phone: '',
          lease_start_date: '', lease_end_date: ''
        });
        setError('');
        navigate('/rooms');
      })
      .catch((err) => {
        const errorMessage = err.response?.data || 'Failed to create room. Please try again.';
        setError(errorMessage);
      })
      .finally(() => setLoading(false));
  }, [room, navigate]);

  return (
    <Container maxWidth="sm" sx={{ my: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Create New Room
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
        Please fill in the details below to create a new room. Fields marked with <span style={{ color: 'red' }}>*</span> are mandatory.
      </Typography>
      <Paper sx={{ padding: 3 }}>
        <form onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Room Number *"
                variant="outlined"
                fullWidth
                name="room_number"
                value={room.room_number}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Floor Number *"
                variant="outlined"
                fullWidth
                name="floor_number"
                type="number"
                value={room.floor_number}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Building Name *"
                variant="outlined"
                fullWidth
                name="building_name"
                value={room.building_name}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                label="Room Type *"
                variant="outlined"
                fullWidth
                name="room_type"
                value={room.room_type}
                onChange={onChange}
                required
              >
                <MenuItem value="Single">Single</MenuItem>
                <MenuItem value="Double">Double</MenuItem>
                <MenuItem value="Shared">Shared</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Rent (₹ per month) *"
                variant="outlined"
                fullWidth
                name="rent"
                type="number"
                value={room.rent}
                onChange={onChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox name="availability" checked={room.availability} onChange={onChange} />}
                label="Available"
              />
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom>
            Tenant Details (Optional)
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Tenant Name"
                variant="outlined"
                fullWidth
                name="tenant_name"
                value={room.tenant_name}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Tenant Email"
                variant="outlined"
                fullWidth
                name="tenant_email"
                type="email"
                value={room.tenant_email}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Tenant Phone"
                variant="outlined"
                fullWidth
                name="tenant_phone"
                type="tel"
                value={room.tenant_phone}
                onChange={onChange}
              />
            </Grid>
          </Grid>

          <Typography variant="h6" gutterBottom>
            Lease Dates
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Lease Start Date"
                variant="outlined"
                fullWidth
                name="lease_start_date"
                type="date"
                value={room.lease_start_date}
                onChange={onChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Lease End Date"
                variant="outlined"
                fullWidth
                name="lease_end_date"
                type="date"
                value={room.lease_end_date}
                onChange={onChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>

          <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading} sx={{ mt: 2 }}>
            {loading ? <CircularProgress size={24} /> : 'Create Room'}
          </Button>

          <Button
            variant="outlined" color="secondary" fullWidth sx={{ mt: 2 }} onClick={() => navigate('/rooms')}
          >
            Cancel
          </Button>
        </form>

        {error && <Typography color="error" variant="body2" sx={{ mt: 2 }}>{error}</Typography>}
      </Paper>
    </Container>
  );
};

export default React.memo(CreateRoom);

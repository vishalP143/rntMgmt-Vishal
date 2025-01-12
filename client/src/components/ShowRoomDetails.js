import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  Divider,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// Styled Paper component for the main content area
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const ShowRoomDetails = () => {
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // Use useCallback to memoize the fetch function and prevent re-renders
  const fetchRoomDetails = useCallback(() => {
    if (id) {
      axios
        .get(`https://rntmgmt-vishal.onrender.com/api/rooms/${id}`)
        .then((res) => setRoom(res.data))
        .catch((err) => setError('Failed to load room details.'));
    }
  }, [id]);

  useEffect(() => {
    fetchRoomDetails();
  }, [fetchRoomDetails]);

  const handleDelete = () => {
    axios
      .delete(`https://rntmgmt-vishal.onrender.com/api/rooms/${id}`)
      .then(() => navigate('/rooms'))
      .catch(() => setError('Failed to delete the room.'));
    setOpenDialog(false);
  };

  const formatDate = (date) => (date ? new Date(date).toLocaleDateString() : 'N/A');

  if (error) {
    return (
      <Container maxWidth="md">
        <StyledPaper>
          <Typography color="error" variant="h5" align="center">
            {error}
          </Typography>
        </StyledPaper>
      </Container>
    );
  }

  if (!room) {
    return (
      <Container maxWidth="md">
        <StyledPaper>
          <Typography variant="h5" align="center">
            Loading room details...
          </Typography>
        </StyledPaper>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://roohtravel.com/wp-content/uploads/2023/07/thailand_hotels_with_pool.jpeg"
                alt={room.room_number || 'Room Image'}
                loading="lazy" // Lazy load the image for performance optimization
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x200?text=No+Image';
                }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              Room {room.room_number}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              {room.room_type} - {room.building_name}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box>
              <Typography variant="body1">Room Number: {room.room_number}</Typography>
              <Typography variant="body1">Floor: {room.floor_number}</Typography>
              <Typography variant="body1">Building: {room.building_name}</Typography>
              <Typography variant="body1">Rent: ${room.rent}</Typography>
              <Typography variant="body1">
                Availability: {room.availability ? 'Available' : 'Occupied'}
              </Typography>
              <Typography variant="body1">Tenant: {room.tenant_name || 'N/A'}</Typography>
              <Typography variant="body1">Tenant Email: {room.tenant_email || 'N/A'}</Typography>
              <Typography variant="body1">Lease Start Date: {formatDate(room.lease_start)}</Typography>
              <Typography variant="body1">Lease End Date: {formatDate(room.lease_end)}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            component={RouterLink}
            to="/rooms"
            variant="outlined"
            aria-label="Back to room list"
          >
            Back to Room List
          </Button>
          <Box>
            <Button
              startIcon={<EditIcon />}
              component={RouterLink}
              to={`/edit-room/${room._id}`}
              variant="contained"
              color="primary"
              sx={{ mr: 1 }}
              aria-label="Edit room details"
            >
              Edit Room
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              variant="outlined"
              color="error"
              onClick={() => setOpenDialog(true)}
              aria-label="Delete room"
            >
              Delete Room
            </Button>
          </Box>
        </Box>
      </StyledPaper>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this room? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary" aria-label="Cancel deletion">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="error" autoFocus aria-label="Confirm deletion">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ShowRoomDetails;

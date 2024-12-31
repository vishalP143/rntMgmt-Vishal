import React, { useState, useEffect } from 'react';
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
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const ShowRoomDetails = () => {
  const [room, setRoom] = useState({});
  const [openDialog, setOpenDialog] = useState(false);
  const value = useParams();
  const id = value.id;
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/rooms/${id}`)
        .then((res) => {
          setRoom(res.data);
        })
        .catch((err) => {
          console.error("Error fetching room details:", err);
        });
    }
  }, [id]);

  const onDeleteClick = () => {
    setOpenDialog(true);
  };

  const handleDeleteConfirm = () => {
    axios
      .delete(`https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/rooms/${id}`)
      .then((res) => {
        navigate('/rooms');
      })
      .catch((err) => {
        console.log('Error from ShowStudentDetails_deleteClick',err);
      });
    setOpenDialog(false);
  };

  const handleDeleteCancel = () => {
    setOpenDialog(false);
  };

  return (
    <Container maxWidth="md">
      <StyledPaper>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image="https://images.unsplash.com/photo-1495446815901-a7297e633e8d" // Replace with room-related image if available
                alt={room.room_number}
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
            <Box display="flex" flexDirection="column">
              <Typography variant="body1" paragraph>Room Number: {room.room_number}</Typography>
              <Typography variant="body1">Floor: {room.floor_number}</Typography>
              <Typography variant="body1">Building: {room.building_name}</Typography>
              <Typography variant="body1">Rent: ${room.rent}</Typography>
              <Typography variant="body1">Availability: {room.availability ? 'Available' : 'Occupied'}</Typography>
              <Typography variant="body1">Tenant: {room.tenant_name || 'N/A'}</Typography>
              <Typography variant="body1">Tenant Email: {room.tenant_email || 'N/A'}</Typography>
              <Typography variant="body1">Lease Start Date: {room.lease_start}</Typography>
              <Typography variant="body1">Lease End Date: {room.lease_end}</Typography>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            startIcon={<ArrowBackIcon />}
            component={RouterLink}
            to="/room-list"
            variant="outlined"
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
            >
              Edit Room
            </Button>
            <Dialog
        open={openDialog}
        onClose={handleDeleteCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this student? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

          </Box>
        </Box>
      </StyledPaper>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleDeleteCancel}
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
          <Button onClick={handleDeleteCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ShowRoomDetails;

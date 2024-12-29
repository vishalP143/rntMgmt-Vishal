import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import axios from 'axios';

const ShowRoomDetails = ({ roomId, onUpdate, onDelete }) => {
  const [room, setRoom] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchRoom = async () => {
      const response = await axios.get(`/api/rooms/${roomId}`);
      setRoom(response.data);
    };
    fetchRoom();
  }, [roomId]);

  const handleUpdate = async () => {
    await axios.put(`/api/rooms/${roomId}`, room);
    onUpdate(room);
    setOpen(false);
  };

  const handleDelete = async () => {
    await axios.delete(`/api/rooms/${roomId}`);
    onDelete(roomId);
  };

  if (!room) return null;

  return (
    <div>
      <Typography variant="h4">Room Details</Typography>
      <Typography>{`Room Number: ${room.room_number}`}</Typography>
      <Typography>{`Type: ${room.room_type}`}</Typography>
      <Typography>{`Floor: ${room.floor_number}, Rent: $${room.rent}`}</Typography>
      <Typography>{`Tenant: ${room.tenant_name || 'No tenant'}`}</Typography>
      <Button onClick={() => setOpen(true)}>Update</Button>
      <Button onClick={handleDelete}>Delete</Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Update Room</DialogTitle>
        <DialogContent>
          <TextField
            label="Room Number"
            value={room.room_number}
            onChange={(e) => setRoom({ ...room, room_number: e.target.value })}
          />
          <TextField
            label="Floor Number"
            value={room.floor_number}
            onChange={(e) => setRoom({ ...room, floor_number: e.target.value })}
          />
          <TextField
            label="Rent"
            value={room.rent}
            onChange={(e) => setRoom({ ...room, rent: e.target.value })}
          />
          <TextField
            label="Tenant Name"
            value={room.tenant_name}
            onChange={(e) => setRoom({ ...room, tenant_name: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdate}>Update</Button>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ShowRoomDetails;

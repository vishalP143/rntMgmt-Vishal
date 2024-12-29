import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

const RoomCard = ({ room, onView, onUpdate, onDelete }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{`Room ${room.room_number} - ${room.room_type}`}</Typography>
        <Typography variant="body1">{`Floor: ${room.floor_number}, Rent: $${room.rent}`}</Typography>
        <Typography variant="body2" color="textSecondary">
          {room.availability ? 'Available' : `Rented to: ${room.tenant_name}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => onView(room)}>View</Button>
        <Button onClick={() => onUpdate(room)}>Update</Button>
        <Button onClick={() => onDelete(room._id)}>Delete</Button>
      </CardActions>
    </Card>
  );
};

export default RoomCard;

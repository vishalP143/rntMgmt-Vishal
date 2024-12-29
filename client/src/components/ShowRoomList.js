import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import axios from 'axios';

const ShowRoomList = ({ rooms, onDelete }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Room Number</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Rent</TableCell>
            <TableCell>Availability</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rooms.map((room) => (
            <TableRow key={room._id}>
              <TableCell>{room.room_number}</TableCell>
              <TableCell>{room.room_type}</TableCell>
              <TableCell>{room.rent}</TableCell>
              <TableCell>{room.availability ? 'Available' : 'Rented'}</TableCell>
              <TableCell>
                <Button onClick={() => window.location.href = `/rooms/${room._id}`}>View</Button>
                <Button onClick={() => window.location.href = `/update-room/${room._id}`}>Edit</Button>
                <Button onClick={() => onDelete(room._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShowRoomList;

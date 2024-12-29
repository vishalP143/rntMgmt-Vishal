import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

const UpdateRoomInfo = ({ roomId, onUpdate }) => {
  const [roomData, setRoomData] = useState({
    room_number: '',
    floor_number: '',
    building_name: '',
    room_type: '',
    rent: '',
    availability: true,
  });

  useEffect(() => {
    const fetchRoom = async () => {
      const response = await axios.get(`/api/rooms/${roomId}`);
      setRoomData(response.data);
    };
    fetchRoom();
  }, [roomId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/rooms/${roomId}`, roomData);
      onUpdate(response.data);
    } catch (error) {
      console.error('Error updating room', error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <TextField
        label="Room Number"
        value={roomData.room_number}
        onChange={(e) => setRoomData({ ...roomData, room_number: e.target.value })}
        required
      />
      <TextField
        label="Floor Number"
        value={roomData.floor_number}
        onChange={(e) => setRoomData({ ...roomData, floor_number: e.target.value })}
        required
      />
      <TextField
        label="Rent"
        value={roomData.rent}
        onChange={(e) => setRoomData({ ...roomData, rent: e.target.value })}
        required
      />
      <Button type="submit">Update Room</Button>
    </form>
  );
};

export default UpdateRoomInfo;

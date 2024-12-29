import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';

const CreateRoom = () => {
  const [roomData, setRoomData] = useState({
    room_number: '',
    floor_number: '',
    building_name: '',
    room_type: '',
    rent: '',
    availability: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/rooms', roomData);
      console.log('Room Created', response.data);
    } catch (error) {
      console.error('Error creating room', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
        label="Building Name"
        value={roomData.building_name}
        onChange={(e) => setRoomData({ ...roomData, building_name: e.target.value })}
        required
      />
      <FormControl>
        <InputLabel>Room Type</InputLabel>
        <Select
          value={roomData.room_type}
          onChange={(e) => setRoomData({ ...roomData, room_type: e.target.value })}
        >
          <MenuItem value="Single">Single</MenuItem>
          <MenuItem value="Double">Double</MenuItem>
          <MenuItem value="Shared">Shared</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Rent"
        type="number"
        value={roomData.rent}
        onChange={(e) => setRoomData({ ...roomData, rent: e.target.value })}
        required
      />
      <Button type="submit">Create Room</Button>
    </form>
  );
};

export default CreateRoom;

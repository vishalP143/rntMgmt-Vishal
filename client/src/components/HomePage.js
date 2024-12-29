import React from 'react';
import { Button, Typography } from '@mui/material';
import axios from 'axios';

const HomePage = () => {
  const [roomStats, setRoomStats] = React.useState({ total: 0, available: 0 });

  React.useEffect(() => {
    const fetchRoomStats = async () => {
      const response = await axios.get('/api/rooms');
      const availableRooms = response.data.filter((room) => room.availability).length;
      setRoomStats({ total: response.data.length, available: availableRooms });
    };
    fetchRoomStats();
  }, []);

  return (
    <div>
      <Typography variant="h4">Welcome to the Rental Management System</Typography>
      <Typography variant="h6">{`Total Rooms: ${roomStats.total}`}</Typography>
      <Typography variant="h6">{`Available Rooms: ${roomStats.available}`}</Typography>
      <Button>Create Room</Button>
      <Button>Export Room Data</Button>
    </div>
  );
};

export default HomePage;

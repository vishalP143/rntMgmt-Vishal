import React from 'react';
import { Button } from '@mui/material';
import { CSVLink } from 'react-csv'; // Make sure you have installed 'react-csv'

const ExportRoomData = ({ rooms }) => {
  return (
    <div>
      <CSVLink data={rooms} filename="rooms_data.csv">
        <Button variant="contained">Export CSV</Button>
      </CSVLink>
    </div>
  );
};

export default ExportRoomData; // Corrected export name here

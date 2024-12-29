import React from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { QRCodeCanvas } from 'qrcode.react'; // Fixed the QRCode import

const QRCodePage = ({ room }) => {
  const qrValue = `Room Number: ${room.room_number}, Type: ${room.room_type}, Rent: $${room.rent}`;

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">QR Code for Room {room.room_number}</Typography>
        <QRCodeCanvas value={qrValue} size={256} />
        <Button
          variant="contained"
          onClick={() => window.print()}
          style={{ marginTop: '10px' }}
        >
          Print QR Code
        </Button>
      </CardContent>
    </Card>
  );
};

export default QRCodePage;

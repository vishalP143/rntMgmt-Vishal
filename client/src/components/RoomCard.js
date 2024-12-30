import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                borderRadius: 2,
                boxShadow: 3,
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 6,
                },
            }}
        >
            <img
                src='https://via.placeholder.com/400x200?text=Room+Image'
                alt='Room'
                style={{ height: 200, objectFit: 'cover', width: '100%' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='h6' component='div' color='primary' gutterBottom>
                    <Link to={`/room-details/${room._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {room.room_number} - {room.room_type}
                    </Link>
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Floor: {room.floor_number}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Rent: ${room.rent} / month
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Availability: {room.availability ? 'Available' : 'Occupied'}
                </Typography>
                {room.tenant_name && (
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        Tenant: {room.tenant_name}
                    </Typography>
                )}
            </CardContent>
            <Box sx={{ p: 2, mt: 'auto' }}>
                <Button
                    component={Link}
                    to={`/room-details/${room._id}`}
                    variant='contained'
                    color='primary'
                    size='small'
                    fullWidth
                >
                    View Details
                </Button>
            </Box>
        </Card>
    );
};

export default RoomCard;

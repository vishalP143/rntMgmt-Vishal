// import React from 'react';
// import { Card, CardContent, Typography, Button, Box, Chip } from '@mui/material';
// import { Link } from 'react-router-dom';

// const RoomCard = ({ room }) => {
//   return (
//     <Card
//       sx={{
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         transition: 'transform 0.3s, box-shadow 0.3s',
//         borderRadius: 2,
//         boxShadow: 3,
//         '&:hover': {
//           transform: 'scale(1.05)',
//           boxShadow: 8,
//         },
//       }}
//     >
//       <img
//         src='https://images.unsplash.com/photo-1597346469303-04e51e7c2e55'
//         alt='Room'
//         style={{ height: 200, objectFit: 'cover', width: '100%' }}
//       />
//       <CardContent sx={{ flexGrow: 1 }}>
//         <Typography variant="h6" component="div" color="primary" gutterBottom>
//           <Link to={`/room-details/${room._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//             {room.roomNumber} - {room.type}
//           </Link>
//         </Typography>
//         <Typography variant="subtitle1" color="text.secondary">
//           Price per night: ${room.price}
//         </Typography>

//         <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//           {room.description.length > 100
//             ? `${room.description.substring(0, 100)}...`
//             : room.description}
//         </Typography>

//         <Box sx={{ mt: 2 }}>
//           <Chip
//             label={room.isAvailable ? 'Available' : 'Not Available'}
//             color={room.isAvailable ? 'success' : 'error'}
//             size="small"
//           />
//         </Box>
//       </CardContent>

//       <Box sx={{ p: 2, mt: 'auto' }}>
//         <Button
//           component={Link}
//           to={`/room-details/${room._id}`}
//           variant="contained"
//           color="primary"
//           size="small"
//           fullWidth
//         >
//           View Details
//         </Button>
//       </Box>
//     </Card>
//   );
// };

// export default RoomCard;

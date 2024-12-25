// import React, { useState, useEffect } from 'react';
// import { useParams, Link as RouterLink, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import {
//   Container,
//   Paper,
//   Typography,
//   Grid,
//   Button,
//   Card,
//   CardMedia,
//   Divider,
//   Box,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

// // Custom styling for the paper container
// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   marginTop: theme.spacing(4),
//   marginBottom: theme.spacing(4),
//   backgroundColor: theme.palette.background.paper,
//   boxShadow: theme.shadows[3],
// }));

// const ShowRoomDetails = () => {
//   const [room, setRoom] = useState({});
//   const [openDialog, setOpenDialog] = useState(false);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   // Fetch room details on component mount
//   useEffect(() => {
//     axios
//       .get(`/api/rooms/${id}`)
//       .then((res) => {
//         setRoom(res.data);
//       })
//       .catch((err) => {
//         console.log('Error from ShowRoomDetails');
//       });
//   }, [id]);

//   // Handle room deletion
//   const onDeleteClick = () => {
//     setOpenDialog(true);
//   };

//   const handleDeleteConfirm = () => {
//     axios
//       .delete(`https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/rooms${id}`)
//       .then((res) => {
//         navigate('https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/room-list');
//       })
//       .catch((err) => {
//         console.log('Error from ShowRoomDetails_deleteClick');
//       });
//     setOpenDialog(false);
//   };

//   const handleDeleteCancel = () => {
//     setOpenDialog(false);
//   };

//   return (
//     <Container maxWidth="md">
//       <StyledPaper>
//         <Grid container spacing={4}>
//           {/* Room Image */}
//           <Grid item xs={12} md={4}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="300"
//                 image="https://images.unsplash.com/photo-1600901689731-e4b743de5c5f" // Sample Room Image
//                 alt={room.roomNumber}
//               />
//             </Card>
//           </Grid>

//           {/* Room Details */}
//           <Grid item xs={12} md={8}>
//             <Typography variant="h4" component="h1" gutterBottom>
//               Room {room.roomNumber} - {room.type}
//             </Typography>
//             <Typography variant="h6" color="textSecondary" gutterBottom>
//               Price per night: ${room.price}
//             </Typography>

//             {/* Divider between sections */}
//             <Divider sx={{ my: 2 }} />

//             {/* Display room details in a column */}
//             <Box display="flex" flexDirection="column">
//               <Typography variant="body1" paragraph>
//                 {room.description}
//               </Typography>
//               <Typography variant="body1">Room Size: {room.size} sq ft</Typography>
//               <Typography variant="body1">
//                 Available: {room.isAvailable ? 'Yes' : 'No'}
//               </Typography>
//               <Typography variant="body1">Floor: {room.floor}</Typography>
//               <Typography variant="body1">Bed Type: {room.bedType}</Typography>
//             </Box>
//           </Grid>
//         </Grid>

//         {/* Action Buttons (Back, Edit, Delete) */}
//         <Box mt={4} display="flex" justifyContent="space-between">
//           <Button
//             startIcon={<ArrowBackIcon />}
//             component={RouterLink}
//             to="/room-list"
//             variant="outlined"
//           >
//             Back to Room List
//           </Button>
//           <Box>
//             <Button
//               startIcon={<EditIcon />}
//               component={RouterLink}
//               to={`https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/rooms/edit-room/${room._id}`}
//               variant="contained"
//               color="primary"
//               sx={{ mr: 1 }}
//             >
//               Edit Room
//             </Button>
//             <Button
//               startIcon={<DeleteIcon />}
//               onClick={onDeleteClick}
//               variant="contained"
//               color="error"
//             >
//               Delete Room
//             </Button>
//           </Box>
//         </Box>
//       </StyledPaper>

//       {/* Delete Confirmation Dialog */}
//       <Dialog
//         open={openDialog}
//         onClose={handleDeleteCancel}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{"Confirm Deletion"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Are you sure you want to delete this room? This action cannot be undone.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleDeleteCancel} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleDeleteConfirm} color="error" autoFocus>
//             Delete
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default ShowRoomDetails;

// // src/components/UpdateRoomInfo.js
// import React, { useState, useEffect } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Box, Button, TextField, Typography } from '@mui/material';

// function UpdateRoomInfo(props) {
//   const [room, setRoom] = useState({
//     title: '',
//     description: '',
//     price: '',
//     location: '',
//   });

//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/rooms${id}`)
//       .then((res) => {
//         setRoom({
//           title: res.data.title,
//           description: res.data.description,
//           price: res.data.price,
//           location: res.data.location,
//         });
//       })
//       .catch((err) => {
//         console.log('Error from UpdateRoomInfo GET request');
//         console.log(err);
//       });
//   }, [id]);

//   const onChange = (e) => {
//     setRoom({ ...room, [e.target.name]: e.target.value });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       title: room.title,
//       description: room.description,
//       price: room.price,
//       location: room.location,
//     };

//     axios
//       .put(`https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/rooms${id}`, data)
//       .then((res) => {
//         navigate(`https://5000-vishalp143-rntmgmtvisha-xs4df1lv6s3.ws-us117.gitpod.io/api/rooms/show-room/${id}`);
//       })
//       .catch((err) => {
//         console.log('Error in UpdateRoomInfo PUT request ->');
//         console.log(err);
//       });
//   };

//   return (
//     <Box sx={{ width: '100%', maxWidth: 600, mx: 'auto', py: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Edit Room Information
//       </Typography>
//       <form noValidate onSubmit={onSubmit}>
//         <TextField
//           label="Title"
//           name="title"
//           value={room.title}
//           onChange={onChange}
//           fullWidth
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           label="Description"
//           name="description"
//           value={room.description}
//           onChange={onChange}
//           fullWidth
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           label="Price"
//           name="price"
//           value={room.price}
//           onChange={onChange}
//           fullWidth
//           sx={{ mb: 2 }}
//         />
//         <TextField
//           label="Location"
//           name="location"
//           value={room.location}
//           onChange={onChange}
//           fullWidth
//           sx={{ mb: 3 }}
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           sx={{ mb: 3 }}
//         >
//           Update Room
//         </Button>
//         <Button
//           component={Link}
//           to="/room-list"
//           variant="outlined"
//           color="secondary"
//           fullWidth
//         >
//           Back to Room List
//         </Button>
//       </form>
//     </Box>
//   );
// }

// export default UpdateRoomInfo;

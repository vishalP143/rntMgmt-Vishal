import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box 
    component="footer" 
    sx={{
      bgcolor: 'primary.main',
      color: 'white',
      py: 4,
      width: '100%',
      textAlign: 'center',
      borderTop: `4px solid ${theme => theme.palette.secondary.main}`,
      boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.2)',
    }}
  >
    <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 1 }}>
      Rental Management System
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Simplifying Room Rentals for Everyone
    </Typography>
    <Typography variant="body2">
      © {new Date().getFullYear()} Vishal Pradhan | Empowering the Future of Rentals
    </Typography>
  </Box>
);

export default Footer;

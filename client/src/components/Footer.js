// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box 
    component="footer" 
    sx={{
      bgcolor: 'primary.main',
      color: 'white',
      py: 2,
      height: 'auto',
      textAlign: 'center',
      borderTop: '1px solid white', // Optional: add a top border for contrast
    }}
  >
    <Typography variant="h6" gutterBottom>
      Rental Management System
    </Typography>
    <Typography variant="body2" sx={{ mt: 1 }}>
      © {new Date().getFullYear()} Powered by Vishal Pradhan | All Rights Reserved
    </Typography>
    <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
      Simplifying Rental Management with Ease!
    </Typography>
  </Box>
);

export default Footer;

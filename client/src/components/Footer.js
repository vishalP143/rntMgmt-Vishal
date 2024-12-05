import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'; // Social icons (optional)

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: 'primary.main', // Use primary theme color for background
      color: 'text.primary', // Use primary text color
      py: 4,
      px: 2,
      textAlign: 'center',
      borderTop: `2px solid ${theme => theme.palette.secondary.main}`, // Highlight border
    }}
  >
    {/* Main Footer Content */}
    <Typography
      variant="h6"
      gutterBottom
      sx={{
        fontFamily: '"Fira Sans", sans-serif', // Updated font
        fontWeight: 700, // Bold text
        fontSize: '1.5rem',
      }}
    >
      Built with ❤️ by Vishal Pradhan
    </Typography>

    <Typography
      variant="body2"
      sx={{
        mt: 1,
        fontFamily: '"Roboto", sans-serif',
        fontSize: '0.9rem',
        color: 'text.secondary',
      }}
    >
      © {new Date().getFullYear()} Bsc Cohort | All Rights Reserved
    </Typography>

    {/* Optional Social Media Icons */}
    <Box sx={{ mt: 2 }}>
      <IconButton
        href="https://github.com/vishalP143"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'text.primary' }}
      >
        <GitHub />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/in/vishal-pradhan-65901b327/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'text.primary' }}
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        href="https://twitter.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: 'text.primary' }}
      >
        <Twitter />
      </IconButton>
    </Box>
  </Box>
);

export default Footer;

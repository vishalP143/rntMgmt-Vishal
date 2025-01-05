import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      bgcolor: 'primary.dark',
      color: 'white',
      py: 4,
      mt: 4,
      background: 'linear-gradient(45deg, #1e88e5, #0d47a1)',
    }}
  >
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12} sm={4} textAlign="center">
        <Typography variant="h6" gutterBottom>
          Rental Management System
        </Typography>
        <Typography variant="body2">
          © {new Date().getFullYear()} Vishal Pradhan | All Rights Reserved
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} textAlign="center">
        <Typography variant="subtitle1">
          Simplifying Rentals, One Step at a Time
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} textAlign="center">
        <Typography variant="subtitle1" gutterBottom>
          Connect With Us
        </Typography>
        <IconButton href="https://github.com/vishalP143" target="_blank" color="inherit">
          <GitHubIcon />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/vishal-pradhan-65901b327/" target="_blank" color="inherit">
          <LinkedInIcon />
        </IconButton>
        <IconButton href="vishal.p8070@gmail.com" color="inherit">
          <MailOutlineIcon />
        </IconButton>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;

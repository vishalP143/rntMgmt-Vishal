import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h3" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Welcome to the Rental Management System, a platform designed to make managing rental properties easier and more efficient. Our goal is to simplify the rental process for both landlords and tenants, providing a seamless experience for all.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant="body1" color="text.secondary">
          Whether you're a landlord looking to list your property or a tenant searching for a new home, our system is here to assist you with all your rental needs.
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;

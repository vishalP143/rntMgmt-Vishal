import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Homepage = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
      <Typography variant="h2" component="h1" color="primary" gutterBottom>
        Welcome to Rental Management System
      </Typography>
      <Typography variant="h4" gutterBottom>
        Manage your rentals efficiently and effectively.
      </Typography>

      <Box mt={4}>
        <Button 
          component={Link} 
          to="/room-list" 
          color="primary" 
          variant="contained"
          sx={{ mb: 2 }} // Added margin bottom for spacing
        >
          View Rooms
        </Button>

        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              component="a"
              href="https://github.com/vishalP143/rntMgmt-Vishal"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              size="large"
              startIcon={<GitHubIcon />}
              sx={{ py: 2 }}
            >
              GitHub
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Homepage;

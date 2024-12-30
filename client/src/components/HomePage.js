import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box, Grid } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import SearchIcon from '@mui/icons-material/Search';

const Homepage = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <Typography 
                variant="h2" 
                component="h1" 
                color="primary" 
                gutterBottom
                sx={{ 
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' }, 
                    textAlign: 'center' 
                }}
            >
                Welcome to Rental Management System
            </Typography>

            <Box mt={4}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                        <Button
                            component={Link}
                            to="/room-list"
                            color="primary"
                            variant="contained"
                            sx={{ width: { xs: '100%', sm: 'auto' } }}
                        >
                            View Rooms
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            component={Link}
                            to="/create-room"
                            color="primary"
                            variant="contained"
                            sx={{ width: { xs: '100%', sm: 'auto' } }}
                        >
                            Create Room
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            component={Link}
                            to="/export"
                            color="primary"
                            variant="contained"
                            sx={{ width: { xs: '100%', sm: 'auto' } }}
                        >
                            Export Data
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            color="primary"
                            component="a"
                            href="https://github.com/suman492/rentalMgmtSystem"
                            target="_blank"
                            variant="contained"
                            rel="noopener noreferrer"
                            sx={{ width: { xs: '100%', sm: 'auto' } }}
                        >
                            <GitHubIcon sx={{ mr: 1 }} />
                            GitHub
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            color="primary"
                            component="a"
                            href="https://docs.google.com/document/d/1ncz3J_GCgqLG-kwAHE2CZamT3bMhtr-RuPqBkiPvU2Q/edit?usp=drive_link"
                            target="_blank"
                            variant="contained"
                            rel="noopener noreferrer"
                            sx={{ width: { xs: '100%', sm: 'auto' } }}
                        >
                            Resume
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            component={Link}
                            to="/search"
                            variant="contained"
                            size="large"
                            startIcon={<SearchIcon />}
                            fullWidth
                            sx={{ py: 2 }}
                        >
                            Search Rooms
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Homepage;

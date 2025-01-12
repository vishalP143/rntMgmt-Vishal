import React, { Suspense } from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';

// Lazy load icons to improve performance
const GitHubIcon = React.lazy(() => import('@mui/icons-material/GitHub'));
const LinkedInIcon = React.lazy(() => import('@mui/icons-material/LinkedIn'));
const MailOutlineIcon = React.lazy(() => import('@mui/icons-material/MailOutline'));

const Footer = React.memo(() => (
    <Box
        component="footer"
        sx={{
            py: 4,
            background: 'linear-gradient(45deg, #1e88e5, #0d47a1)',
            color: 'white',
        }}
    >
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={4} textAlign="center">
                <Typography variant="h6" gutterBottom>
                    Rental Management System
                </Typography>
                <Typography variant="body2">© {new Date().getFullYear()} Vishal Pradhan</Typography>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
                <Typography variant="subtitle1">Simplifying Rentals</Typography>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
                <Suspense fallback={<span>Loading...</span>}>
                    <IconButton
                        aria-label="GitHub Profile"
                        href="https://github.com/vishalP143"
                        target="_blank"
                        color="inherit"
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        aria-label="LinkedIn Profile"
                        href="https://www.linkedin.com/in/vishal-pradhan-65901b327/"
                        target="_blank"
                        color="inherit"
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton
                        aria-label="Send an Email"
                        href="mailto:vishal.p8070@gmail.com"
                        color="inherit"
                    >
                        <MailOutlineIcon />
                    </IconButton>
                </Suspense>
            </Grid>
        </Grid>
    </Box>
));

export default Footer;

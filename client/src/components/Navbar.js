import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ width: '100%' }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: 'primary.main' }}
        >
          Rental Management System
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Home Button */}
          <Button
            color="primary"
            component={RouterLink}
            to="/"
            startIcon={<HomeIcon />}
          >
            Home
          </Button>

          {/* About Us Button */}
          <Button
            color="primary"
            component={RouterLink}
            to="/about-us"
            startIcon={<InfoIcon />}
          >
            About Us
          </Button>

          {/* Show All Rooms Button */}
          <Button
            color="primary"
            component={RouterLink}
            to="/show-rooms"
            startIcon={<ViewListIcon />}
          >
            Show All Rooms
          </Button>

          {/* Create Room Button */}
          <Button
            color="primary"
            component={RouterLink}
            to="/create-room"
            startIcon={<AddCircleIcon />}
          >
            Create Room
          </Button>

          {/* GitHub Icon Button */}
          <IconButton
            color="primary"
            component="a"
            href="https://github.com/vishalP143/rntMgmt-Vishal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

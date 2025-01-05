import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  Slide,
  useScrollTrigger,
  Divider,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'; // Distinct icon for rooms
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'; // Distinct icon for tenants

const roomPages = [
  { title: 'View Rooms', path: '/room-list' },
  { title: 'Create Room', path: '/create-room' },
  { title: 'Search Rooms', path: '/search' },
];

const tenantPages = [
  { title: 'View Tenants', path: '/tenant-list' },
  { title: 'Create Tenant', path: '/create-tenant' },
];

const Navbar = () => {
  const [roomAnchorEl, setRoomAnchorEl] = useState(null);
  const [tenantAnchorEl, setTenantAnchorEl] = useState(null);

  const trigger = useScrollTrigger();

  const handleRoomClick = (event) => {
    setRoomAnchorEl(event.currentTarget);
  };

  const handleTenantClick = (event) => {
    setTenantAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setRoomAnchorEl(null);
    setTenantAnchorEl(null);
  };

  return (
    <Slide in={!trigger} direction="down">
      <AppBar position="static" color="default" elevation={2}>
        <Toolbar sx={{ bgcolor: 'primary.main', color: 'white' }}>
          <Typography 
            variant="h5" 
            sx={{ flexGrow: 1, fontWeight: 'bold', textDecoration: 'none' }}
            component={RouterLink}
            to="/"
          >
            Rental Management System
          </Typography>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              color="inherit"
              component={RouterLink}
              to="/"
              startIcon={<HomeIcon />}
              sx={{ textTransform: 'none' }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={handleRoomClick}
              startIcon={<MeetingRoomIcon />}
              sx={{ textTransform: 'none' }}
            >
              Rooms
            </Button>
            <Menu
              anchorEl={roomAnchorEl}
              open={Boolean(roomAnchorEl)}
              onClose={handleClose}
              MenuListProps={{ sx: { bgcolor: 'primary.light' } }}
            >
              {roomPages.map((page) => (
                <MenuItem
                  key={page.path}
                  component={RouterLink}
                  to={page.path}
                  onClick={handleClose}
                  sx={{ '&:hover': { bgcolor: 'primary.dark', color: 'white' } }}
                >
                  {page.title}
                </MenuItem>
              ))}
            </Menu>
            <Button
              color="inherit"
              onClick={handleTenantClick}
              startIcon={<PersonOutlineIcon />}
              sx={{ textTransform: 'none' }}
            >
              Tenants
            </Button>
            <Menu
              anchorEl={tenantAnchorEl}
              open={Boolean(tenantAnchorEl)}
              onClose={handleClose}
              MenuListProps={{ sx: { bgcolor: 'primary.light' } }}
            >
              {tenantPages.map((page) => (
                <MenuItem
                  key={page.path}
                  component={RouterLink}
                  to={page.path}
                  onClick={handleClose}
                  sx={{ '&:hover': { bgcolor: 'primary.dark', color: 'white' } }}
                >
                  {page.title}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
    </Slide>
  );
};

export default Navbar;

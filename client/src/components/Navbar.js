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
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HouseIcon from '@mui/icons-material/House'; // For room-related icon

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
    <AppBar position="static" color="transparent" elevation={0} sx={{ width: '100%' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
          Rental Management System
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button color="primary" component={RouterLink} to="/" startIcon={<HomeIcon />}>
            Home
          </Button>

          <Button color="primary" onClick={handleRoomClick} startIcon={<HouseIcon />}>
            Rooms
          </Button>
          <Menu
            anchorEl={roomAnchorEl}
            open={Boolean(roomAnchorEl)}
            onClose={handleClose}
          >
            {roomPages.map((page) => (
              <MenuItem
                key={page.path}
                component={RouterLink}
                to={page.path}
                onClick={handleClose}
              >
                {page.title}
              </MenuItem>
            ))}
          </Menu>

          <Button color="primary" onClick={handleTenantClick} startIcon={<HouseIcon />}>
            Tenants
          </Button>
          <Menu
            anchorEl={tenantAnchorEl}
            open={Boolean(tenantAnchorEl)}
            onClose={handleClose}
          >
            {tenantPages.map((page) => (
              <MenuItem
                key={page.path}
                component={RouterLink}
                to={page.path}
                onClick={handleClose}
              >
                {page.title}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Tabs, Tab } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [value, setValue] = useState(0);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Tabs value={value} onChange={handleTabChange} textColor="inherit">
          <Tab label="Home" component={Link} to="/" />
          <Tab label="Create Room" component={Link} to="/create-room" />
          <Tab label="Export Data" component={Link} to="/export" />
        </Tabs>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

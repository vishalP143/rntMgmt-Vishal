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
    useScrollTrigger,
    Slide,
    Divider,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Navbar = () => {
    const [roomAnchorEl, setRoomAnchorEl] = useState(null);
    const [tenantAnchorEl, setTenantAnchorEl] = useState(null);

    const trigger = useScrollTrigger();

    const handleRoomClick = (event) => setRoomAnchorEl(event.currentTarget);
    const handleTenantClick = (event) => setTenantAnchorEl(event.currentTarget);
    const handleClose = () => {
        setRoomAnchorEl(null);
        setTenantAnchorEl(null);
    };

    return (
        <Slide in={!trigger} direction="down">
            <AppBar position="sticky" sx={{ bgcolor: 'primary.main' }}>
                <Toolbar>
                    <Typography
                        variant="h5"
                        component={RouterLink}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            textDecoration: 'none',
                            color: 'white',
                            fontWeight: 700,
                        }}
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
                        <Menu anchorEl={roomAnchorEl} open={Boolean(roomAnchorEl)} onClose={handleClose}>
                            {['View Rooms', 'Create Room', 'Search Rooms'].map((room) => (
                                <MenuItem key={room} onClick={handleClose}>
                                    {room}
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
                        <Menu anchorEl={tenantAnchorEl} open={Boolean(tenantAnchorEl)} onClose={handleClose}>
                            {['View Tenants', 'Create Tenant'].map((tenant) => (
                                <MenuItem key={tenant} onClick={handleClose}>
                                    {tenant}
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

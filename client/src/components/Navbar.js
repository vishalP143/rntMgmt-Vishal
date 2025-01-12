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
    IconButton,
    Divider,
    useMediaQuery,
    useTheme,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [roomAnchorEl, setRoomAnchorEl] = useState(null);
    const [tenantAnchorEl, setTenantAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleOpenMenu = (setter) => (event) => setter(event.currentTarget);
    const handleCloseMenu = (setter) => () => setter(null);

    const toggleDrawer = (open) => () => setDrawerOpen(open);

    // Links for room menu options
    const roomLinks = [
        { label: 'View Rooms', to: '/rooms' },
        { label: 'Create Room', to: '/create-room' },
        { label: 'Search Rooms', to: '/search' },
    ];

    // Links for tenant menu options
    const tenantLinks = [
        { label: 'View Tenants', to: '/tenants' },
        { label: 'Create Tenant', to: '/create-tenant' },
    ];

    const renderMenuItems = (items, handleClose) =>
        items.map(({ label, to }) => (
            <MenuItem key={label} component={RouterLink} to={to} onClick={handleClose}>
                {label}
            </MenuItem>
        ));

    const mobileMenu = (
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                    <ListItem button component={RouterLink} to="/">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={handleOpenMenu(setRoomAnchorEl)}>
                        <ListItemIcon>
                            <MeetingRoomIcon />
                        </ListItemIcon>
                        <ListItemText primary="Rooms" />
                    </ListItem>
                    <Menu
                        anchorEl={roomAnchorEl}
                        open={Boolean(roomAnchorEl)}
                        onClose={handleCloseMenu(setRoomAnchorEl)}
                    >
                        {renderMenuItems(roomLinks, handleCloseMenu(setRoomAnchorEl))}
                    </Menu>
                    <ListItem button onClick={handleOpenMenu(setTenantAnchorEl)}>
                        <ListItemIcon>
                            <PersonOutlineIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tenants" />
                    </ListItem>
                    <Menu
                        anchorEl={tenantAnchorEl}
                        open={Boolean(tenantAnchorEl)}
                        onClose={handleCloseMenu(setTenantAnchorEl)}
                    >
                        {renderMenuItems(tenantLinks, handleCloseMenu(setTenantAnchorEl))}
                    </Menu>
                </List>
            </Box>
        </Drawer>
    );

    return (
        <AppBar position="sticky" sx={{ bgcolor: 'primary.main' }}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component={RouterLink}
                    to="/"
                    sx={{
                        flexGrow: 1,
                        textDecoration: 'none',
                        color: 'white',
                        fontWeight: 700,
                    }}
                >
                    Rental Management
                </Typography>
                {isMobile ? (
                    <>
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={toggleDrawer(true)}
                            aria-label="menu"
                            sx={{ ml: 1 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        {mobileMenu}
                    </>
                ) : (
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
                            onClick={handleOpenMenu(setRoomAnchorEl)}
                            startIcon={<MeetingRoomIcon />}
                            sx={{ textTransform: 'none' }}
                        >
                            Rooms
                        </Button>
                        <Menu
                            anchorEl={roomAnchorEl}
                            open={Boolean(roomAnchorEl)}
                            onClose={handleCloseMenu(setRoomAnchorEl)}
                        >
                            {renderMenuItems(roomLinks, handleCloseMenu(setRoomAnchorEl))}
                        </Menu>
                        <Button
                            color="inherit"
                            onClick={handleOpenMenu(setTenantAnchorEl)}
                            startIcon={<PersonOutlineIcon />}
                            sx={{ textTransform: 'none' }}
                        >
                            Tenants
                        </Button>
                        <Menu
                            anchorEl={tenantAnchorEl}
                            open={Boolean(tenantAnchorEl)}
                            onClose={handleCloseMenu(setTenantAnchorEl)}
                        >
                            {renderMenuItems(tenantLinks, handleCloseMenu(setTenantAnchorEl))}
                        </Menu>
                    </Box>
                )}
            </Toolbar>
            <Divider />
        </AppBar>
    );
};

export default Navbar;

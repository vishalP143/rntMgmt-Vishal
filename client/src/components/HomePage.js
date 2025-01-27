import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BackgroundImage from "../assets/bg.webp";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  Divider,
  Slide,
  CircularProgress,
} from "@mui/material";

// Lazy load icons
const GitHubIcon = React.lazy(() => import("@mui/icons-material/GitHub"));
const SearchIcon = React.lazy(() => import("@mui/icons-material/Search"));
const HomeIcon = React.lazy(() => import("@mui/icons-material/Home"));
const AddBusinessIcon = React.lazy(() => import("@mui/icons-material/AddBusiness"));
const BarChartIcon = React.lazy(() => import("@mui/icons-material/BarChart"));
const QrCodeIcon = React.lazy(() => import("@mui/icons-material/QrCode"));

const Homepage = React.memo(() => {
  const [stats, setStats] = useState({
    totalRooms: 0,
    availableRooms: 0,
    rentedRooms: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://rntmgmt-vishal.onrender.com/api/rooms")
      .then((res) => {
        const rooms = res.data;
        const totalRooms = rooms.length;
        const availableRooms = rooms.filter((room) => room.availability).length;
        const rentedRooms = totalRooms - availableRooms;

        setStats({ totalRooms, availableRooms, rentedRooms });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching room data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)", // Overlay
          zIndex: 0,
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          zIndex: 1,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%", // Take full height
        }}
      >
        {/* Welcome Section */}
        <Box mb={4}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 800,
              textShadow: "0 4px 12px rgba(0,0,0,0.7)",
              fontSize: { xs: "2rem", md: "3rem" }, // Responsive size
            }}
          >
            Welcome to Rental Management System
          </Typography>
          <Typography
            variant="h6"
            sx={{
              textShadow: "0 2px 8px rgba(0,0,0,0.5)",
              color: "#f1f1f1",
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Efficiently manage your rentals with ease
          </Typography>
        </Box>

        {/* Stats Section */}
        <Grid container spacing={3} justifyContent="center" mb={4}>
          {[
            { icon: <BarChartIcon />, value: stats.totalRooms, label: "Total Rooms" },
            { icon: <HomeIcon />, value: stats.availableRooms, label: "Available Rooms" },
            { icon: <AddBusinessIcon />, value: stats.rentedRooms, label: "Rented Rooms" },
          ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Slide direction="up" in={true} timeout={600 + index * 200}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                    color: "white",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                    textAlign: "center",
                  }}
                >
                  <CardContent>
                    <Box sx={{ fontSize: 48 }}>{stat.icon}</Box>
                    <Typography variant="h4">{stat.value}</Typography>
                    <Typography variant="subtitle1">{stat.label}</Typography>
                  </CardContent>
                </Card>
              </Slide>
            </Grid>
          ))}
        </Grid>

        {/* Action Section */}
        <Grid container spacing={3} justifyContent="center">
          {[
            { to: "/rooms", label: "View Rooms", icon: <HomeIcon /> },
            { to: "/create-room", label: "Create Room", icon: <AddBusinessIcon /> },
            { to: "/export", label: "Export Data", icon: <BarChartIcon /> },
            { href: "https://github.com/vishalP143/rntMgmt-Vishal", label: "GitHub", icon: <GitHubIcon /> },
            { to: "/search", label: "Search Rooms", icon: <SearchIcon /> },
            { to: "/qrcodes", label: "QR Codes", icon: <QrCodeIcon /> },
          ].map((action, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Button
                component={action.href ? "a" : Link}
                to={action.to}
                href={action.href}
                variant="contained"
                size="large"
                startIcon={action.icon}
                fullWidth
                sx={{
                  py: 2,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  backgroundColor: "#212121",
                  color: "white",
                  "&:hover": { backgroundColor: "#424242" },
                }}
                aria-label={action.label}
              >
                {action.label}
              </Button>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.5)" }} />
      </Container>
    </Box>
  );
});

export default Homepage;

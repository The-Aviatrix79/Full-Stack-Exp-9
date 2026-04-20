import React from "react";
import axios from "axios";
import { Card, CardContent, Typography, Button, Box, Divider, AppBar, Toolbar } from "@mui/material";

function UserDashboard() {
  const role = sessionStorage.getItem("role");

  if (!role) {
      window.location.href = "/";
      return null;
  }

  const fetchData = async () => {
    try {
      // Mocking the call / expecting backend to be running
      const res = await axios.get("http://localhost:8080/api/user/profile");
      alert(res.data.message || "User profile data fetch success");
    } catch (err) {
      alert("Failed to fetch user data: " + err.message);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="bg-light min-vh-100">
      <AppBar position="static" color="primary" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 300 }}>
            User Portal
          </Typography>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
      
      <div className="container mt-5">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 300, color: "text.primary" }}>
          Dashboard Overview
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Card sx={{ maxWidth: 600, mt: 4, p: 2, boxShadow: 2, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Profile Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, mt: 2 }}>
              Welcome back, <strong>{sessionStorage.getItem("user")}</strong>! You are currently logged in with the <strong>USER</strong> role.
            </Typography>
            <Box display="flex" gap={2}>
              <Button variant="outlined" color="primary" onClick={fetchData}>
                Fetch Profile Data
              </Button>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default UserDashboard;

import React from "react";
import axios from "axios";
import { Card, CardContent, Typography, Button, Box, Divider, AppBar, Toolbar } from "@mui/material";

function AdminDashboard() {
  const role = sessionStorage.getItem("role");

  if (role !== "ADMIN") {
    alert("Access Denied. Admins Only.");
    window.location.href = "/";
    return null;
  }

  const fetchAdmin = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/admin/dashboard");
      alert(res.data.message || "Admin dashboard data fetch success");
    } catch(err) {
      alert("Failed to fetch admin data: " + err.message);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="bg-light min-vh-100">
      <AppBar position="static" color="default" sx={{ bgcolor: "white" }} elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "error.main", fontWeight: "bold" }}>
            Admin Portal
          </Typography>
          <Button color="error" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>

      <div className="container mt-5">
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 300 }}>
          Admin Dashboard
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Card sx={{ maxWidth: 600, mt: 4, p: 2, boxShadow: 2, borderRadius: 2, borderTop: "4px solid #d32f2f" }}>
          <CardContent>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              Management Controls
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
              Welcome, <strong>{sessionStorage.getItem("user")}</strong>. You have full <strong>ADMIN</strong> privileges to manage resources.
            </Typography>
            <Box display="flex" gap={2}>
              <Button variant="contained" color="error" onClick={fetchAdmin}>
                Fetch Admin Data
              </Button>
              <Button variant="outlined" color="primary" onClick={() => alert("Simulated action")}>
                Manage Users
              </Button>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AdminDashboard;

import React, { useState } from "react";
import axios from "axios";
import { Card, CardContent, Button, TextField, Typography, Box } from "@mui/material";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      // For demonstration, simulating successful authentication
      // If you have a real backend, uncomment the axios call below:
      /*
      const res = await axios.get("http://localhost:8080/api/user/profile", {
        auth: { username, password }
      });
      if (res.status !== 200) throw new Error("Failed");
      */

      if (!username || !password) {
        alert("Please enter a username and password.");
        return;
      }

      sessionStorage.setItem("user", username);
      sessionStorage.setItem("role", username.includes("admin") ? "ADMIN" : "USER");

      if (username.includes("admin")) {
        window.location.href = "/admin";
      } else {
        window.location.href = "/user";
      }
    } catch (err) {
      alert("Invalid credentials or Unauthorized");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Card sx={{ minWidth: 400, padding: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 300, mb: 4 }}>
            Login
          </Typography>
          <Box display="flex" flexDirection="column" gap={3}>
            <TextField 
              label="Username" 
              variant="outlined" 
              fullWidth 
              onChange={(e) => setUsername(e.target.value)} 
            />
            <TextField 
              label="Password" 
              type="password" 
              variant="outlined" 
              fullWidth 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              onClick={login}
              sx={{ mt: 2, py: 1.5 }}
            >
              Sign In
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;

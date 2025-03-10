import React, { useState } from "react";
import { TextField, Button, Typography, Box, CircularProgress, Alert } from "@mui/material";
import { useAccount } from "../lib/hooks/useAccount";

const LoginForm = () => {
  const { login, logout, user, error, loading } = useAccount();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    
      <Box sx={{ mt: 8, p: 3, boxShadow: 3, borderRadius: 2, bgcolor: "white" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>

      {user ? (
        <Box sx={{ mt: 2 }}>
        <Alert severity="success">Welcome, {user.name}!</Alert>
        <Button
              onClick={()=> logout()}
              variant="contained"
              color="secondary"
              sx={{ mt: 2, alignItems: "flex-end" }}
            >
              Logout
            </Button>
        </Box>
        ) : (
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <Alert severity="error">{error}</Alert>}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Login"}
            </Button>
          </form>
        )}
      </Box>
  );
};

export default LoginForm;

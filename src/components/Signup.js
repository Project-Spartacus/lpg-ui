// components/Signup.js
import React from 'react';
import { Container, Typography, TextField, Button, Link } from '@mui/material';

const Signup = () => {
  return (
    <Container component="main" maxWidth="xs" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '250px' }}>
      <div>
        <Typography variant="h5">Sign Up</Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
        <br></br>
        <Link href="/login" variant="body1">
          {"Already have an account? Sign In"}
        </Link>
      </div>
    </Container>
  );
};

export default Signup;

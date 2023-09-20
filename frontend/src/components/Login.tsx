import React, { useState } from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import { setToken } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Access the navigate function

  const handleLogin = async () => {
    try {
      if (identifier && password) {
        const response = await Axios.post('http://localhost:3000/api/v1/auth/login', {
          identifier,
          password,
        });

        // Assuming the response contains a token field
        const token = response.data.token;

        // Store the token in Redux
        dispatch(setToken(token));

        // Set isLoggedIn to true to trigger the redirect
        setIsLoggedIn(true);
        navigate('/managers'); // Navigate to the "Managers" page
      } else {
        setError('Please enter your username or email and password.');
      }
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error and set an error message
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Container maxWidth="xs" style={{backgroundColor:"#075b51", marginTop: "2%", padding: "2%", borderRadius:"5px", color: "white"}}>
      <Typography variant="h6" gutterBottom>
        Login
      </Typography>
      {error && <Typography variant="body2" color="error">{error}</Typography>}
      <form>
        <TextField
          label="Username or Email"
          fullWidth
          margin="dense"
          variant="outlined"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
        />
        <TextField
          label="Password"
          fullWidth
          margin="dense"
          variant="outlined"
          style={{color: "white"}}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="success"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
      </form>
    </Container>
  );
};

export default Login;

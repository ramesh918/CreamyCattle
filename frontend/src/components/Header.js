// src/Header.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setToken } from '../store/authSlice';
import './Header.css';


import LogoutConfirmationModal from './LogoutConfirmationModal';


const Header= () => {
  const dispatch = useDispatch();
  const [logoutConfirmationOpen, setLogoutConfirmationOpen] = useState(false);


  const handleLogout = () => {
    setLogoutConfirmationOpen(true);
  };


  const handleConfirmLogout = () => {
    dispatch(setToken(null));
    setLogoutConfirmationOpen(false);
  };


  const handleCloseLogoutModal = () => {
    setLogoutConfirmationOpen(false);
  };


  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: '#075b51' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Creamy Cattle
          </Typography>
          <Button color="inherit">
            <NavLink to="/managers" className="nav-link" activeClassName="active-link">
              Managers
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/sheds" className="nav-link" activeClassName="active-link">
              Sheds
            </NavLink>
          </Button>
          <Button onClick={handleLogout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <LogoutConfirmationModal
        open={logoutConfirmationOpen}
        onClose={handleCloseLogoutModal}
        onConfirm={handleConfirmLogout}
      />
    </div>
  );
};


export default Header;




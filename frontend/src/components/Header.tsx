// src/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" style={{backgroundColor: "#075b51"}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Creamy Cattle
        </Typography>
        <Button component={Link} to="/managers" color="inherit">
          Managers {/* Update Managers link */}
        </Button>
        <Button component={Link} to="/sheds" color="inherit">
          Sheds {/* Update Sheds link */}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

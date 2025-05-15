import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className="bg-black bg-opacity-50">
      <Container maxWidth="lg">
        <Toolbar className="justify-between py-2">
          <Link to="/" className="text-2xl md:text-3xl font-bold text-white no-underline hover:text-gray-300 transition-colors">
            Gurupata Hendewa
          </Link>
          
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
                className="text-white hover:text-gray-300"
              >
                <MenuIcon className="text-2xl" />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className="mt-12"
                PaperProps={{
                  className: "bg-black bg-opacity-90 backdrop-blur-sm"
                }}
              >
                <MenuItem 
                  component={Link} 
                  to="/" 
                  onClick={handleClose}
                  className="text-white hover:bg-gray-800 text-lg py-3"
                >
                  Home
                </MenuItem>
                <MenuItem 
                  component={Link} 
                  to="/about" 
                  onClick={handleClose}
                  className="text-white hover:bg-gray-800 text-lg py-3"
                >
                  About Us
                </MenuItem>
                <MenuItem 
                  component={Link} 
                  to="/contact" 
                  onClick={handleClose}
                  className="text-white hover:bg-gray-800 text-lg py-3"
                >
                  Contact
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div className="space-x-4">
              <Button 
                color="inherit" 
                component={Link} 
                to="/"
                className="text-lg hover:text-gray-300"
              >
                Home
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/about"
                className="text-lg hover:text-gray-300"
              >
                About Us
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/contact"
                className="text-lg hover:text-gray-300"
              >
                Contact
              </Button>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 
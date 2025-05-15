import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, IconButton, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About Us', path: '/about' },
    { text: 'Contact', path: '/contact' }
  ];

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
                onClick={handleDrawerToggle}
                className="text-white hover:text-gray-300"
              >
                <MenuIcon className="text-2xl" />
              </IconButton>
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                  sx: {
                    width: '75%',
                    backgroundColor: 'white',
                    boxShadow: '0 0 20px rgba(0,0,0,0.3)'
                  }
                }}
                SlideProps={{
                  timeout: 300
                }}
              >
                <List className="pt-16">
                  {menuItems.map((item) => (
                    <ListItem
                      key={item.text}
                      component={Link}
                      to={item.path}
                      onClick={handleDrawerToggle}
                      className="text-black hover:bg-gray-100 transition-colors"
                      sx={{
                        '&:hover': {
                          backgroundColor: 'rgba(0,0,0,0.05)'
                        }
                      }}
                    >
                      <ListItemText 
                        primary={item.text} 
                        primaryTypographyProps={{
                          className: 'text-xl font-medium'
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
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
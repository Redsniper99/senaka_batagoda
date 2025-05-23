import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, IconButton, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

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
    <AppBar 
      position="fixed" 
      className="bg-black bg-opacity-50 backdrop-blur-sm"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Container maxWidth="lg">
        <Toolbar className="justify-between py-2">
          <Link to="/" className="text-2xl md:text-4xl font-bold text-white no-underline hover:text-gray-300 transition-colors font-['Poppins']">
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
                <MenuIcon className="text-xl" />
              </IconButton>
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                  sx: {
                    width: '75%',
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                    borderLeft: '1px solid rgba(255,255,255,0.1)'
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
                      className="text-white hover:bg-white hover:bg-opacity-10 transition-all duration-300"
                      sx={{
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          transform: 'translateX(-5px)'
                        }
                      }}
                    >
                      <ListItemText 
                        primary={item.text} 
                        primaryTypographyProps={{
                          className: 'text-base font-medium text-white font-["Poppins"]'
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
                className="text-sm hover:text-gray-300 font-['Poppins']"
              >
                Home
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/about"
                className="text-sm hover:text-gray-300 font-['Poppins']"
              >
                About Us
              </Button>
              <Button 
                color="inherit" 
                component={Link} 
                to="/contact"
                className="text-sm hover:text-gray-300 font-['Poppins']"
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
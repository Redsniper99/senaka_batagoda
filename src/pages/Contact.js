import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography, Paper, TextField, Button } from '@mui/material';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Gurupata Hendewa</title>
        <meta name="description" content="Get in touch with the Gurupata Hendewa team." />
      </Helmet>

      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/bg.jpg)' }}>
        <div className="overlay"></div>

        <Container maxWidth="md" className="relative z-10 py-8 sm:py-16 px-4">
          <Paper className="p-4 sm:p-8 bg-black bg-opacity-50 backdrop-blur-sm">
            <Typography variant="h3" component="h1" className="text-center mb-6 sm:mb-8 text-white text-2xl sm:text-3xl md:text-4xl">
              Contact Us
            </Typography>
            <form className="space-y-4 sm:space-y-6">
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                size="small"
                className="bg-white bg-opacity-10"
                InputProps={{
                  className: "text-white text-sm sm:text-base"
                }}
                InputLabelProps={{
                  className: "text-gray-300 text-sm sm:text-base"
                }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                size="small"
                className="bg-white bg-opacity-10"
                InputProps={{
                  className: "text-white text-sm sm:text-base"
                }}
                InputLabelProps={{
                  className: "text-gray-300 text-sm sm:text-base"
                }}
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                size="small"
                className="bg-white bg-opacity-10"
                InputProps={{
                  className: "text-white text-sm sm:text-base"
                }}
                InputLabelProps={{
                  className: "text-gray-300 text-sm sm:text-base"
                }}
              />
              <Button
                variant="contained"
                size="large"
                fullWidth
                className="bg-red-600 hover:bg-red-700 text-white py-2 sm:py-3 text-sm sm:text-base"
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    </>
  );
}

export default Contact; 
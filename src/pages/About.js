import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography, Paper } from '@mui/material';

function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Gurupata Hendewa</title>
        <meta name="description" content="Learn more about Gurupata Hendewa and our mission." />
      </Helmet>

      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/bg.jpg)' }}>
        <div className="overlay"></div>

        <Container maxWidth="lg" className="relative z-10 py-8 sm:py-16 px-4">
          <Paper className="p-4 sm:p-8 bg-black bg-opacity-50 backdrop-blur-sm">
            <Typography variant="h3" component="h1" className="text-center mb-6 sm:mb-8 text-white text-2xl sm:text-3xl md:text-4xl">
              About Gurupata Hendewa
            </Typography>
            <Typography variant="body1" className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">
              Welcome to Gurupata Hendewa, where we bring together the best of entertainment and cultural experiences. Our event is designed to create unforgettable memories and bring people together in celebration.
            </Typography>
            <Typography variant="body1" className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">
              With a rich history and a commitment to excellence, we strive to deliver an event that exceeds expectations and creates lasting impressions. Our team works tirelessly to ensure every detail is perfect, from the entertainment to the atmosphere.
            </Typography>
            <Typography variant="body1" className="text-gray-200 text-sm sm:text-base">
              Join us for this extraordinary celebration and be part of something truly special. We look forward to welcoming you to Gurupata Hendewa.
            </Typography>
          </Paper>
        </Container>
      </div>
    </>
  );
}

export default About; 
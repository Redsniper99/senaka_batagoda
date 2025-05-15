import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Container } from '@mui/material';
import CountdownTimer from '../components/CountdownTimer';

function Home() {
  return (
    <>
      <Helmet>
        <title>Gurupata Hendewa - Coming Soon</title>
        <meta name="description" content="Join us for the upcoming Gurupata Hendewa event. Book your tickets now!" />
        <meta name="keywords" content="Gurupata Hendewa, event, countdown, tickets" />
      </Helmet>

      <div className="relative min-h-screen background-image" style={{ backgroundImage: 'url(/images/bg.jpg)' }}>
        <div className="overlay"></div>

        <Container maxWidth="lg" className="relative z-10 px-4 pt-20">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-6 text-white px-2 sm:px-4">
              Gurupata Hendewa
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-10 text-gray-200 px-2 sm:px-4 max-w-2xl mx-auto">
              Join us for an unforgettable experience
            </p>
            
            <div className="w-full max-w-3xl px-2 sm:px-4">
              <CountdownTimer targetDate="2025-10-04T00:00:00" />
            </div>
            
            <Button
              variant="contained"
              size="large"
              className="mt-6 sm:mt-10 bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg rounded-full"
              onClick={() => window.location.href = '#book-now'}
            >
              Book Now
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home; 
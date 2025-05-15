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

      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/bg.jpg)' }}>
        <div className="overlay"></div>

        <Container maxWidth="lg" className="relative z-10 px-4">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-8 text-white px-4">
              Gurupata Hendewa
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-200 px-4">
              Join us for an unforgettable experience
            </p>
            
            <div className="w-full max-w-3xl">
              <CountdownTimer targetDate="2025-10-04T00:00:00" />
            </div>
            
            <Button
              variant="contained"
              size="large"
              className="mt-8 sm:mt-12 bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg"
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
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button, Container } from '@mui/material';
import CountdownTimer from '../components/CountdownTimer';

function Home() {
  return (
    <>
      <Helmet>
        <title>Metafuse - Coming Soon</title>
        <meta 
          name="description" 
          content="Metafuse is your trusted IT service partner. Our website is launching soon with innovative solutions for businesses and individuals." 
        />
        <meta 
          name="keywords" 
          content="Metafuse, IT services, software solutions, technology startup, coming soon" 
        />
      </Helmet>

      <div className="relative min-h-screen">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>

        <Container 
          maxWidth="lg" 
          className="relative z-10 min-h-screen flex items-center justify-center py-8 sm:py-16 px-4"
        >
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-6 text-white px-2 sm:px-4">
              Metafuse
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-10 text-gray-200 px-2 sm:px-4 max-w-2xl mx-auto">
              Empowering businesses with cutting-edge IT solutions
            </p>
            
            <div className="w-full max-w-3xl px-2 sm:px-4">
              <CountdownTimer targetDate="2025-12-01T00:00:00" />
            </div>
            
            <Button
              variant="contained"
              size="large"
              className="mt-6 sm:mt-10 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg rounded-full"
              onClick={() => window.location.href = '#contact'}
            >
              Notify Me
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;

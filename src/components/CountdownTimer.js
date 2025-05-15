import React, { useState, useEffect } from 'react';
import { Paper } from '@mui/material';

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeCard = ({ value, label }) => (
    <div className="flex flex-col items-center mx-1 sm:mx-2">
      <Paper
        elevation={3}
        className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 flex items-center justify-center bg-black bg-opacity-50 border border-white border-opacity-20"
      >
        <span className="text-2xl sm:text-4xl md:text-6xl font-bold text-white animate-pulse">
          {value.toString().padStart(2, '0')}
        </span>
      </Paper>
      <span className="mt-2 text-sm sm:text-lg text-gray-300">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-2">
      <TimeCard value={timeLeft.days} label="Days" />
      <TimeCard value={timeLeft.hours} label="Hours" />
      <TimeCard value={timeLeft.minutes} label="Minutes" />
      <TimeCard value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}

export default CountdownTimer; 
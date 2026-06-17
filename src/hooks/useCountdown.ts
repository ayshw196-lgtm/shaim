import { useState, useEffect } from 'react';

interface CountdownData {
  hours: number;
  minutes: number;
  seconds: number;
  isCompleted: boolean;
  timeRemaining: number;
}

export const useCountdown = (targetDate: string | Date): CountdownData => {
  const [data, setData] = useState<CountdownData>({
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
    timeRemaining: 0,
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setData({
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true,
          timeRemaining: 0,
        });
        return;
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setData({
        hours,
        minutes,
        seconds,
        isCompleted: false,
        timeRemaining: difference,
      });
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return data;
};

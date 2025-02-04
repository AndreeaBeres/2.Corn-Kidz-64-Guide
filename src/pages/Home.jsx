import React, { useEffect, useState } from 'react';
import '../Home.css';
import Header from '../components/Header';
import MainContent from '../components/MainContent';

const Home = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const date = now.toLocaleDateString();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const timeString = 
        date + ' ' +
        (hours < 10 ? '0' : '') + hours + ':' +
        (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
      setTime(timeString);
    };

    const intervalId = setInterval(updateClock, 1000);
    updateClock();

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ 
      /* backgroundImage: 'url(/images/backgrounds/mainbackground.png)', */
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat-y',
      backgroundColor: '#f4f4f4'
    }}>
      <Header time={time} />
      <MainContent />
    </div>
  );
};

export default Home;
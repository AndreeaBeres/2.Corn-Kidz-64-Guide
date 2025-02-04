import React, { useEffect, useState } from 'react';
import '../Clothes.css';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ClothesContent from '../components/ClothesContent';

const Clothes = () => {
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
    <div>
      <Header time={time} />
      <main className="main-content">
        <Sidebar />
        <ClothesContent />
      </main>
    </div>
  );
};

export default Clothes;
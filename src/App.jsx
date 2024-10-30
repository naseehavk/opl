import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [scrollY, setScrollY] = useState(0);

  const text = "5 to 6 hours. That’s the average time you’ll spend on your phone today — often without realizing. It’s time to fight back.";
  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <h1 className="text">
        {words.map((word, index) => (
          <span
            key={index}
            className="word"
            style={{
              color: scrollY / 10 > index ? '#ffffff' : '#888888',
              transition: 'color 0.3s ease'
            }}
          >
            {word} 
          </span>
        ))}
      </h1>
    </div>
  );
}

export default App;


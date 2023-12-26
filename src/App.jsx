import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setIsHeaderVisible(!isScrollingUp); // Change visibility based on scrolling direction

      prevScrollPos = currentScrollPos;
    };

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsScreenSmall(true);
      } else {
        setIsScreenSmall(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize(); // Call the initial resize handler

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isScreenSmall) {
    return null; // Don't render the component on small screens
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full px-10 py-4 flex justify-between items-center z-50 text-white ${
          isHeaderVisible ? 'bg-black bg-opacity-80 animate-fade-in' : 'hidden'
        }`}
        style={{
          height: '80px', // Set a fixed height for the header
          transition: 'height 0.3s', // Add a smooth height transition
        }}
      >
        <h1 className={`text-2xl font-bold`}>My Profile</h1>
        <nav className={`hidden md:flex items-center space-x-6`}>
          <a href="#home" className="nav-link transition duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-300">HOME</a>
          <a href="#about" className="nav-link transition duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-300">ABOUT</a>
          <a href="#skills" className="nav-link transition duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-300">SKILLS</a>
          <a href="#Experiences" className="nav-link transition duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-300">EXPERIENCES</a>
          <a href="#portfolio" className="nav-link transition duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-300">PORTFOLIO</a>
          <a href="#faq" className="nav-link transition duration-300 ease-in-out transform hover:scale-110 hover:text-yellow-300">FAQ</a>
        </nav>
      </header>
    </>
  );
}

export default App;

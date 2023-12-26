import React, { useState, useEffect } from 'react';
import homeImage from '/src/assets/home.jpg';

function Home() {
  const [text, setText] = useState('');
  const phrases = ['Web Developer', 'Backend Developer', 'Python App'];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [phrases.length]);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const textInterval = setInterval(() => {
      setText((prevText) =>
        prevText === currentPhrase
          ? currentPhrase
          : currentPhrase.substring(0, prevText.length + 100)
      );
    }, 100);

    return () => clearInterval(textInterval);
  }, [phraseIndex, phrases]);

  return (
    <>
     <section className="min-h-screen flex flex-col items-center justify-center bg-cover relative" style={{ backgroundImage: `url('${homeImage}')` }}>
        <div className="absolute inset-0 opacity-50" id="home"></div>
        <div className="container mx-auto px-4 py-8 lg:py-16 relative z-10 text-center text-white">
          <style>
            {`
              @media (max-width: 768px) {
                .custom-font-size1{
                  font-size: 3em;
                }
                .custom-font-size2 {
                  font-size: 1.9em;
                }
                .custom-font-size3 {
                  font-size: 1.9em;
                }
              }
            `}
          </style>
          <div className="lg:w-3/4 mx-auto">
            <h3 className="text-white font-normal mb-3 text-xl lg:text-2xl custom-font-size2">Hello, I am</h3>
            <h1 className="text-6xl lg:text-8xl font-bold mb-4 custom-font-size1">
              Arinda Abraar
            </h1>
            <h1 className="text-3xl lg:text-4xl custom-font-size3">{text}</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

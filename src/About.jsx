import React from 'react';
import { useSpring, animated } from 'react-spring';


function About() {


  const textAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  return (
    <animated.section style={textAnimation} className="min-h-screen flex flex-col items-center justify-center text-black relative bg-gray-100" id="about" >
      <div className="container mx-auto px-4 py-8 lg:py-16 text-center lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 lg:pr-4">
        <style>
            {`
             @media (max-width: 768px) {
              .container {
                padding: 1rem;
              }
              .profile{
                width: 100%;
                max-width: 200px; /* Adjust the max-width as needed */
                height: auto;
                margin: 0 auto;
              }
              .about{
                text-align: justify; 
              }
              .button1{
                align-items: center;
              }
            `}
          </style>
          <div className="mb-0">
            <img src='./src/assets/profile.jpg' alt="Profile" className="rounded-full w-58 h-96 mx-auto shadow-lg profile" />
          </div>
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-8 text-blue-500">About Me</h2>
          <div className="text-lg mb-8 text-gray-600 about">
            <p>
              Hello! I'm Arinda Abraar,
            </p>
          </div>
          <div className="text-lg mb-8 text-gray-600 about">
            <p className="mt-4">
            I am Arinda Abraar, a student at Gunadarma University. I have valuable experience as a participant
in the Gemastik 2023 competition, where I learned to overcome challenges and work in a team.
In addition, my deep interest in web development has helped me develop skills in both front-end
and back-end fields. I have created various web projects that combine creativity and technical
expertise.I am Arinda Abraar, a student at Gunadarma University. I have valuable experience as a participant
in the Gemastik 2023 competition, where I learned to overcome challenges and work in a team.
In addition, my deep interest in web development has helped me develop skills in both front-end
and back-end fields. I have created various web projects that combine creativity and technical
expertise.
            </p>
            <p className="mt-4">
            </p>
          </div>
          <div className="flex mt-8">
            <a href='https://github.com/ARDevM' target='_blank'><button className="btn btn-portfolio bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 transform transition-transform hover:scale-105 hover:shadow-lg button1">Explore Portfolio</button></a>
            <a href='./src/assets/CV/CV.pdf' target='_blank'><button className="btn btn-cv bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transform transition-transform hover:scale-105 hover:shadow-lg button1">View CV</button></a>
          </div>
        </div>
      </div>
    </animated.section>
  );
}

export default About;

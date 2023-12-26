import React, { useState, useEffect } from 'react';
import './index.css';
import backgroundImage from './assets/home.jpg';

const skillsData = [
  { skill: 'HTML', percentage: 80 },
  { skill: 'CSS', percentage: 70 },
  { skill: 'JavaScript', percentage: 40 },
  { skill: 'React', percentage: 40 },
  { skill: 'Express', percentage: 20 },
  { skill: 'Node JS', percentage: 40 },
  { skill: 'Tailwind', percentage: 65 },
  { skill: 'C++', percentage: 60 },
];

function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center ${
        isVisible ? 'animate__animated animate__fadeIn' : ''
      }`}
      id="skills"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Skills Section</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-transparent p-6 rounded-lg transform hover:scale-105 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-bold mb-2 text-white">{skill.skill}</h3>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      {`${skill.percentage}%`}
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div
                    style={{ width: `${skill.percentage}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

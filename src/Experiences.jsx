import React, { useState } from 'react';

const experiencesData = [
  {
    title: 'Gemastik 2023',
    company: 'Participant of Gemastik 2023 ',
    description: 'Responsible for working together with the team and Responsible for solving problems and challenges from the C++ program',
    certificateImages: [
      './src/assets/certificate/contest/Gemastik.png',
    ],
  },
  {
    title: 'web programmer quiz',
    company: 'Sololearn',
    description: 'hone basic material skills from the program',
    certificateImages: [
      './src/assets/certificate/quis/html.jpg',
      './src/assets/certificate/quis/java.jpg',
    ],
  },
  {
    title: 'Programmer school',
    company: 'Pintaar',
    description: "understand the basics of programming and also learn how to create programs",
    certificateImages: [
      './src/assets/certificate/studi/2.jpg',
      './src/assets/certificate/studi/3.jpg',
    ],
  },
];

function Experiences() {
  const [lightboxImages, setLightboxImages] = useState([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [experienceDescription, setExperienceDescription] = useState(null);

  const toggleLightbox = (images, description) => {
    setLightboxImages(images);
    setExperienceDescription(description);
    setIsLightboxOpen(!isLightboxOpen);
  };

  return (
    <section className="py-4 items-center justify-center" id="experiences" >
      <div className="px-6 mt-10 py-12 max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Experiences Section</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiencesData.map((experience, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-lg cursor-pointer transition transform hover:scale-105 relative"
              onClick={() => toggleLightbox(experience.certificateImages, experience.description)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                  <p className="text-gray-700 mb-2">{experience.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isLightboxOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-75"></div>
          <div className="relative z-10 bg-white p-4 max-w-3xl rounded-lg">
            {experienceDescription && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{experienceDescription}</p>
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {lightboxImages.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Certificate ${index + 1}`} className="max-w-full cursor-pointer" />
                </div>
              ))}
            </div>
            <button
              onClick={() => toggleLightbox([], null)}
              className="absolute top-0 right-0 m-4 p-2 text-gray-600 cursor-pointer hover:text-gray-900 transition-transform transform hover:rotate-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
export default Experiences;


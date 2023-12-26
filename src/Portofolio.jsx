import React, { useState } from 'react';
import homeImage from '/src/assets/home.jpg';
import './index.css';


const ProjectImages = {
  python: [
    './src/assets/python/1.jpg',
    './src/assets/python/2.jpg',
  ],
  webDeveloper: [
    './src/assets/web/eco.png',
    './src/assets/web/food.png',
    './src/assets/web/space.png',
    './src/assets/web/4.jpg',
  ],
  backendDeveloper: [
    './src/assets/backend/1.jpg',
  ],
};

const Modal = ({ images, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-white opacity-20"></div>
      <div className="bg-white mt-10 p-6 rounded-lg text-center relative" style={{ width: '80%', height: '80%' }}>
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-600 hover:text-gray-900 transition-transform transform hover:rotate-90"
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
        <div className="overflow-auto h-full">
          <div className="grid grid-cols-2 gap-4 p-4">
            {images.map((image, index) => (
              <div key={index} className="w-full h-full">
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-auto rounded-lg" // Atur kelas Tailwind untuk ukuran dan tampilan foto
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



const Portofolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
    setIsModalOpen(false);
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center"id="portfolio"
      style={{ backgroundImage: `url('${homeImage}')` }}
    >
      <div className="w-full max-w-screen-xl mx-auto mt-20" >
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Portfolio Section</h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => handleCategoryClick('python')}
          >
            <h3 className="text-2xl font-semibold mb-4">Python</h3>
            <img
              src="./src/assets/py.jpg"
              alt="Python Project"
              className="w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <p className="text-gray-600">Your Python projects and achievements go here.</p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => handleCategoryClick('webDeveloper')}
          >
            <h3 className="text-2xl font-semibold mb-4">Web Developer</h3>
            <img
              src="./src/assets/reactjs.jpg"
              alt="Web Developer Project"
              className="w-32 h-32 mx-auto mb-4"
            />
            <p className="text-gray-600">Your web development projects and achievements go here.</p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => handleCategoryClick('backendDeveloper')}
          >
            <h3 className="text-2xl font-semibold mb-4">Backend Developer</h3>
            <img
              src="./src/assets/database.jpg"
              alt="Backend Developer Project"
              className="w-32 h-32 mx-auto mb-4"
            />
            <p className="text-gray-600">Your backend development projects and achievements go here.</p>
          </div>
        </div>
        <div className="mt-8">
          {isModalOpen && selectedCategory && (
            <Modal images={ProjectImages[selectedCategory]} onClose={handleCloseModal} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Portofolio;

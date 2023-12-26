import { useState } from 'react';
import './index.css';

function Faq() {
  const [faqs] = useState([
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in React.js, Node.js, and various other front-end and back-end technologies.',
    },
    {
      question: 'Can you provide references?',
      answer:
        'Yes, I can provide professional references upon request. Feel free to reach out to me for more details.',
    },
    {
      question: 'What is your approach to project management?',
      answer:
        'I follow Agile methodologies, ensuring continuous communication and collaboration with the team and stakeholders throughout the project.',
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSocialMedia, setActiveSocialMedia] = useState(false);
  const [message, setMessage] = useState('');

  const handleToggle = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const handleSocialMediaToggle = () => {
    setActiveSocialMedia(!activeSocialMedia);
  };

  const handleSendMessage = () => {
    // URL Gmail
    const gmailURL = 'https://mail.google.com/';

    // Buka Gmail dengan alamat email dan pesan yang sudah diisi
    window.open(`${gmailURL}?view=cm&to=arindadeveloper@gmail.com&su=Question&body=${message}`, '_blank');
  };

  return (
    <section className="bg-gray-200 py-16 text-gray-800 custom-margin">
       <style>
            {`
              @media (max-width: 768px) {
                .custom-margin{
                  margin: 2px;
                }
              }
            `}
          </style>
      <div id="faq" className="container mx-auto max-w-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="lg:col-span-1">
            <div className="text-center mb-8 custom-margin">
              <div
                onClick={() => handleToggle(4)}
                className="cursor-pointer bg-white rounded-lg shadow-lg p-4 transition-transform transform duration-300 hover:scale-105"
              >
                <h3 className="text-lg font-semibold">Contact Me</h3>
              </div>
              {activeIndex === 4 && (
                <div className="mt-4 bg-white rounded-lg shadow-lg p-4 text-justify">
                  <p>If you have any questions or suggestions, contact me:</p>
                  <div className="mt-4">
                    <label htmlFor="message" className="block">
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full border rounded-lg py-2 px-3"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                  <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mt-4 hover:bg-blue-700 "
                    onClick={handleSendMessage}
                  >
                    Send
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="text-center mb-4">
              <div
                onClick={handleSocialMediaToggle}
                className="cursor-pointer bg-white rounded-lg shadow-lg p-4 transition-transform transform duration-300 hover:scale-105"
              >
                <h3 className="text-lg font-semibold">Social Media</h3>
              </div>
              {activeSocialMedia && (
                <div className="mt-2 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="https://github.com/ARDevM" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                      <ion-icon name="logo-github"></ion-icon>
                    </a>
                    <a href="https://www.linkedin.com/in/arindaabraardev/" target="_blank" rel="noopener noreferrer">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-200 py-4">
        <div className="text-center">
          <p>&copy; 2023 Arinda Abraar</p>
          <p>Informatics Engineering - Gunadarma University</p>
        </div>
      </div>
    </section>
  );
}

export default Faq;

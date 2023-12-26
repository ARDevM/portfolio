import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Experiences from './Experiences.jsx'
import Portofolio from './Portofolio.jsx'
import Faq from './Faq.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Home />
    <About />
    <Skills />
    <Experiences />
    <Portofolio />
    <Faq />
  </React.StrictMode>,
)

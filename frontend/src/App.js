import React from 'react';
import './index.css'; // Ensure this import is present to apply Tailwind styles
import Index from './pages/Index';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Resume from './pages/Resume';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter basename="/personal-portfolio">
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;

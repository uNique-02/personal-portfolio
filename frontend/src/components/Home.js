import React from 'react';
import profileImage from './hero.jpg'; // Update this path
import { Outlet, Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between px-6">
        <div className="md:w-1/2">
          <h2 className="text-yellow-500 text-lg mb-2">Hello, Welcome</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">I’m Kim Nique</h1>
          <p className="text-gray-400 mb-8">
            Throughout my studies, I have completed numerous software engineering courses
            that demand critical thinking and logical reasoning. I have developed various projects
            using diverse tech stacks, which have equipped me with essential skills such as researching
            documentation and writing tests to ensure desired outcomes. Additionally, I have acquired
            key traits such as time management and organization through collaborations with peers
            and mentors in the field.
          </p>
          <button className="bg-yellow-500 text-gray-900 font-bold py-2 px-6 rounded hover:bg-yellow-600 transition duration-300">
            <Link to="/contact" > Contact us </Link>
          </button>
        </div>

        <div class="relative md:w-1/3 placeholder:mt-10 md:mt-0 group">
            <div class="absolute inset-0 bg-gray-300 transform transition-transform duration-300 hover:rotate-6 z-10"></div>
            <img src={profileImage} alt="Anderson Coper" className="w-full h-full object-cover rounded-3xl relative z-20" />
        </div>



      </div>
    </section>
  );
}

export default HeroSection;

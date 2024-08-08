import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Function to check if the link is active
  const isActive = (path) => currentPath === path;

  return (
    <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-bold">About<span className="text-yellow-500">Me.</span></div>
          <nav className="space-x-6">
            <Link to="/" className={`hover:text-yellow-500 ${isActive('/') ? 'text-yellow-500' : 'text-white'}`} >
                HOME
            </Link>
            <Link to="/about" className={`hover:text-yellow-500 ${isActive('/about') ? 'text-yellow-500' : 'text-white'}`} >
                ABOUT
            </Link>
            <Link to="/services" className={`hover:text-yellow-500 ${isActive('/services') ? 'text-yellow-500' : 'text-white'}`} >
                SERVICE
            </Link>
            <Link to="/portfolio" className={`hover:text-yellow-500 ${isActive('/portfolio') ? 'text-yellow-500' : 'text-white'}`} >
                PORTFOLIO
            </Link>
            <Link to="/resume" className={`hover:text-yellow-500 ${isActive('/resume') ? 'text-yellow-500' : 'text-white'}`} >
                RESUME
            </Link>
            <Link to="/blogs" className={`hover:text-yellow-500 ${isActive('/blogs') ? 'text-yellow-500' : 'text-white'}`} >
                BLOG
            </Link>
            <Link to="/contact" className={`hover:text-yellow-500 ${isActive('/contact') ? 'text-yellow-500' : 'text-white'}`} >
                CONTACT
            </Link>
          </nav>
        </div>
      </header>
  );
}

export default Header;
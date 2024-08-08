import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-bold">About<span className="text-yellow-500">Me.</span></div>
          <nav className="space-x-6">
            <Link to="/" className="hover:text-yellow-500">HOME</Link>
            <Link to="/about" className="hover:text-yellow-500">ABOUT</Link>
            <Link to="/services" className="hover:text-yellow-500">SERVICE</Link>
            <Link to="/portfolio" className="hover:text-yellow-500">PORTFOLIO</Link>
            <Link to="/resume" className="hover:text-yellow-500">RESUME</Link>
            <Link to="/blogs" className="hover:text-yellow-500">BLOG</Link>
            <Link to="/contact" className="hover:text-yellow-500">CONTACT</Link>
          </nav>
        </div>
      </header>
  );
}

export default Header;
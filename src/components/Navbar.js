import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-md text-white shadow-lg px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-500">Ayush</h1>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-pink-500 transition-colors">Home</Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-pink-500 transition-colors">Projects</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-pink-500 transition-colors">Skills</Link>
          <Link to="letsconnect" smooth={true} duration={500} className="cursor-pointer hover:text-pink-500 transition-colors">Connect</Link>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button className="text-3xl text-pink-500">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

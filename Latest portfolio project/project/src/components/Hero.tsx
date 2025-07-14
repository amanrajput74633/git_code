import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              John Doe
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A passionate Full-Stack Developer creating beautiful, functional, and user-centered digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View My Work
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200">
              Download Resume
            </button>
          </div>
          <div className="flex justify-center space-x-6 mb-16">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-gray-500 hover:text-blue-600 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
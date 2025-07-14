import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "#", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">John Doe</h3>
            <p className="text-gray-400">Full-Stack Developer</p>
          </div>

          <div className="flex space-x-6 mb-8 md:mb-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© {currentYear} John Doe. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and lots of coffee.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
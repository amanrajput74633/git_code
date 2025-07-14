import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code with best practices"
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-600" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-2xl"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Crafting Digital Experiences with Passion
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a dedicated full-stack developer with over 5 years of experience in creating 
              web applications that combine beautiful design with robust functionality. My journey 
              in tech started with a curiosity about how things work, and it has evolved into a 
              passion for building solutions that make a difference.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying up-to-date with the latest industry trends.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
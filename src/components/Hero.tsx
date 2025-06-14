
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-blue-600">verto</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Professional Software Engineering Solutions
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            We're Osmar Graça and Ricardo Pilartes, two passionate software engineers 
            dedicated to crafting exceptional digital experiences and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#portfolio"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

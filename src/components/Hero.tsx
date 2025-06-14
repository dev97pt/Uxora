
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 pt-20 px-4 relative overflow-hidden">
      {/* Floating decorative elements - hide on mobile */}
      <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-80 hidden md:block"></div>
      <div className="absolute bottom-40 right-32 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-70 hidden md:block"></div>
      <div className="absolute top-1/2 left-10 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-400 rounded-full opacity-60 hidden md:block"></div>
      
      <div className="container mx-auto px-4 sm:px-6 text-left relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
            Verto is a global
            <br />
            web design and UX
            <br />
            <span className="text-gray-600 font-normal">agency</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start mb-12 sm:mb-20">
            <a
              href="#portfolio"
              className="group bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              View our work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-300 font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-gray-300 hover:border-gray-400 text-center w-full sm:w-auto"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

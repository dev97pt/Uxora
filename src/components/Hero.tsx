
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-[0.9] tracking-tight">
            We create
            <br />
            <span className="text-blue-600">digital experiences</span>
            <br />
            that work
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
            Custom websites, web applications, and mobile apps built by 
            two experienced software engineers who care about quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <a
              href="#portfolio"
              className="group bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              View our work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium"
            >
              Get in touch
            </a>
          </div>
          <div className="text-sm text-gray-500 font-light">
            Osmar Graça & Ricardo Pilartes
          </div>
        </div>
      </div>
    </section>
  );
};

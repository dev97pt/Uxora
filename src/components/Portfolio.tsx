
import { ExternalLink } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Bill Generator",
      description: "Professional invoice and bill generation system with automated calculations and PDF export capabilities.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      live: "https://billify-generator-6057.vercel.app"
    },
    {
      title: "Event Organiser",
      description: "Comprehensive event management platform for organizing, tracking, and managing events efficiently.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=300&fit=crop",
      live: "https://clean-event-space.vercel.app"
    },
    {
      title: "Kings n Company",
      description: "Professional real estate company website providing comprehensive property information and services.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      live: "https://kingsncompany.com"
    }
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Showcasing our latest projects and technical achievements
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.live}
                      className="bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                    >
                      <ExternalLink size={16} className="sm:w-5 sm:h-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

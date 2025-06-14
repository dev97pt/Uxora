
import { Github, ExternalLink } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, file sharing, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop",
      tech: ["Vue.js", "Python", "MongoDB", "Socket.io"],
      github: "#",
      live: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Business intelligence dashboard with data visualization, reporting, and predictive analytics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      tech: ["React", "D3.js", "Python", "AWS"],
      github: "#",
      live: "#"
    },
    {
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      tech: ["React Native", "Express", "PostgreSQL", "JWT"],
      github: "#",
      live: "#"
    },
    {
      title: "IoT Monitoring System",
      description: "Real-time IoT device monitoring and control system with automated alerts and data logging.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=500&h=300&fit=crop",
      tech: ["Python", "MQTT", "InfluxDB", "Grafana"],
      github: "#",
      live: "#"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation platform with natural language processing and machine learning.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      github: "#",
      live: "#"
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
                      href={project.github}
                      className="bg-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                    >
                      <Github size={16} className="sm:w-5 sm:h-5 text-gray-700" />
                    </a>
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
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

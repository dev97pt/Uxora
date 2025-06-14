
import { Briefcase } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and best practices",
      features: ["React & Next.js", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Deployment"]
    },
    {
      title: "Backend Development",
      description: "Scalable server-side solutions and API development",
      features: ["RESTful APIs", "GraphQL", "Microservices", "Database Design"]
    },
    {
      title: "Cloud & DevOps",
      description: "Cloud infrastructure setup, deployment, and automation",
      features: ["AWS/Azure/GCP", "CI/CD Pipelines", "Container Orchestration", "Monitoring & Analytics"]
    },
    {
      title: "Automation",
      description: "Process automation and workflow optimization solutions",
      features: ["Business Process Automation", "Data Processing", "Integration Solutions", "Custom Scripts"]
    },
    {
      title: "Consulting",
      description: "Technical consultation and architecture planning",
      features: ["System Architecture", "Code Reviews", "Performance Optimization", "Technology Strategy"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive software engineering solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

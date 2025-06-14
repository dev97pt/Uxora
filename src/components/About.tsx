
import { User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two experienced software engineers passionate about creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <User className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Osmar Graça</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Experienced software engineer with expertise in full-stack development, 
              cloud architecture, and modern web technologies. Passionate about creating 
              scalable solutions and optimizing system performance.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AWS</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <User className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Ricardo Pilartes</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Skilled software engineer specializing in backend development, database design, 
              and system integration. Focused on building robust, maintainable applications 
              that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Docker</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">API Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

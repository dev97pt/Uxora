
import { User, CheckCircle } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two experienced developers passionate about creating websites that help businesses grow online
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <User className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">🧑‍💻 Osmar Graça</h3>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">What I do</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm a web developer focused on creating clean, modern websites that help businesses grow online. I've built websites for different industries and always aim to make them fast, easy to use, and visually appealing.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">My approach</h4>
              <p className="text-gray-700 leading-relaxed">
                I care about the details and enjoy finding smart solutions that work. My goal is to build tools that people can count on.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <User className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">🧑‍💻 Ricardo Pilartes</h3>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">What I do</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm a backend developer who helps turn ideas into solid, reliable websites. I make sure everything works smoothly behind the scenes — from setting up databases to making websites secure and efficient.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">My approach</h4>
              <p className="text-gray-700 leading-relaxed">
                My goal is to build tools that people can count on, focusing on reliability, quality, and performance.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges Section */}
        <div className="bg-gray-50 p-8 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">What You Get</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <CheckCircle className="text-green-600 mx-auto mb-2" size={32} />
              <p className="text-gray-700 font-medium">Responsive Design</p>
            </div>
            <div className="text-center">
              <CheckCircle className="text-green-600 mx-auto mb-2" size={32} />
              <p className="text-gray-700 font-medium">SEO-Friendly</p>
            </div>
            <div className="text-center">
              <CheckCircle className="text-green-600 mx-auto mb-2" size={32} />
              <p className="text-gray-700 font-medium">Fast Loading</p>
            </div>
            <div className="text-center">
              <CheckCircle className="text-green-600 mx-auto mb-2" size={32} />
              <p className="text-gray-700 font-medium">Mobile Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

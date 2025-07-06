
import { User, CheckCircle } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Two experienced developers passionate about creating websites that help businesses grow online
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="bg-gray-50 p-8 sm:p-10 rounded-xl text-center">
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
              At <span className="font-semibold text-gray-900">Uxora</span>, we specialise in web development and design that brings brands to life online.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
              Based in Lisbon and working with clients across the globe, we deliver tailored digital solutions that combine clean design, solid code, and smart strategy.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
              From responsive websites to custom-built platforms, we create seamless user experiences that not only look great but also perform exceptionally.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
              Our approach is 360° — we take care of everything from concept to deployment, always staying ahead of the curve with the latest technologies and design trends.
            </p>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              Whether you're launching a new idea or scaling an existing business, <span className="font-semibold text-gray-900">Uxora</span> is your trusted partner for building a strong and modern digital presence.
            </p>
          </div>
        </div>

        {/* Trust Badges Section */}
        <div className="bg-gray-50 p-6 sm:p-8 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8">What You Get</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <CheckCircle className="text-green-600 mx-auto mb-2" size={28} />
              <p className="text-gray-700 font-medium text-sm sm:text-base">Responsive Design</p>
            </div>
            <div className="text-center">
              <CheckCircle className="text-green-600 mx-auto mb-2" size={28} />
              <p className="text-gray-700 font-medium text-sm sm:text-base">SEO-Friendly</p>
            </div>
            <div className="text-center">
              <CheckCircle className="text-green-600 mx-auto mb-2" size={28} />
              <p className="text-gray-700 font-medium text-sm sm:text-base">Fast Loading</p>
            </div>
            <div className="text-center">
              <CheckCircle className="text-green-600 mx-auto mb-2" size={28} />
              <p className="text-gray-700 font-medium text-sm sm:text-base">Mobile Ready</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

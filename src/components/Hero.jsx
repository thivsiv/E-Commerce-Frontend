import { assets } from "../assets/assets"; // Importing assets for hero image and other resources
import { Link } from 'react-router-dom'; // Importing Link for navigation between routes

const Hero = () => {
  return (
    // Main section for the Hero component with responsive design using Tailwind CSS
    <section className="flex flex-col sm:flex-row items-center justify-center bg-gradient-to-r from-[#001147] to-blue-800 rounded-lg min-h-[50vh]">
      
      {/* Left Content Section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-6">
        <div className="text-white"> {/* Text color is set to white for better contrast */}
          {/* Hero Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-relaxed mb-4">
            Elevate Your Style with Timeless Essentials
          </h2>
          
          {/* Hero Subtext */}
          <p className="text-white text-base mb-6">
            Discover curated fashion that blends modern elegance with classic sophistication. 
            Uncover pieces that empower you to express your unique style confidently.
          </p>

          {/* Button Section */}
          <div className="flex items-center gap-4">
            <button 
              className="bg-white text-blue-700 border border-blue-700 py-2 px-6 rounded-md transition duration-300 hover:bg-blue-700 hover:text-white"
            >
              <Link to="./collection">SHOP NOW</Link> {/* Linking to the collection page */}
            </button>
          </div>
        </div>
      </div>

      {/* Right Content Section */}
      <div className="w-full sm:w-1/2 flex items-center justify-center">
        <div className="bg-gradient-to-r from-[#001147] to-blue-800 p-6 rounded-lg relative overflow-hidden">
          {/* Hero Image */}
          <img
            src={assets.hero_img} // Source of the hero image
            alt="Hero Banner" // Accessibility: Alt text for the image
            className="w-full h-full object-cover rounded-lg transition duration-300 transform animate-[borderExpand_10s_linear infinite] hover:scale-105"
          />
          
          {/* Decorative Section - Animated Elements */}
          <div className="absolute bottom-4 right-4 flex gap-4 items-center justify-center">
            {/* Animated Bouncing Circle */}
            <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-white text-2xl">💙</span> {/* Decorative emoji inside the bouncing circle */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

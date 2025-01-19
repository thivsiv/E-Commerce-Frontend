import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const OurBrands = () => {
  // Array of all available brands with name and description
  const allBrands = [
    { name: "TrendVibe", description: "Stay ahead with the latest trends." },
    { name: "StyleHive", description: "Discover your unique fashion hive." },
    { name: "LuxCart", description: "Luxury at your fingertips." },
    { name: "BargainNest", description: "Your go-to for affordable finds." },
    { name: "ModaMart", description: "Modern styles for every occasion." },
    { name: "ChicLane", description: "Where chic meets convenience." },
    { name: "ShopSpree", description: "Indulge in endless shopping sprees." },
    { name: "FabFolio", description: "Fabulous picks, every time." },
  ];

  // State to hold the selected 8 brands
  const [brands, setBrands] = useState([]);

  // Use Effect to shuffle and select 8 brands from the array
  useEffect(() => {
    // Shuffle the brands array using Fisher-Yates algorithm
    const shuffled = allBrands.sort(() => 0.5 - Math.random());
    
    // Set the state with the first 8 brands from the shuffled list
    setBrands(shuffled.slice(0, 8));
  }, []);  // Empty dependency array means it runs once when the component mounts

  return (
    <div className="relative bg-[#001147] text-white pt-16 pb-16 mt-20 px-6 lg:px-16 rounded-lg">
      {/* Flying hearts animation using Framer Motion */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-6 h-6 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,  // Random horizontal position
              top: `${Math.random() * 100}%`,   // Random vertical position
            }}
            initial={{ opacity: 0, y: 0 }}  // Initial state
            animate={{
              opacity: [0, 1, 0],   // Animation of opacity fading in and out
              y: [0, -50, -100],    // Animation of movement upwards
            }}
            transition={{
              duration: 4 + Math.random() * 2,  // Animation duration, randomizes between 4 and 6 seconds
              repeat: Infinity,  // Infinite looping of the animation
              delay: Math.random(),  // Random delay before starting each heart animation
            }}
          />
        ))}
      </div>

      {/* Main content of the brands */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Brands</h2>
        <p className="text-lg mb-10">
          Explore the trusted brands redefining your shopping experience.
        </p>
        
        {/* Grid layout to display brands */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white text-[#001147] rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}  // Initial scale and opacity
              animate={{ opacity: 1, scale: 1 }}  // Animation to fade in and scale up
              transition={{ duration: 0.5, delay: index * 0.2 }}  // Animation duration and delay based on index
            >
              <h3 className="text-2xl font-bold mb-2">{brand.name}</h3>
              <p className="text-sm">{brand.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBrands;

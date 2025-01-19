import { assets } from "../assets/assets";  // Import assets for logo and other resources
import { Link } from 'react-router-dom';  // Import Link for navigation between routes

// Footer Component
const Footer = () => {
  return (
    <div className="bg-[#001147] w-full rounded-lg py-5"> {/* Footer container with background color and padding */}
      <div className="container mx-auto"> {/* Centered container with auto margins */}
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 my-10 text-sm"> {/* Responsive grid layout for footer sections */}
          {/* Logo and Description Section */}
          <div>
            <img 
              src={assets.logo} 
              className="mb-5 w-64 rounded-lg" 
              alt="Logo" 
            /> {/* Logo with margin, size adjustment, and rounded corners */}
            <p className="w-full md:w-2/3 text-gray-300"> {/* Description paragraph with responsive width and color */}
              Thank you for visiting! Stay connected with us for the latest updates, exclusive offers, and new collections. Shop with confidence, knowing we prioritize quality, 
              fast shipping, and easy returns. Follow us on social media, or reach out with any questions—we’re here to help and make your experience remarkable
            </p>
          </div>

          {/* Company Links Section */}
          <div>
            <p className="text-xl font-medium mb-5 text-gray-100">COMPANY</p> {/* Section title with styling */}
            <ul className="flex flex-col gap-1 text-gray-300"> {/* List of links with spacing and color */}
              <li><Link to="/">Home</Link></li> {/* Link to home page */}
              <li><Link to="/about">About us</Link></li> {/* Link to about page */}
              <li><Link to="/">Delivery</Link></li> {/* Placeholder link for delivery */}
              <li><Link to="/">Privacy policy</Link></li> {/* Placeholder link for privacy policy */}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <p className="text-xl font-medium mb-5 text-gray-100">GET IN TOUCH</p> {/* Section title with styling */}
            <ul className="flex flex-col gap-1 text-gray-300"> {/* Contact information list */}
              <li>+1-222-456-7890</li> {/* Phone number */}
              <li>contact@thivsiv.com</li> {/* Email address */}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div>
          <hr className="border-gray-500" /> {/* Divider line */}
          <p className="py-5 text-sm text-center text-gray-300"> {/* Copyright text with padding and center alignment */}
            Copyright 2024@ thivsiv.com - All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;  // Export the Footer component for use in other parts of the application

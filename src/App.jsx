import { Routes, Route } from "react-router-dom";

// Importing page components
import Contact from "./pages/Contact";  // Page for contact information
import About from "./pages/About";  // Page with information about the website or brand
import Home from "./pages/Home";  // Home page of the application
import AllCollection from "./pages/Collection";  // Page displaying all product collections
import Product from "./pages/Product";  // Page displaying individual product details
import Login from "./pages/Login";  // Page for user login
import PlaceOrder from "./pages/PlaceOrder";  // Page where users place their orders
import Orders from "./pages/Orders";  // Page displaying user orders
import Cart from "./pages/cart";  // Shopping cart page
import Navbar from "./components/Navbar";  // Navigation bar component
import Footer from "./components/Footer";  // Footer component
import SearchBar from "./components/SearchBar";  // Search bar component

// Importing third-party library for notifications
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Importing CSS for the toast notifications

// Importing additional product collection pages
import LatestCollection from "./pages/LatestCollection";  // Page for latest product collection
import BestSellers from "./pages/BestSellers";  // Page for best-selling products
import NewArrivals from "./pages/NewArrivals";  // Page for newly arrived products

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Toast notifications */}
      <ToastContainer />

      {/* Navigation Bar */}
      <Navbar />

      {/* Search Bar */}
      <SearchBar />

      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Route for product collections */}
        <Route path="/collection" element={<AllCollection />} />

        {/* Route for about page */}
        <Route path="/about" element={<About />} />

        {/* Route for contact page */}
        <Route path="/contact" element={<Contact />} />

        {/* Route for individual product details */}
        <Route path="/product/:productId" element={<Product />} />

        {/* Route for the shopping cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Route for user login */}
        <Route path="/login" element={<Login />} />

        {/* Route for placing orders */}
        <Route path="/place-order" element={<PlaceOrder />} />

        {/* Route for viewing orders */}
        <Route path="/orders" element={<Orders />} />

        {/* Route for latest product collection */}
        <Route path="/collection/latestcollection" element={<LatestCollection />} />

        {/* Route for best-selling products */}
        <Route path="/collection/bestsellers" element={<BestSellers />} />

        {/* Route for newly arrived products */}
        <Route path="/collection/newarrivals" element={<NewArrivals />} />
      </Routes>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;

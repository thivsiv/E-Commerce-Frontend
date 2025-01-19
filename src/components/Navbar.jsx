import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Navbar = () => {
    // State to manage visibility of mobile menu
    const [visible, setVisible] = useState(false);

    // State to manage visibility of the dropdown menu
    const [showDropdown, setShowDropdown] = useState(false);

    // State to manage dropdown hide delay
    const [dropdownTimer, setDropdownTimer] = useState(null);

    // Context values for showing search and getting cart count
    const { setShowSearch, getCartCount } = useContext(ShopContext);

    // Function to show the dropdown menu immediately
    const showDropdownMenu = () => {
        clearTimeout(dropdownTimer); // Clear any existing timer to prevent unintended hiding
        setShowDropdown(true);
    };

    // Function to hide the dropdown menu with a delay
    const hideDropdownMenu = () => {
        const timer = setTimeout(() => {
            setShowDropdown(false);
        }, 1000); // Delay in milliseconds
        setDropdownTimer(timer);
    };

    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-white">
            {/* Left Section: Navigation Links for larger screens */}
            <div className="hidden sm:flex gap-8 items-center text-lg">
                {/* Home link */}
                <Link to="/" className="hover:text-gray-600" style={{ color: '#005EE3' }}>Home</Link>

                {/* Dropdown menu for Collections */}
                <div
                    className="relative"
                    onMouseEnter={showDropdownMenu}
                    onMouseLeave={hideDropdownMenu}
                >
                    <span className="cursor-pointer hover:text-gray-600" style={{ color: '#005EE3' }}>
                        Collections
                    </span>
                    {showDropdown && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded">
                            <Link to="/collection/latestcollection" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100">
                                Latest Collection
                            </Link>
                            <Link to="/collection/bestsellers" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100">
                                Best Sellers
                            </Link>
                            <Link to="/collection/newarrivals" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100">
                                New Arrivals
                            </Link>
                            <Link to="/collection" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100">
                                Shop All
                            </Link>
                        </div>
                    )}
                </div>

                {/* Other navigation links */}
                <Link to="/about" className="hover:text-gray-600" style={{ color: '#005EE3' }}>About</Link>
                <Link to="/contact" className="hover:text-gray-600" style={{ color: '#005EE3' }}>Contact</Link>
            </div>

            {/* Center Section: Logo */}
            <Link to="/">
                <img src={assets.logo} className="w-64 sm:block" alt="Brand Logo" />
            </Link>

            {/* Right Section: Icons and functionalities */}
            <div className="hidden sm:flex items-center gap-6">
                {/* Search Icon */}
                <img
                    onClick={() => setShowSearch(true)}
                    src={assets.search_icon}
                    className="w-8 h-8 cursor-pointer"
                    alt="Search Icon"
                />

                {/* Profile Icon with dropdown menu */}
                <div className="group relative">
                    <Link to='/login'>
                        <img
                            className="w-8 h-8 cursor-pointer"
                            src={assets.profile_icon}
                            alt="Profile Icon"
                        />
                    </Link>
                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                            <p className="cursor-pointer hover:text-black">My Profile</p>
                            <p className="cursor-pointer hover:text-black">Orders</p>
                            <p className="cursor-pointer hover:text-black">Logout</p>
                        </div>
                    </div>
                </div>

                {/* Cart Icon with item count */}
                <Link to="/cart" className="relative">
                    <img
                        src={assets.cart_icon}
                        className="w-8 h-8 min-w-5"
                        alt="Cart Icon"
                    />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#005EE3] text-white aspect-square rounded-full text-[8px]">
                        {getCartCount()}
                    </p>
                </Link>
            </div>

            {/* Mobile Menu Icon */}
            <img
                onClick={() => setVisible(true)}
                src={assets.menu_icon}
                className="w-5 cursor-pointer sm:hidden"
                alt="Menu Icon"
            />

            {/* Mobile Navigation Menu */}
            {visible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
                    <div className="bg-white w-64 h-full flex flex-col px-6 py-4">
                        <button
                            onClick={() => setVisible(false)}
                            className="self-end text-gray-500"
                        >
                            ✖
                        </button>
                        <Link to="/" className="py-2 hover:text-gray-600">Home</Link>
                        <Link to="/about" className="py-2 hover:text-gray-600">About</Link>
                        <Link to="/contact" className="py-2 hover:text-gray-600">Contact</Link>
                        <Link to="/login" className="py-2 hover:text-gray-600">Login</Link>

                        {/* Dropdown menu in mobile view */}
                        <div className="relative" onMouseEnter={showDropdownMenu} onMouseLeave={hideDropdownMenu}>
                            <span className="cursor-pointer hover:text-gray-600" style={{ color: '#005EE3' }}>
                                Collections
                            </span>
                            {showDropdown && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded">
                                    <Link to="/collection/latestcollection" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100">
                                        Latest Collection
                                    </Link>
                                    <Link to="/collection/bestsellers" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100">
                                        Best Sellers
                                    </Link>
                                    <Link to="/collection/newarrivals" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100">
                                        New Arrivals
                                    </Link>
                                    <Link to="/collection" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100">
                                        Shop All
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

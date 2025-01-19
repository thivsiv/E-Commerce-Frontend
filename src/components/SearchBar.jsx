import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

// SearchBar Component: Handles the search bar functionality
const SearchBar = () => {
    // Using ShopContext to access the search state and functions
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    
    // State to control visibility of the search bar
    const [visible, setVisible] = useState(false);
    
    // Using the location hook from react-router to access the current URL path
    const location = useLocation();

    // Effect to detect changes in the URL path
    useEffect(() => {
        // If the current path includes 'collection', set visible to true
        if (location.pathname.includes('collection')) {
            setVisible(true);
        } 
        // Otherwise, set visible to false
        else {
            setVisible(false);
        }
    }, [location]);  // Dependency array to re-run this effect when location changes

    // Conditional rendering based on showSearch and location.pathname
    return (showSearch && location.pathname.startsWith("/collection") && visible) ? (
        <div className="border-t border-b bg-gray-50 text-center">
            {/* Search Input Section */}
            <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-full md:w-3/4">
                <label htmlFor="search-input" className="sr-only">Search</label>
                <input 
                    id="search-input"  // HTML input element for searching
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)}  // Update the search state on input change
                    className="flex-1 outline-none bg-inherit text-sm" 
                    type="text" 
                    placeholder="Search" 
                />
                {/* Search Icon */}
                <img 
                    className="w-4" 
                    src={assets.search_icon} 
                    alt="Search Icon" 
                />
            </div>
            {/* Close Icon Section */}
            <img 
                onClick={() => setShowSearch(false)}  // Close the search bar when clicking the icon
                className="inline w-3 cursor-pointer" 
                src={assets.cross_icon} 
                alt="Close Icon" 
                aria-label="Close search bar"
            />
        </div>
    ) : null;  // Render nothing if conditions are not met
};

export default SearchBar;  // Exporting the SearchBar component

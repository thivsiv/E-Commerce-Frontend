import { useState, useContext, useEffect } from "react";  // Import React hooks for state management and lifecycle handling
import { ShopContext } from "../context/ShopContext";  // Import ShopContext to access shared state
import Title from "./Title";  // Import the Title component for rendering section headers
import ProductItem from "./ProductItem";  // Import the ProductItem component for rendering individual product cards
import { Link } from "react-router-dom";  // Import Link for navigation between routes

const BestSellers = () => {
    // Destructure `products` from ShopContext to access the list of products
    const { products } = useContext(ShopContext);  

    // State to store the filtered list of bestseller products
    const [bestSeller, setBestSeller] = useState([]);  

    // useEffect to filter bestsellers whenever `products` changes
    useEffect(() => {
        // Filter products to find those marked as bestsellers
        const bestProduct = products.filter((item) => item.bestseller);

        // Update the bestSeller state with the top 5 bestsellers
        setBestSeller(bestProduct.slice(0, 5));
    }, [products]);  

    return (
        <div className="my-10 bg-white"> {/* Outer container for the component */}

            {/* Section header with title and description */}
            <div className="text-center text-3xl py-8">
                <Title text1={'Best'} text2={'Sellers'} /> {/* Render the Title component */}
                <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600"> {/* Description text */}
                Shop our most-loved pieces that everyone is raving about! These standout styles combine timeless elegance with modern flair, 
                making them perfect for any occasion. From chic everyday looks to statement outfits, our best sellers are customer favorites 
                for a reason. Find your next wardrobe staple today!
                </p>
            </div>

            {/* Grid container for displaying the product items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 gap-y-8">
                {bestSeller.length > 0 ? (
                    // Map over the bestSeller array to render each product
                    bestSeller.map((item, index) => (
                        <div 
                            key={index}  // Unique key for each product
                            className="relative bg-white border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 flex flex-col items-center"
                        >
                            <ProductItem 
                                key={index}  // Ensure a unique key for React reconciliation
                                {...item}  // Spread all properties of the item object
                                id={item._id}  // Pass product ID explicitly
                                image={item.image}  // Pass product image
                                name={<span className="text-lg text-[#001147] font-medium text-center">{item.name}</span>}  // Styled product name
                                price={<span className="text-[#001147] text-center">{item.price}</span>}  // Styled product price
                            />
                        </div>
                    ))
                ) : (
                    // Display message if no bestsellers are available
                    <p className="text-center col-span-full">No Best Sellers Available</p>
                )}
            </div>

            {/* Button for navigating to the full Bestsellers collection */}
            <div className="flex justify-center mt-6">
                <Link 
                    to="/collection/bestsellers"  // Navigation link to the bestsellers page
                    className="bg-[#001147] text-white py-3 px-8 rounded-lg hover:bg-[#001147]/80 text-lg font-medium"
                >
                    Explore More {/* Button text */}
                </Link>
            </div>
        </div>
    );
};

export default BestSellers;  // Export the component for use in other parts of the application

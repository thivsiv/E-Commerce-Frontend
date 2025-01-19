import { useState, useContext, useEffect } from "react";  
import { ShopContext } from "../context/ShopContext";  
import Title from "./Title";  
import ProductItem from "./ProductItem";  
import { assets } from "../assets/assets";

const NewArrivals = () => {
    // Accessing products from ShopContext
    const { products } = useContext(ShopContext);  
    
    // State to hold the filtered new arrivals
    const [newArrivals, setNewArrivals] = useState([]);  

    // useEffect to filter and update new arrivals whenever `products` changes
    useEffect(() => {
        const arrivals = (products ?? [])  // Nullish coalescing operator handles undefined gracefully
            .filter((item) => item.newArrival)  // Filter only items with `newArrival` set to true
            .slice(0, 4);  // Limit to 4 items
        setNewArrivals(arrivals);  // Update state with filtered new arrivals
    }, [products]);  // Dependency array: re-run this effect when `products` changes

    return (
        <div className="my-10 bg-white">
            {/* Section heading */}
            <div className="text-center text-3xl py-8">
                {/* Rendering the Title component */}
                <Title text1={'New'} text2={'Arrivals'} />
                {/* Description paragraph */}
                <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
                  Discover the latest additions to our collection. 
                  Stay trendy with our carefully selected new arrivals designed to elevate your style.
                </p>
            </div>
            
            {/* Grid layout for displaying products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
                {newArrivals.length > 0 ? (
                    // If there are new arrivals, render each item
                    newArrivals.map((item, index) => (
                        <div 
                          key={index} 
                          {...item} 
                          className="relative bg-white border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 flex flex-col items-center"
                        >
                            {/* ProductItem component for displaying product details */}
                            <ProductItem 
                                key={index} 
                                {...item} 
                                id={item._id}        // Product ID
                                image={item.image}  // Product image
                                name={<span className="text-lg text-[#001147] font-medium text-center">{item.name}</span>}    
                                price={<span className="text- text-[#001147] text-center">{item.price}</span>}  
                            />
                        </div>
                    ))
                ) : (
                    // If no new arrivals, display a message
                    <p className="text-center col-span-full">No New Arrivals Available</p>
                )}
            </div>
        </div>
    );
};

export default NewArrivals;

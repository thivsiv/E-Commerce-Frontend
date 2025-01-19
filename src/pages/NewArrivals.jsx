import { useState, useContext, useEffect } from "react";  
import { ShopContext } from "../context/ShopContext";  
import Title from "../components/Title";  
import ProductItem from "../components/ProductItem";  
import { assets } from "../assets/assets";  

// NewArrivals component to display the latest products that have the "newArrival" flag set to true.
const NewArrivals = () => {
    // Access products from the ShopContext
    const { products } = useContext(ShopContext);  

    // State to store the filtered new arrivals, initially an empty array
    const [newArrivals, setNewArrivals] = useState([]);  

    // useEffect to update newArrivals when the products change
    useEffect(() => {
        // Filter the products to find items with the 'newArrival' property set to true and limit to 5 items
        const arrivals = (products ?? [])
            .filter((item) => item.newArrival) 
            .slice(0, 5);  // Limit the results to 5 new arrivals
        setNewArrivals(arrivals);
    }, [products]);  // The effect depends on products changing

    return (
        <div className="my-10">
            {/* Header Section */}
            <div className="text-center text-3xl py-8">
                <Title text1={'New'} text2={'Arrivals'} />
                <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
                  Discover the latest additions to our collection. Stay trendy with our carefully selected new arrivals designed to elevate your style.
                </p>
            </div>

            {/* Grid to display new arrivals */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {/* Conditional rendering: Show product items if there are new arrivals */}
                {newArrivals.length > 0 ? (
                    newArrivals.map((item, index) => (
                        <ProductItem 
                            key={index} {...item}  // Spread props to pass item properties
                            id={item._id}          // Product ID
                            image={item.image}     // Product image
                            name={<span className="text-lg text-[#001147] font-medium">{item.name}</span>}  // Product name with custom styling
                            price={<span className="text-[#001147]">{item.price}</span>}  // Product price with custom styling
                        />
                    ))
                ) : (
                    <p className="text-center col-span-full">No New Arrivals Available</p>  // Message when there are no new arrivals
                )}
            </div>
        </div>
    );
};

export default NewArrivals;  // Exporting the NewArrivals component

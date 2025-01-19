import { useState, useContext, useEffect } from "react";  // Importing necessary hooks and context
import { ShopContext } from "../context/ShopContext";  // Importing the shop context to access products
import Title from "../components/Title";  // Importing the Title component for section titles
import ProductItem from "../components/ProductItem";  // Importing the ProductItem component to display individual products
import { assets } from "../assets/assets";  // Importing assets

const BestSellers = () => {
    // Using the ShopContext to get the list of products
    const { products } = useContext(ShopContext);  

    // Initializing the state to store the list of best-selling products
    const [bestSeller, setBestSeller] = useState([]);  

    // Using useEffect to filter and set the best-selling products whenever the products list changes
    useEffect(() => {
        // Filtering the products to get items that are marked as bestsellers
        const bestProduct = products.filter((item) => item.bestseller);

        // Setting the top 5 best-selling products to the state
        setBestSeller(bestProduct.slice(0, 5));
    }, [products]);  // Dependency on products, so it runs whenever products change

    return (
        <div className="my-10">  {/* Main container with margin */}
            
            {/* Section Title */}
            <div className="text-center text-3xl py-8">
                <Title text1={'Best'} text2={'Sellers'} />  {/* Displaying the 'Best Sellers' title using the Title component */}
                
                {/* Description about best-sellers */}
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Shop our most-loved pieces that everyone is raving about! These standout styles combine timeless elegance with modern flair, 
                    making them perfect for any occasion. From chic everyday looks to statement outfits, our best sellers are customer favorites 
                    for a reason. Find your next wardrobe staple today!
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestSeller.length > 0 ? (
                    bestSeller.map((item, index) => (
                        <ProductItem 
                            key={index}  // Unique key for each product item
                            {...item}      // Spread operator to pass all item properties to ProductItem component
                            id={item._id}  // Passing the product ID
                            image={item.image}  // Passing the product image
                            name={item.name}    // Passing the product name
                            price={item.price}  // Passing the product price
                        />
                    ))
                ) : (
                    <p>No Best Sellers Available</p>  // Display message if there are no best sellers
                )}
            </div>
        </div>
    );
};

export default BestSellers;

import { ShopContext } from "../context/ShopContext";  // Importing the ShopContext from the context folder
import ProductItem from "../components/ProductItem";  // Importing the ProductItem component
import Title from "../components/Title";  // Importing the Title component
import { useState, useContext, useEffect } from "react";  // Importing React hooks: useState, useContext, useEffect

// Component to display the latest product collection
const LatestCollection = () => {
    // Accessing products from ShopContext
    const { products } = useContext(ShopContext);  // Extracting products from the ShopContext

    // State to store the latest products, initially set to an empty array
    const [latestProducts, setLatestProducts] = useState([]);  

    // useEffect hook to update latestProducts whenever products change
    useEffect(() => {
        if (products && products.length > 0) {
            setLatestProducts(products.slice(0,10));  // Set the first 10 products as latest
        }
    }, [products]);  // This dependency array ensures the effect runs whenever 'products' changes
    
    console.log(products);  // Log all products to the console for debugging purposes

    if (!products || products.length === 0) return null;  // Early return if no products

    return (
        <div className="my-10">
            {/* Header Section */}
            <div className="text-center py-8 text-3xl">
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />  {/* Display the title of the collection */}
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Unveil a stunning selection of dresses designed to make every moment special. From effortlessly stylish 
                    to elegantly refined, our newest pieces bring together modern trends and timeless beauty. Perfect fits, 
                    vibrant colors, and unmatched comfort await—find your perfect dress today!
                </p>
            </div>

            {/* Grid displaying the latest products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {/* Mapping through the latest products and rendering ProductItem for each */}
                {latestProducts.map((item, index) => (
                   <ProductItem 
                       key={index} {...item}        // Using item._id as the unique key
                       id={item._id}         // Product ID
                       image={item.image}    // Product image
                       name={item.name}      // Product name
                       price={item.price}    // Product price
                   />
                ))}
            </div>
        </div>
    );
}

export default LatestCollection;  // Exporting the LatestCollection component

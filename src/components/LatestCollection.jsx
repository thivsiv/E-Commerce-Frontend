import { ShopContext } from "../context/ShopContext"; // Importing ShopContext to access global state
import { Link } from "react-router-dom"; // Importing Link for navigation
import ProductItem from "./ProductItem"; // Importing the ProductItem component for displaying individual products
import Title from "./Title"; // Importing the Title component for the section header
import { useState, useContext, useEffect } from "react"; // Importing necessary React hooks

const LatestCollection = () => {
    // Access the products array from the ShopContext
    const { products } = useContext(ShopContext);

    // State to store the first 5 products for the latest collection
    const [latestProducts, setLatestProducts] = useState([]);

    // useEffect to update `latestProducts` whenever the `products` array changes
    useEffect(() => {
        setLatestProducts(products.slice(0, 5)); // Select the first 5 products
    }, [products]);

    return (
        <div className="my-10 bg-white"> {/* Section container with margin and background color */}
            {/* Section Header */}
            <div className="text-center text-3xl py-8"> {/* Centered header with padding */}
                <Title text1="LATEST" text2="COLLECTION" /> {/* Dynamic title using the Title component */}
                <p className="w-3/4 mx-auto text-xs sm:text-sm md:text-base text-gray-600">
                    {/* Description paragraph for the section */}
                    Unveil a stunning selection of dresses designed to make every moment special. From effortlessly stylish 
                    to elegantly refined, our newest pieces bring together modern trends and timeless beauty. Perfect fits, vibrant colors,
                    and unmatched comfort await—find your perfect dress today!
                </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-8">
                {/* Loop through the latestProducts array and render each product */}
                {latestProducts.map((item, index) => (
                    <div 
                        key={index} // Unique key for each product
                        className="relative bg-white border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 flex flex-col items-center"
                    >
                        {/* Render the ProductItem component for each product */}
                        <ProductItem 
                            id={item._id} // Pass product ID
                            image={item.image} // Pass product image
                            name={ // Display product name
                                <span className="text-lg text-[#001147] font-medium text-center">
                                    {item.name}
                                </span>
                            }
                            price={ // Display product price
                                <span className="text-[#001147] text-center">
                                    {item.price}
                                </span>
                            }
                        />
                    </div>
                ))}
            </div>

            {/* "Explore More" Button */}
            <div className="flex justify-center mt-6"> {/* Center the button */}
                <Link 
                    to="/collection/latestcollection" // Link to the latest collection page
                    className="bg-[#001147] text-white py-3 px-8 rounded-lg hover:bg-[#001147]/80 text-lg font-medium"
                >
                    Explore More {/* Button text */}
                </Link>
            </div>
        </div>
    );
};

export default LatestCollection;

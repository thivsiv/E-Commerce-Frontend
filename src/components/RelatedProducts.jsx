import { useContext, useEffect, useState } from "react";  // Importing hooks and dependencies
import { ShopContext } from "../context/ShopContext";  // Importing the ShopContext
import Title from "./Title";  // Importing the Title component
import ProductItem from "./ProductItem";  // Importing the ProductItem component

// RelatedProducts Component: Fetches and displays related products based on category and subcategory
const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);  // Getting products from ShopContext
    const [related, setRelated] = useState([]);  // State to store related products

    useEffect(() => {
        if (products.length > 0) {
            // Filtering products based on category and subcategory
            let filteredProducts = products.filter(
                (item) => item.category === category && item.subCategory === subCategory
            );
            setRelated(filteredProducts.slice(0, 5));  // Limiting to 5 related products
        }
    }, [products, category, subCategory]);  // Dependencies to trigger useEffect on changes

    return (
        <div className="my-24">
            <div className="text-center text-3xl py-2">
                <Title text1={"RELATED"} text2={"PRODUCTS"} />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {related.map((item, index) => (
                    <ProductItem
                        key={index}
                        {...item}  // Passing all product properties as props to ProductItem
                        id={item._id}  // Explicitly passing individual properties
                        name={item.name}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;  // Exporting the RelatedProducts component

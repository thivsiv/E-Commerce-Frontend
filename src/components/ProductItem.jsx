import { useContext } from "react";  // Importing React's useContext hook
import { ShopContext } from "../context/ShopContext";  // Importing the ShopContext
import { Link } from "react-router-dom";  // Importing the Link component from React Router

// ProductItem Component: Renders an individual product item
const ProductItem = ({ _id, image, name, price }) => {
    // Use the ShopContext to get the current currency
    const { currency } = useContext(ShopContext);

    return (
        <Link 
            className="text-gray-700 cursor-pointer" 
            to={`/product/${_id}`}  // Updated to use _id
        >
            {/* Image Section */}
            <div className="overflow-hidden">
                <img 
                    className="hover:scale-110 transition ease-in-out" 
                    src={image[0]} 
                    alt={name} 
                />
            </div>

            {/* Product Name */}
            <p className="pt-3 pb-1 text-sm">{name}</p>

            {/* Product Price */}
            <p className="text-sm font-medium">{currency}{price}</p>
        </Link>
    );
}

export default ProductItem;  // Exporting the ProductItem component

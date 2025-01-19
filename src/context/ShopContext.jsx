import { createContext, useState } from "react";  // Importing necessary dependencies
import PropTypes from "prop-types";  // Importing PropTypes for type checking
import { products } from "../assets/assets";  // Importing the product data (Assuming this is an array of product objects)
import { toast } from "react-toastify";  // Importing the toast notification library
import { useNavigate } from "react-router-dom";  // Importing useNavigate from React Router

// Creating a Context for the shop state
export const ShopContext = createContext();

// Context Provider Component
const ShopContextProvider = ({ children }) => {
  // Currency used in the shop
  const currency = "$";  

  // Flat delivery fee applied to each order
  const delivery_fee = 10;

  // State to manage the search input value
  const [search, setSearch] = useState("");  // Default search is an empty string

  // State to manage the visibility of the search bar
  const [showSearch, setShowSearch] = useState(true);  // Default is that the search bar is visible

  // State to manage the items in the cart
  const [cartItems, setCartItems] = useState({});  // Initial cart is empty

  // Using useNavigate for navigation
  const navigate = useNavigate();  

  // Function to add items to the cart
  const addToCart = (itemId, size) => {
    if (!size) {
      // Display an error toast if no size is selected
      toast.error("Select Product Size");
      return;
    }

    // Deep cloning the existing cart items
    const cartData = { ...cartItems };

    if (cartData[itemId]) {
      // If item already exists in the cart, increment the quantity for the selected size
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    } else {
      // Otherwise, initialize the quantity for the selected size
      cartData[itemId] = { [size]: 1 };
    }

    // Update the state with the new cart data
    setCartItems(cartData);
  };

  // Function to get the total count of items in the cart
  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      const sizes = cartItems[itemId];
      for (const size in sizes) {
        totalCount += sizes[size];  // Sum up the quantity of each size
      }
    }

    return totalCount;
  };

  // Function to update the quantity of a specific item in the cart
  const updateQuantity = (itemId, size, quantity) => {
    const cartData = structuredClone(cartItems);  // Ensure the environment supports structuredClone
    cartData[itemId][size] = quantity;  // Update the quantity of the item for the specific size
    setCartItems(cartData);
  };

  // Function to calculate the total amount of items in the cart
  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      const itemInfo = products.find((product) => product._id === items);

      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0 && itemInfo) {
          totalAmount += itemInfo.price * cartItems[items][item];  // Calculate total price based on product price and quantity
        }
      }
    }

    return totalAmount;
  };

  // The value object that will be provided to any consumer using this context
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,  // Exporting navigate for programmatic navigation
  };

  return (
    // Providing the value object to all children components that consume this context
    <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
  );
};

// PropTypes to ensure `children` is a valid React node
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,  // `children` must be a valid React node
};

export default ShopContextProvider;  // Exporting the ShopContextProvider component

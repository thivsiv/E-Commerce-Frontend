import { useContext, useEffect, useState } from "react";  // Importing necessary hooks and context
import { ShopContext } from "../context/ShopContext";  // Importing the ShopContext to access cart and product data
import Title from "../components/Title";  // Importing the Title component for the cart section title
import { assets } from "../assets/assets";  // Importing assets like icons
import CartTotal from "../components/CartTotal";  // Importing the CartTotal component to show total cost

const Cart = () => {
  // Using context to access cart data and related functions
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  // State to store cart data for rendering
  const [cartData, setCartData] = useState([]);

  // useEffect to transform cartItems into a list of cartData (with product ID, size, and quantity)
  useEffect(() => {
    const tempData = [];  // Temporary array to hold the cart items
    for (const items in cartItems) {  // Loop through each category in cartItems
      for (const item in cartItems[items]) {  // Loop through each item in the category
        if (cartItems[items][item] > 0) {  // Check if the quantity is greater than 0
          tempData.push({
            _id: items,  // Product ID
            size: item,  // Size of the item
            quantity: cartItems[items][item],  // Quantity of the item
          });
        }
      }
    }
    setCartData(tempData);  // Update the state with the transformed cart data
  }, [cartItems]);  // Dependency array, so this effect runs whenever `cartItems` changes

  return (
    <div className="border-t pt-14">  {/* Main container with top border and padding */}
      
      {/* Title section */}
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />  {/* Displaying "YOUR CART" title */}
      </div>

      <div>
        {/* Rendering the cart items */}
        {cartData.map((item) => {
          // Find the product data using the product ID from the cart items
          const productData = products.find((product) => product._id === item._id);
          
          return productData ? (  // Check if product data exists
            <div
              key={`${item._id}-${item.size}`}  // Unique key for each cart item
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0fr] sm:grid-cols-[4fr_2fr_0.5fr]"  // Styling for each cart item
            >
              {/* Product image and details */}
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"  // Product image size (responsive)
                  src={productData.image[0] || ""}  // Displaying the first image or empty if not available
                  alt={productData.name || "Product Image"}  // Alt text for the image
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>  {/* Product name */}
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}  {/* Display currency */}
                      {productData.price}  {/* Display product price */}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>  {/* Display product size */}
                  </div>
                </div>
              </div>

              {/* Quantity input */}
              <input
                onChange={(e) => {  // Handle quantity change
                  const value = Number(e.target.value);  // Convert input value to a number
                  if (value > 0) updateQuantity(item._id, item.size, value);  // Update quantity if valid
                }}
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"  // Styling for the input field
                type="number"  // Input type is number
                min={1}  // Minimum quantity is 1
                value={item.quantity}  // Set the current quantity as value
              />

              {/* Delete icon */}
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}  // Remove item from cart
                className="w-4 mr-4 sm:w-5 cursor-pointer"  // Styling for the delete icon
                src={assets.bin_icon}  // Importing delete icon
                alt="Delete Icon"  // Alt text for delete icon
              />
            </div>
          ) : null;  // If no product data, render nothing
        })}
      </div>

      {/* Cart total and checkout button */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />  {/* Component to calculate and display cart total */}
          
          {/* Checkout button */}
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}  // Navigate to checkout page
              className="bg-[#001147] text-white text-sm my-8 px-8 py-3"
            >
              PROCEED TO CHECKOUT  {/* Button text */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

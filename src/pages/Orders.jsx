import { useContext } from "react";  // Importing the useContext hook from React
import { ShopContext } from "../context/ShopContext";  // Importing the ShopContext from the context file
import Title from "../components/Title";  // Importing the Title component to display the page title

// Orders Component to display the list of orders
const Orders = () => {
  // Using useContext to access the ShopContext
  const { products, currency } = useContext(ShopContext);  // Extracting 'products' and 'currency' from the ShopContext

  return (
    <div className="border-t pt-16">
      {/* Title Section */}
      <div className="text-2xl">
        <Title text1={'MY'} text2={'ORDERS'} />  {/* Displaying the title "MY ORDERS" */}
      </div>

      {/* Orders List */}
      <div>
        {
          // Displaying a slice of the products array, from index 1 to 3
          products.slice(1, 4).map((item, index) => (
            <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Order Item Details */}
              <div className="flex items-start gap-6 text-sm">
                <img className="w-16 sm:w-20" src={item.image[0]} alt="Product Image" />  {/* Displaying the product image */}
                <div>
                  <p className="sm:text-base font-medium">{item.name}</p>  {/* Displaying the product name */}
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                    <p>{currency}{item.price}</p>  {/* Displaying the product price */}
                    <p>Quantity: 1</p>  {/* Displaying the product quantity */}
                    <p>Size: M</p>  {/* Displaying the product size */}
                  </div>
                  <p className="mt-2">Date: <span className="text-gray-400">25, Jul, 2024</span></p>  {/* Displaying the order date */}
                </div>
              </div>

              {/* Order Status and Action */}
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-500"></p>  {/* Displaying the status indicator */}
                  <p className="text-black text-sm md:text-base">Ready to Ship</p>  {/* Displaying the order status */}
                </div>
                <button className="text-white border px-4 py-2 text-sm font-medium rounded-sm bg-[#001147]">
                  Track Order  {/* Button to track the order */}
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Orders;  // Exporting the Orders component

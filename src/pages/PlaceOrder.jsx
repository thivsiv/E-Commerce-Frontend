import { useContext, useState } from "react";  // Importing useState and useContext from React
import { assets } from "../assets/assets";  // Importing assets
import CartTotal from "../components/CartTotal";  // Importing CartTotal component
import Title from "../components/Title";  // Importing Title component
import { ShopContext } from "../context/ShopContext";  // Importing ShopContext

// PlaceOrder Component for handling the order placement
const PlaceOrder = () => {
  // State for storing the selected payment method (default: COD)
  const [method, setMethod] = useState('cod');
  
  // Accessing navigate function from ShopContext
  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      {/* Delivery Information Section */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />  {/* Displaying delivery information title */}
        </div>
        
        {/* Input fields for collecting delivery details */}
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email address" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Zipcode" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Phone" />
        </div>
      </div>

      {/* Payment and Cart Total Section */}
      <div className="mt-8">
        <div className="min-w-80">
          <CartTotal />  {/* Displaying the Cart Total */}
        </div>
        
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHOD'} />  {/* Displaying payment method title */}
          
          {/* Payment Method Selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            {/* Stripe Payment Method */}
            <div onClick={() => setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`w-4 h-4 rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`} />  {/* Payment method indicator */}
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="Stripe" />
            </div>
            
            {/* Razorpay Payment Method */}
            <div onClick={() => setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`w-4 h-4 rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`} />
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="Razorpay" />
            </div>
            
            {/* Cash on Delivery Payment Method */}
            <div onClick={() => setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
              <p className={`w-4 h-4 rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`} />
              <p className="text-gray-500 text-sm font-medium mx-4">CASH ON DELIVERY</p>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="w-full text-end mt-8">
            <button onClick={() => navigate('/orders')} className="bg-[#001147] text-white px-16 py-3 text-sm">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;  // Exporting the PlaceOrder component

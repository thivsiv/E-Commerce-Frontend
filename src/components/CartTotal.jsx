import { useContext } from 'react';  // Import useContext to access the ShopContext
import { ShopContext } from '../context/ShopContext';  // Import the ShopContext for shared state
import Title from './Title';  // Import the Title component for rendering section headers

// CartTotal Component
const CartTotal = () => {
    // Destructure required values from ShopContext
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

    return (
        <div className="w-full"> {/* Outer container for the component */}
            {/* Header section with title */}
            <div className="text-2xl">
                <Title text1={"CART"} text2={"TOTALS"} /> {/* Render the Title component with provided text */}
            </div>

            {/* Cart totals section */}
            <div className="flex flex-col gap-2 mt-2 text-sm"> {/* Container for cart details */}
                {/* Subtotal row */}
                <div className="flex justify-between"> {/* Row for subtotal */}
                    <p>Subtotal</p> {/* Label for subtotal */}
                    <p>{currency} {getCartAmount()}.00</p> {/* Display subtotal amount with currency */}
                </div>
                <hr /> {/* Divider */}

                {/* Shipping fee row */}
                <div className="flex justify-between"> {/* Row for shipping fee */}
                    <p>Shipping Fee</p> {/* Label for shipping fee */}
                    <p>{currency} {delivery_fee}.00</p> {/* Display shipping fee with currency */}
                </div>
                <hr /> {/* Divider */}

                {/* Total row */}
                <div className="flex justify-between"> {/* Row for total amount */}
                    <b>Total</b> {/* Label for total */}
                    <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b> {/* Calculate and display total */}
                </div>
            </div>
        </div>
    );
};

export default CartTotal;  // Export the component for use in other parts of the application

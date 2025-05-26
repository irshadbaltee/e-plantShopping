import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../src/CartSlice"; // Adjust path as needed
import "./CartItem.css";

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Handle increment
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Handle decrement
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({ name: item.name, quantity: item.quantity - 1 })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // Handle remove
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Item subtotal
  const calculateSubtotal = (item) => {
    return item.cost * item.quantity;
  };

  // Total cart amount
  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.cost * item.quantity;
    });
    return total;
  };

  // Continue shopping
  const handleContinueShopping = (e) => {
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  // Checkout (for future)
  const handleCheckoutShopping = () => {
    alert("Functionality to be added for future reference");
  };

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items-wrapper">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.name}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>Unit Price: ${item.cost}</p>
                  <div className="cart-quantity-controls">
                    <button onClick={() => handleDecrement(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  <p>Subtotal: ${calculateSubtotal(item)}</p>
                  <button
                    onClick={() => handleRemove(item)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-total">
              <h3>Total: ${calculateTotalAmount()}</h3>
              <button onClick={handleContinueShopping}>
                Continue Shopping
              </button>
              <button onClick={handleCheckoutShopping}>Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;

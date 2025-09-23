import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import "../css/Cart.css";
import Buttons from "../buttons/Buttons";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, totalAmount } =
    useContext(CartContext);

  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} width="80" />
              <div className="cart-item-details">
                <h5>{item.name}</h5>
                <p>Rs.{item.price}</p>

                {/* Quantity controls */}
                <div className="quantity-controls">
                  <Buttons
                    text="-"
                    styleClass="buy-now"
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  />
                  <span>{item.quantity}</span>
                  <Buttons
                    text="+"
                    styleClass="buy-now"
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  />
                </div>
              </div>
              <Buttons
                text="  &times;"
                styleClass="buy-now"
                type="button"
                onClick={() => removeFromCart(item.id)}
              />
            </div>
          ))}

          <div className="cart-footer">
            <h3>Total: Rs.{totalAmount}</h3>
            <Buttons
              text="Buy Now"
              styleClass="buy-now"
              type="button"
              disabled={cart.length === 0}
              onClick={() => navigate("/payment", { state: { totalAmount } })}
            />
          </div>
        </>
      )}
    </div>
  );
}

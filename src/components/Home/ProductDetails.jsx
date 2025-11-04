import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../Cart/CartContext";
import { useAuth } from "../Home/AuthContext";
import Buttons from "../buttons/Buttons";
import "../css/ProductDetails.css";

export default function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const { cart, addToCart } = useContext(CartContext);
  const { user } = useAuth(); // Get current user
  const [quantity, setQuantity] = useState(1);

  const isInCart = (product) => cart.some((item) => item.id === product.id);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  // Handler for Buy Now
  const handleBuyNow = () => {
    if (!user) {
      alert("Please log in or sign up to buy products!");
      navigate("/register?form=login"); // Redirect to login/signup page
      return;
    }
    navigate("/payment", { state: { totalAmount: product.price * quantity } });
  };

  // Handler for Add to Cart
  const handleAddToCart = () => {
    if (!user) {
      alert("Please log in or sign up to add products to your cart!");
      navigate("/register?form=login"); // Redirect to login/signup page
      return;
    }
    addToCart({ ...product, quantity });
    alert("Added to cart");
  };

  return (
    <section className="product-details">
      <div className="details-container">
        <button className="cross-btn" onClick={() => navigate(-1)}>
          ×
        </button>

        <div className="image-container">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="info-container">
          <h2>{product.name}</h2>
          <p className="brand">Brand: {product.brand}</p>
          <p className="price">Price: Rs.{product.price}</p>
          <p className="description">
            {product.description || "No description available."}
          </p>

          {/* Quantity Control */}
          <div className="quantity-control">
            <button className="qty-btn" onClick={decreaseQuantity}>
              −
            </button>
            <span className="qty-value">{quantity}</span>
            <button className="qty-btn" onClick={increaseQuantity}>
              +
            </button>
          </div>

          {/* Action Buttons */}
          <div className="buttons">
            <Buttons
              text="Buy Now"
              styleClass="buy-now"
              type="button"
              onClick={handleBuyNow}
            />

            <Buttons
              icon="fa-solid fa-cart-shopping"
              styleClass={`cart ${isInCart(product) ? "in-cart" : ""}`}
              type="button"
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useContext, useState } from "react";
import "../css/Features.css";

import { CartContext } from "../Cart/CartContext";
import { useNavigate } from "react-router-dom";
import Buttons from "../buttons/Buttons";
import { productsData } from "../products/ClothesData";

export default function Features() {
  const [products, setProducts] = useState(
    productsData.map((p) => ({ ...p, rating: 0 }))
  );
  const navigate = useNavigate();
  const { cart, addToCart } = useContext(CartContext);

  const isInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  const handleRate = (id, rating) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, rating } : p))
    );
  };

  return (
    <section id="features">
      <h2>Featured Products</h2>
      <p>Summer Collection New Modern Design</p>
      <div className="pro-container">
        {products.map((product) => (
          <div className="pro" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="des">
              <span>{product.brand}</span>
              <h5>{product.name}</h5>
              <div className="star">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i
                    key={i}
                    className={
                      i < product.rating
                        ? "fa-solid fa-star"
                        : "fa-regular fa-star"
                    }
                    style={{
                      color: i < product.rating ? "gold" : "lightgray",
                      cursor: "pointer",
                    }}
                    onClick={() => handleRate(product.id, i + 1)}
                  ></i>
                ))}
              </div>
              <h4>Rs.{product.price}</h4>
            </div>

            <div className="row-line">
              <Buttons
                text="Buy Now"
                styleClass="buy-now"
                type="button"
                onClick={() =>
                  navigate("/payment", {
                    state: { totalAmount: product.price },
                  })
                }
              />

              <Buttons
                icon="fa-solid fa-cart-shopping"
                styleClass={`cart ${isInCart(product) ? "in-cart" : ""}`}
                type="button"
                onClick={() => {
                  alert("Added to cart");
                  addToCart(product);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

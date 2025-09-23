import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Buttons from "../buttons/Buttons";
import Bottom from "../Bottom/Bottom";
import "../css/HomePage.css";
import pic from "../../assets/images/main_pic.png";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      {/* Header */}
      <header className="homepage__header">
        <nav className="homepage__nav">
          <h1 className="homepage__logo">Aarush Trade Center</h1>
          <ul className="homepage__auth-links">
            <li className="homepage__auth-item">
              <Link to="/register?form=login">Log In</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="homepage__hero">
        <div className="homepage__details">
          <h2 className="homepage__title">Welcome to Aarush Trade Center –</h2>
          <h3 className="homepage__subtitle">Where Style Meets Comfort</h3>
          <p className="homepage__description">
            Discover the latest trends in fashion with our curated collection of
            stylish, high-quality clothing for every occasion. Whether you're
            looking for everyday essentials or statement pieces, we've got you
            covered.
          </p>
          <p className="homepage__description">
            At Aarush Trade Center, we believe fashion should be fun,
            expressive, and effortless. From elegant dresses and cozy knitwear
            to must-have accessories, each item is handpicked to help you look
            and feel your best.
          </p>

          {/* Social Media */}
          <div className="homepage__social">
            <i
              className="fa-brands fa-facebook"
              aria-label="Facebook"
              style={{ color: "#1877F2", fontSize: "2rem" }}
            />
            <i
              className="fa-brands fa-tiktok"
              aria-label="TikTok"
              style={{
                color: "#fff",
                fontSize: "1.8rem",
                textShadow: `
                  -2px 0 #69C9D0, 
                  2px 0 #EE1D52
                `,
              }}
            />
            <i
              className="fa-brands fa-instagram"
              aria-label="Instagram"
              style={{
                background:
                  "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "2.2rem",
              }}
            />
          </div>

          <div className="homepage__cta">
            <Buttons
              text="Explore"
              styleClass="explore-btn"
              type="button"
              onClick={() => navigate("/explore")}
            />
          </div>
        </div>

        <div className="homepage__image">
          <img src={pic} alt="Fashion showcase" />
        </div>
      </section>

      <Bottom />
    </div>
  );
}

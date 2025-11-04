import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const lists = ["Home", "Shop", "Cart", "Contact"];

  return (
    <header>
      <nav className="navbar">
        <div className="homepage__logo">
          <img src={logo} alt="ATC" />
        </div>

        {!menuOpen && (
          <div className="menu-btn" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </div>
        )}

        <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
          {menuOpen && (
            <li className="close-btn" onClick={() => setMenuOpen(false)}>
              <FaTimes />
            </li>
          )}

          {lists.map((item, index) => (
            <li
              key={index}
              className="nav-item"
              onClick={() => setMenuOpen(false)}
            >
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={item === "Home" ? "active" : ""}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import "../css/Navbar.css";

// export default function Navbar() {
//   const lists = ["Home", "Shop", "Cart", "Contact"];
//   return (
//     <header>
//       <nav className="navbar">
//         <p className="logo">Arush Trade Center</p>
//         <ul className="nav-list">
//           {/* <button id="menu-close" class="fas fa-times"></button> */}
//           {lists.map((item, index) => (
//             <li key={index} className="nav-item">
//               <Link
//                 to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//                 className={item === "Home" ? "active" : ""}
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//           <i className="fa-solid fa-cart-shopping"></i>
//         </ul>
//         {/* <button id="menu-open" class="fas fa-bars"></button> */}
//       </nav>
//     </header>
//   );
// }
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const lists = ["Home", "Shop", "Cart", "Contact"];

  return (
    <header>
      <nav className="navbar">
        <p className="logo">Arush Trade Center</p>

        {/* Hamburger button only shows when menu is closed */}
        {!menuOpen && (
          <div className="menu-btn" onClick={() => setMenuOpen(true)}>
            <FaBars />
          </div>
        )}

        <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
          {/* Close button inside the menu */}
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

import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const info = [
    { name: "Name", value: "Aarush Trade Center" },
    { name: "Address", value: "Bhadrapur - 8" },
    { name: "Time", value: "9:00 AM - 6:00 PM" },
    { name: "Phone", value: "+977 1234567890" },
    { name: "Phone", value: "+977 1234567890" },
  ];

  const list = [
    { label: "About us", path: "/about" },
    { label: "Privacy Information", path: "" },
    { label: "Privacy Policy", path: "" },
    { label: "Terms & Conditions", path: "/terms" },
    { label: "Contact Us", path: "/contact" },
  ];
  return (
    <footer>
      <div className="cols">
        <div className="col1">
          <ul>
            <h2>Contact</h2>
            {info.map((item, index) => (
              <div className="detail" key={index}>
                <strong>{item.name}:</strong> <p>{item.value}</p>
              </div>
            ))}
          </ul>
        </div>
        <div className="col2">
          <ul>
            <h2>About</h2>
            {list.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.8095234948864!2d88.07650067400382!3d26.558386375230427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e5af706e2510c5%3A0x8e356c80d901d258!2sAarush%20Trade%20Center%20_%20Cherry%20Collection&#39;s!5e0!3m2!1sen!2snp!4v1725001927902!5m2!1sen!2snp"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
            title="Aarush Trade Center Location"
          ></iframe>
        </div>
      </div>

      <div className="row">
        <h2>Follow Us</h2>
        <div className="social-media">
          <i
            class="fa-brands fa-facebook"
            style={{ color: "#1877F2", fontSize: "2rem" }}
          ></i>
          <i
            class="fa-brands fa-tiktok"
            style={{
              color: "#fff",
              fontSize: "1.8rem",
              textShadow: `
      -2px 0 #69C9D0, 
      2px 0 #EE1D52  

    `,
            }}
          ></i>
          <i
            class="fa-brands fa-instagram"
            style={{
              background:
                "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "2.2rem",
            }}
          ></i>
        </div>
      </div>
    </footer>
  );
}

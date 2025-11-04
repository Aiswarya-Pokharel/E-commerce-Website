import React, { useState } from "react";
import "../css/Contact.css";
import { useNavigate } from "react-router-dom";
import Buttons from "../buttons/Buttons";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been sent.`);
    setForm({ name: "", email: "", message: "" });
  };

  const handleClose = () => {
    navigate("/explore");
  };

  return (
    <div className="contact-form-container">
      <button className="cross-btn" onClick={handleClose}>
        &times;
      </button>

      <h2>Send Us a Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <Buttons styleClass="send-msg" text="Send" type="submit" />
      </form>
    </div>
  );
}

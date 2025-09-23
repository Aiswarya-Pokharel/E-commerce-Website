import React from "react";
import "./Buttons.css";

export default function Buttons({
  text,
  onClick,
  styleClass,
  disabled,
  type = "button",
  style,
  icon,
}) {
  return (
    <button
      className={`btn ${styleClass}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      style={style}
    >
      {icon && <i className={icon}></i>}
      {text}
    </button>
  );
}

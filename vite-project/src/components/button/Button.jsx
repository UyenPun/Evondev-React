import React from "react";
import "./Button.scss";

// Style components
const Button = (props) => {
  return (
    <button className={`button ${props.className || ""}`}>
      {props.children}
    </button>
  );
};

export default Button;

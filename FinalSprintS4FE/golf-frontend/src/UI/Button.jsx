import React from "react";
import classes from "./Button.module.css";

const Button = ({ label, style, handleClick, icon }) => {
  return (
    <button className={style.button} onClick={handleClick}>
      <span className={style.icon}>{icon}</span>
      <span> {label}</span>
    </button>
  );
};

export default Button;

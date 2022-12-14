import React from "react";
import classes from "./Input.module.css";

const InputState = ({ label, input, onChange }) => {
  return (
    <div className={`${classes.input}`}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default InputState;

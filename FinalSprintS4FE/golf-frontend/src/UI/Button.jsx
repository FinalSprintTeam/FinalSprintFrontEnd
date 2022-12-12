import React from 'react'
import classes from './Button.module.css'

const Button = ({label, style, onClick, icon}) => {
  return (
    <button  className={style.button} >
         <span className={style.icon}>
            {icon}
        </span>
        <span> {label}</span>
    </button>
  );
}

export default Button;



{/* <button className={style.button} onClick = {onClick}>
        <span className={style.icon}>
            {icon}
        </span>
        <span> {label}</span>
    </button> */}
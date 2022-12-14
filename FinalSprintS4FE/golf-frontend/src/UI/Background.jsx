import React from "react";
import classes from "./BackGround.module.css";

const BackGround = (props) => {
  return <div className={classes.background}>{props.children}</div>;
};

export default BackGround;

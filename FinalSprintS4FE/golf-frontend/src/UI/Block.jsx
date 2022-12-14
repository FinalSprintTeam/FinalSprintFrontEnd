import React from "react";
import classes from "./Block.module.css";

const Block = (props) => {
  return (
    <div className={classes.block}>
      <div className={classes.backgroundImg}>{props.children}</div>
    </div>
  );
};

export default Block;

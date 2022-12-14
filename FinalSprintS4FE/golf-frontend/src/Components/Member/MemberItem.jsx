import React from "react";
import classes from "./MemberItem.module.css";

const MemberItem = ({ id, name }) => {
  return (
    <li key={id} className={classes["member-item"]}>
      <h2>{name}</h2>
    </li>
  );
};

export default MemberItem;

import React from "react";
import classes from "./TournamentItem.module.css";

const TournamentItem = ({ id, name }) => {
  return (
    <li key={id} className={classes["tournament-item"]}>
      <h2>{name}</h2>
    </li>
  );
};

export default TournamentItem;

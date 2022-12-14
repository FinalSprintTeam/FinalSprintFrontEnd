import React from "react";
import classes from "./TournamentDetailsBody.module.css";
import Card from "../../../UI/Card";

function TournamentDetailsBody({ startDate, endDate, location, entryFee }) {
  return (
    <div className={classes.body}>
      <div className={classes.grid}>
        <Card>
          <div className={classes.body}>
            <h2>
              {" "}
              <span className={`${classes.badge} ${classes["badge--primary"]}`}>
                {startDate}
              </span>
            </h2>
            <h2>
              {" "}
              <span className={`${classes.badge} ${classes["badge--primary"]}`}>
                {endDate}
              </span>
            </h2>
          </div>
        </Card>
        <Card>
          <div className={classes.body}>
            <h2>
              {" "}
              <span className={`${classes.badge} ${classes["badge--primary"]}`}>
                {location}
              </span>
            </h2>
            <h2>
              {" "}
              <span className={`${classes.badge} ${classes["badge--primary"]}`}>
                {entryFee}
              </span>
            </h2>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default TournamentDetailsBody;

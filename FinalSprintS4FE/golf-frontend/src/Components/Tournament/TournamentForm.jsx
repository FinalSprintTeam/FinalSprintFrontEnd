import classes from "./TournamentForm.module.css";
import React, { useRef, useState, Fragment, useContext } from "react";
import Input from "../../UI/Input";
import TournamentContext from "../Context/tournament-context";

const TournamentForum = (props) => {
  const entryFeeInput = useRef();
  const nameInput = useRef();
  const startDateInput = useRef();
  const endDateInput = useRef();
  const locationInput = useRef();
  const tourCtx = useContext(TournamentContext);

  const nameValue = props.valueName;
  const startDateValue = props.valueStartDate;
  const endDateValue = props.valueEndDate;
  const locationValue = props.valueLocation;
  const entryFeeValue = props.valueEntryFee;
  

  const submitHandler = (event) => {
    event.preventDefault();
    props.displayTable();
    const tournamentObj = {
      name: nameInput.current.value,
      startDate: startDateInput.current.value,
      endDate: endDateInput.current.value,
      location: locationInput.current.value,
      entryFee: entryFeeInput.current.value,
    };
    
    props.editCheck ? tourCtx.updateTournament(tournamentObj) : tourCtx.postTournament(tournamentObj);
    
    
  };

  return (
    <Fragment>
      <h1 className={classes.title}>{props.title}</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={nameInput}
          label="Tournament Name"
          input={{
            id: "name",
            type: "text",
            min: "1",
            max: "255",
            placeholder: "Tournament Name",
            defaultValue: nameValue
          
          }}
        />

        <Input
          ref={startDateInput}
          label="Start Date"
          input={{
            id: "startdate",
            type: "date",
            defaultValue: startDateValue
            
          }}
        />

        <Input
          ref={endDateInput}
          label="End Date"
          input={{
            id: "enddate",
            type: "date",
            defaultValue: endDateValue
          }}
        />

        <Input
          ref={locationInput}
          label="Location"
          input={{
            id: "location",
            type: "text",
            min: "1",
            max: "255",
            placeholder: "Tournament Location",
            defaultValue: locationValue
          
          }}
        />

        <Input
          style="number"
          ref={entryFeeInput}
          label="Entry Fee"
          input={{
            id: "fee",
            type: "number",
            min: "1",
            max: "100000",
            step: "1",
            defaultValue: entryFeeValue 
          }}
        />
        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default TournamentForum;

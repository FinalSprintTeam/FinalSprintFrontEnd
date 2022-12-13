import classes from "./TournamentForm.module.css";
import React, { useRef, useState, Fragment } from "react";
import Input from '../../UI/Input'


const Forum = () => {
  const [amountIsValid, SetAmountIsValid] = useState(true);
  const entryFeeInput = useRef();
  const nameInput = useRef();
  const startDateInput = useRef();
  const endDateInput = useRef();
  const locationInput= useRef();

  const submitHandler = (event) => {
    event.preventDefault();
  }


  return (
    <Fragment>
     <h1 className={classes.title}>Add Tournament</h1>   
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
        }}
        
        />


        <Input
        ref={startDateInput}
        label="Start Date"
        input={{
          id: "startdate",
          type: "date",
        }}       
        />


        <Input
        ref={endDateInput}
        label="End Date"
        input={{
          id: "enddate",
          type: "date",
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
        }}
        
        />
        
      <Input
       style = "number"
        ref={entryFeeInput}
        label="Entry Fee"
        input={{
          id: "fee",
          type: "number",
          min: "1",
          max: "100000",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Submit</button>
    
    </form>
    </Fragment>
  );
};


export default Forum;

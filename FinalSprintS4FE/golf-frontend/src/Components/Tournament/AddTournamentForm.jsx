import useInput from '../../hooks/use-input';
import classes from './AddTournamentForm.module.css'
import { infoToast, successToast } from "../../utils/hooks/useToast";
import TournamentContext from '../Context/tournament-context';
import React, { useContext } from "react";

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');
const isValidNumber = (value) => value.trim() >=0;
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
today = `${yyyy}-${mm}-${dd}`
const isValidDate =(value) => value >= today;
// const isValidEndDate = (value) => value >= startDateValue

const AddTournamentForm = (props) => {
    const tourCtx = useContext(TournamentContext);
  const {
    value: NameValue,
    isValid: NameIsValid,
    hasError: NameHasError,
    valueChangeHandler: NameChangeHandler,
    inputBlurHandler: NameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: startDateValue,
    isValid: startDateIsValid,
    hasError: startDateHasError,
    valueChangeHandler: startDateChangeHandler,
    inputBlurHandler: startDateBlurHandler,
    reset: resetStartDate,
  } = useInput(isValidDate || isNotEmpty);

  const {
    value: endDateValue,
    isValid: endDateIsValid,
    hasError: endDateHasError,
    valueChangeHandler: endDateChangeHandler,
    inputBlurHandler: endDateBlurHandler,
    reset: resetEndDate,
  } = useInput(isValidDate || isNotEmpty);
  const {
    value: locationValue,
    isValid: locationValid,
    hasError: locationHasError,
    valueChangeHandler: locationChangeHandler,
    inputBlurHandler: locationBlurHandler,
    reset: resetLocation,
  } = useInput(isNotEmpty);


  const {
    value: entryFeeValue,
    isValid: entryFeeValid,
    hasError: entryFeeHasError,
    valueChangeHandler: entryFeeChangeHandler,
    inputBlurHandler: entryFeeBlurHandler,
    reset: resetEntryFee,
  } = useInput(isNotEmpty && isValidNumber);

  let formIsValid = false;

  if (NameIsValid && startDateIsValid && locationValid && endDateIsValid && entryFeeValid) {
    formIsValid = true;
  }
 

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.displayTable();
    const tournamentObj = {
      name: NameValue,
      startDate: startDateValue,
      endDate: endDateValue,
      location: locationValue,
      entryFee: entryFeeValue,
    };

    if (props.editCheck) {
      tourCtx.updateTournament(tournamentObj);
      infoToast("Tournament Updated");
    } else {
      tourCtx.postTournament(tournamentObj);
      successToast("Tournament Added");
    }

    console.log('Submitted!');
    console.log(NameValue, startDateValue, endDateValue, locationValue, entryFeeValue);

    resetName();
    resetStartDate();
    resetEndDate();
    resetLocation();
    resetEntryFee();
  };

  const NameClasses = NameHasError ? `${classes["form-control"]} ${classes.invalid}` : classes["form-control"];
  const startDateClasses = startDateHasError ? `${classes["form-control"]} ${classes.invalid}` : classes["form-control"];
  const endDateClasses = endDateHasError ? `${classes["form-control"]} ${classes.invalid}` : classes["form-control"];
  const locationClasses = NameHasError ? `${classes["form-control"]} ${classes.invalid}` : classes["form-control"];
  const entryFeeClasses = entryFeeHasError ? `${classes["form-control"]} ${classes.invalid}` : classes["form-control"];

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes["control-group"]}>
        <div className={NameClasses}>
          <label htmlFor='name'>Tournament Name</label>
          <input
            type='text'
            id='name'
            value={NameValue}
            onChange={NameChangeHandler}
            onBlur={NameBlurHandler}
            placeholder ="Tournament"
          />
          {NameHasError && <p className= {classes["error-text"]}>Please enter a Tournament name.</p>}
        </div>
        <div className={startDateClasses}>
          <label htmlFor='startdate'>Start Date</label>
          <input
            type='date'
            id='startdate'
            value={startDateValue}
            onChange={startDateChangeHandler}
            onBlur={startDateBlurHandler}
          />
          {startDateHasError && <p className={classes["error-text"]}>Please enter a tournament start date.</p>}
        </div>

        <div className={endDateClasses}>
          <label htmlFor='enddate'>End Date</label>
          <input
            type='date'
            id='enddate'
            value={endDateValue}
            onChange={endDateChangeHandler}
            onBlur={endDateBlurHandler}
          />
          {endDateHasError && <p className={classes["error-text"]}>Please enter a tournament end date.</p>}
        </div>
      </div>
      <div className={locationClasses}>
        <label htmlFor='location'>Location</label>
        <input
          type='text'
          id='location'
          value={locationValue}
          onChange={locationChangeHandler}
          onBlur={locationBlurHandler}
          placeholder ="Location"
        />
        {locationHasError && <p className={classes["error-text"]}>Please enter a tournament location.</p>}
      </div>


      <div className={entryFeeClasses}>
        <label htmlFor='entryfee'>Entry Fee</label>
        <input
          FormControl="form-group col-md-8 offset-md-2"
          type='number'
          id='entryfee'
          value={entryFeeValue}
          onChange={entryFeeChangeHandler}
          onBlur={entryFeeBlurHandler}
          step = "1"
          placeholder='Entry Fee'
        />
        {entryFeeHasError && <p className={classes["error-text"]}>Please enter a Entry Fee.</p>}
      </div>
      <div className= {classes["form-actions "]}>
        <button className={classes.button}  disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default AddTournamentForm;
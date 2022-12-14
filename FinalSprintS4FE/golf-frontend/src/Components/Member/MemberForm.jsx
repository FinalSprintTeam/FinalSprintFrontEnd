import classes from "./MemberForm.module.css";
import React, { useRef, useState, Fragment, useContext } from "react";
import Input from "../../UI/Input";
import MemberContext from "../Context/member-context";
import InputState from "../../UI/InputState";

const MemberForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [joinDate, setJoinDate] = useState("");

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");
  const [country, setCountry] = useState("");

  const [membership, setMembership] = useState("");

  const memberCtx = useContext(MemberContext);

  const submitHandler = (event) => {
    event.preventDefault();

    // VALIDATIONS WILL GO HERE - IMPORTANT //

    // End of validations

    // Create objects that match model for back-end
    const memberObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      joinDate: joinDate,
    };

    const addressObj = {
      streetAddress: address,
      city: city,
      province: province,
      postalCode: postal,
      country: country,
    };

    memberCtx.postMember(memberObj, addressObj, membership);
  };

  return (
    <Fragment>
      <h1 className={classes.title}>Add Members</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <h2>Member Info</h2>
          <div className="form-group row">
            <InputState
              formControl="form-group col-md-8 offset-md-2"
              label="First Name: "
              input={{
                id: "fName",
                type: "text",
                min: "1",
                max: "255",
                placeholder: "First Name",
              }}
              onChange={setFirstName}
            />
          </div>
          <div className="form-group row">
            <InputState
              formControl="form-group col-md-8 offset-md-2"
              label="Last Name: "
              input={{
                id: "lName",
                type: "text",
                min: "1",
                max: "255",
                placeholder: "Last Name",
              }}
              onChange={setLastName}
            />
          </div>
          <div className="form-group row">
            <InputState
              formControl="form-group col-md-8 offset-md-2"
              label="Email:"
              input={{
                id: "email",
                type: "text",
                min: "1",
                max: "255",
                placeholder: "Email",
              }}
              onChange={setEmail}
            />
          </div>
          <div className="form-group row">
            <InputState
              formControl="form-group col-md-8 offset-md-2"
              label="Join Date"
              input={{
                id: "joinDate",
                type: "date",
              }}
              onChange={setJoinDate}
            />
          </div>
        </div>
        <hr />
        <div>
          <h2>Address Info</h2>
          <div className="form-group row">
            <InputState
              formControl="form-group col-md-8 offset-md-2"
              label="Street Address:"
              input={{
                id: "strAddr",
                type: "text",
                min: "1",
                max: "255",
                placeholder: "Street Address",
              }}
              onChange={setAddress}
            />
          </div>
          <div className="form-group row">
            <InputState
              formControl="form-group col-md-3  offset-md-2"
              label="City:"
              input={{
                id: "city",
                type: "text",
                min: "1",
                max: "255",
                placeholder: "City",
              }}
              onChange={setCity}
            />
            <InputState
              formControl="form-group col-md-2"
              label="Province:"
              input={{
                id: "province",
                type: "text",
                min: "1",
                max: "255",
                placeholder: "Province",
              }}
              onChange={setProvince}
            />
            <InputState
              formControl="form-group col-md-3"
              label="Postal:"
              input={{
                id: "pcode",
                type: "text",
                min: "1",
                max: "7",
                placeholder: "Postal",
              }}
              onChange={setPostal}
            />
          </div>
          <div className="form-row">
            <InputState
              formControl="form-group col-md-8 offset-md-2"
              label="Country:"
              input={{
                id: "country",
                type: "text",
                min: "1",
                max: "255",
                placeholder: "Country",
              }}
              onChange={setCountry}
            />
          </div>
        </div>

        {/* Maybe dropdown radio*/}

        {/* Membership */}
        <hr />
        <div className={classes.radioControl}>
          <h2>Membership Type:</h2>
          <div>
            <label htmlFor="memType">Normal</label>
            <input
              type="radio"
              name="memType"
              value="Normal"
              onChange={(e) => setMembership(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="memType">Premium</label>
            <input
              type="radio"
              name="memType"
              value="Premium"
              onChange={(e) => setMembership(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="memType">Trial</label>
            <input
              type="radio"
              name="memType"
              value="Premium"
              onChange={(e) => setMembership(e.target.value)}
            />
          </div>
        </div>

        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default MemberForm;

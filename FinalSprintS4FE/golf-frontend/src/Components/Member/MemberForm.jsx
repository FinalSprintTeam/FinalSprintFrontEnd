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
          <InputState
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
          <InputState
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
          <InputState
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
          <InputState
            label="Join Date"
            input={{
              id: "joinDate",
              type: "date",
            }}
            onChange={setJoinDate}
          />
        </div>
        <div>
          <h2>Address Info</h2>
          <InputState
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
          <InputState
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
            label="Postal Code:"
            input={{
              id: "pcode",
              type: "text",
              min: "1",
              max: "7",
              placeholder: "Postal Code",
            }}
            onChange={setPostal}
          />
          <InputState
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

        {/* Maybe dropdown radio*/}

        {/* Membership */}
        <div>
          <h3>Membership Type:</h3>
          <input
            type="radio"
            name="memType"
            value="Normal"
            onChange={(e) => setMembership(e.target.value)}
          />{" "}
          Normal
          <input
            type="radio"
            name="memType"
            value="Premium"
            onChange={(e) => setMembership(e.target.value)}
          />{" "}
          Premium
          <input
            type="radio"
            name="memType"
            value="Premium"
            onChange={(e) => setMembership(e.target.value)}
          />{" "}
          Trial
        </div>

        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default MemberForm;

import classes from "./MemberForm.module.css";
import React, { useRef, useState, Fragment, useContext } from "react";
import Input from "../../UI/Input";
import MemberContext from "../Context/member-context";

const MemberForm = () => {
  const [city, setCity] = useState("");
  const cityInput = useRef();
  const countryInput = useRef();
  const postalCodeInput = useRef();
  const provinceInput = useRef();
  const streetAdrInput = useRef();

  const emailInput = useRef();
  const firstNameInput = useRef();
  const joinDateInput = useRef();
  const lastNameInput = useRef();

  const membershipInput = useRef();

  const memberCtx = useContext(MemberContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const memberObj = {
      firstName: firstNameInput.current.value,
      joinDate: joinDateInput.current.value,
      email: emailInput.current.value,
      lastName: lastNameInput.current.value,
    };

    const addressObj = {
      streetAddress: streetAdrInput.current.value,
      city: streetAdrInput.current.value,
      postalCode: streetAdrInput.current.value,
      province: streetAdrInput.current.value,
      country: streetAdrInput.current.value,
    };

    memberCtx.postMember(memberObj, addressObj, "Normal");
  };

  const [value, setValue] = React.useState(false);

  const handleChange = () => {
    setValue(!value);
  };

  return (
    <Fragment>
      <h1 className={classes.title}>Add Members</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          label="City:"
          input={{
            id: 'city',
            type: 'text',
            min: '1',
            max: '255',
            placeholder: 'City',
          }}
        />
        <Input
          ref={countryInput}
          label="Country:"
          input={{
            id: 'country',
            type: 'text',
            min: '1',
            max: '255',
            placeholder: 'Country',
          }}
        />
        <Input
          ref={postalCodeInput}
          label="Postal Code:"
          input={{
            id: 'pcode',
            type: 'text',
            min: '1',
            max: '7',
            placeholder: 'Postal Code',
          }}
        />

        {/* Maybe dropdown radio*/}
        <Input
          ref={provinceInput}
          label="Province:"
          input={{
            id: 'province',
            type: 'text',
            min: '1',
            max: '255',
            placeholder: 'Province',
          }}
        />

        <Input
          ref={streetAdrInput}
          label="Street Address:"
          input={{
            id: 'strAddr',
            type: 'text',
            min: '1',
            max: '255',
            placeholder: 'Street Address',
          }}
        />

        <Input
          ref={emailInput}
          label="Email:"
          input={{
            id: 'email',
            type: 'text',
            min: '1',
            max: '255',
            placeholder: 'Email',
          }}
        />
        <Input
          ref={firstNameInput}
          label="First Name: "
          input={{
            id: 'fName',
            type: 'text',
            min: '1',
            max: '255',
            placeholder: 'First Name',
          }}
        />

        <Input
          ref={lastNameInput}
          label="Last Name: "
          input={{
            id: 'lName',
            type: 'text',
            min: '1',
            max: '255',
            placeholder: 'Last Name',
          }}
        />

        <Input
          ref={joinDateInput}
          label="Join Date"
          input={{
            id: 'joinDate',
            type: 'date',
          }}
        />

        {/* Membership */}
        <div>
          <h3>Membership Type:</h3>
          <input
            ref={membershipInput}
            type='radio'
            name='memType'
            value='Normal'
            onChange={(e) => setValue(e.target.value)}
          />{' '}
          Normal
          <input
            ref={membershipInput}
            type='radio'
            name='memType'
            value='Premium'
            onChange={(e) => setValue(e.target.value)}
          />{' '}
          Premium
          <input
            ref={membershipInput}
            type='radio'
            name='memType'
            value='Premium'
            onChange={(e) => setValue(e.target.value)}
          />{' '}
          Trial
        </div>

        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default MemberForm;

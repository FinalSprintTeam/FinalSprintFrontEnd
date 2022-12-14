import classes from './MemberForm.module.css';
import React, { useRef, useState, Fragment, useContext } from 'react';
import Input from '../../UI/Input';
import MemberContext from '../Context/member-context';

const Forum = () => {
  const cityInput = useRef();
  const countryInput = useRef();
  const postalCodeInput = useRef();
  const provinceInput = useRef();
  const streetAdrInput = useRef();

  const emailInput = useRef();
  const firstNameInput = useRef();
  const joinDateInput = useRef();
  const lastNameInput = useRef();

  const startDateInput = useRef();
  const endDateInput = useRef();
  const locationInput = useRef();

  const membershipInput = useRef();

  const memberCtx = useContext(MemberContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const memberObj = {
      firstName: firstNameInput.current.value,
      startDate: startDateInput.current.value,
      endDate: endDateInput.current.value,
      location: locationInput.current.value,
    };

    // memberCtx.postMember(memberObj);
  };

  return (
    <Fragment>
      <h1 className={classes.title}>Add Members</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={cityInput}
          label='City:'
          input={{
            id: 'name',
            type: 'text',
            min: '1',
            max: '255',
            placeholder: 'City',
          }}
        />
        <Input
          ref={countryInput}
          label='Country:'
          input={{
            id: 'name',
            type: 'text',
            min: '1',
            max: '255',
            placeholder: 'Country',
          }}
        />
        <Input
          ref={postalCodeInput}
          label='Postal Code:'
          input={{
            id: 'name',
            type: 'text',
            min: '1',
            max: '7',
            placeholder: 'Postal Code',
          }}
        />

        {/* Maybe dropdown radio*/}
        <Input
          ref={provinceInput}
          label='Province:'
          input={{
            id: 'name',
            type: 'text',
            min: '1',
            max: '255',
            placeholder: 'Province',
          }}
        />

        <Input
          ref={streetAdrInput}
          label='Street Address:'
          input={{
            id: 'name',
            type: 'text',
            min: '1',
            max: '255',
            placeholder: 'Street Address',
          }}
        />

        <Input
          ref={emailInput}
          label='Email:'
          input={{
            id: 'name',
            type: 'text',
            min: '1',
            max: '255',
            placeholder: 'Email',
          }}
        />
        <Input
          ref={firstNameInput}
          label='First Name: '
          input={{
            id: 'name',
            type: 'text',
            min: '1',
            max: '255',
            placeholder: 'First Name',
          }}
        />

        <Input
          ref={lastNameInput}
          label='Last Name: '
          input={{
            id: 'name',
            type: 'text',
            min: '1',
            max: '255',
            placeholder: 'Last Name',
          }}
        />

        <Input
          ref={joinDateInput}
          label='Join Date'
          input={{
            id: 'enddate',
            type: 'date',
          }}
        />

        {/* Membership */}

        <Input
          ref={membershipInput}
          label='Membership: '
          input={{
            id: 'name',
            type: 'radio',
            min: '1',
            max: '255',
            placeholder: 'Last Name',
          }}
        />

        <button>Submit</button>
      </form>
    </Fragment>
  );
};

export default Forum;

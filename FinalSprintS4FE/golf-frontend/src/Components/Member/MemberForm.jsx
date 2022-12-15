import classes from './MemberForm.module.css';
import React, { useRef, useState, Fragment, useContext } from 'react';
import Input from '../../UI/Input';
import MemberContext from '../Context/member-context';
import InputState from '../../UI/InputState';

const MemberForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [joinDate, setJoinDate] = useState('');

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postal, setPostal] = useState('');
  const [country, setCountry] = useState('');

  const [membership, setMembership] = useState('');

  const memberCtx = useContext(MemberContext);

  const firstNameValue = props.valueFirstName || '';
  const LastNameValue = props.valueLastName || '';
  const emailValue = props.valueEmail || '';
  const joinDateValue = props.valueJoinDate || '';

  const strAddrValue = props.valueStrAddr || '';
  const cityValue = props.valueCity || '';
  const provinceValue = props.valueProvince || '';
  const postalValue = props.valuePostalCode || '';
  const countryValue = props.valueCountry || '';

  const submitHandler = (event) => {
    event.preventDefault();

    // VALIDATIONS WILL GO HERE - IMPORTANT //
    if (
      firstName ||
      lastName ||
      email ||
      joinDate ||
      address ||
      city ||
      province ||
      postal ||
      country ||
      membership === ''
    ) {
    }
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

    props.editCheck
      ? memberCtx.updateMember(memberObj, addressObj, membership)
      : memberCtx.postMember(memberObj, addressObj, membership);
  };

  return (
    <Fragment>
      <h1 className={classes.title}>Add Members</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <h2>Member Info</h2>
          <div className='form-group row'>
            <InputState
              formControl='form-group col-md-8 offset-md-2'
              label='First Name: '
              input={{
                id: 'fName',
                type: 'text',
                min: '1',
                max: '255',
                placeholder: 'First Name',
                defaultValue: `${firstNameValue}`,
              }}
              onChange={setFirstName}
            />
          </div>
          <div className='form-group row'>
            <InputState
              formControl='form-group col-md-8 offset-md-2'
              label='Last Name: '
              input={{
                id: 'lName',
                type: 'text',
                min: '1',
                max: '255',
                placeholder: 'Last Name',
                defaultValue: `${LastNameValue}`,
              }}
              onChange={setLastName}
            />
          </div>
          <div className='form-group row'>
            <InputState
              formControl='form-group col-md-8 offset-md-2'
              label='Email:'
              input={{
                id: 'email',
                type: 'text',
                min: '1',
                max: '255',
                placeholder: 'Email',
                defaultValue: `${emailValue}`,
              }}
              onChange={setEmail}
            />
          </div>
          <div className='form-group row'>
            <InputState
              formControl='form-group col-md-8 offset-md-2'
              label='Join Date'
              input={{
                id: 'joinDate',
                type: 'date',
                defaultValue: `${joinDateValue}`,
              }}
              onChange={setJoinDate}
            />
          </div>
        </div>
        <hr />
        <div>
          <h2>Address Info</h2>
          <div className='form-group row'>
            <InputState
              formControl='form-group col-md-8 offset-md-2'
              label='Street Address:'
              input={{
                id: 'strAddr',
                type: 'text',
                min: '1',
                max: '255',
                placeholder: 'Street Address',
                defaultValue: `${strAddrValue}`,
              }}
              onChange={setAddress}
            />
          </div>
          <div className='form-group row'>
            <InputState
              formControl='form-group col-md-3  offset-md-2'
              label='City:'
              input={{
                id: 'city',
                type: 'text',
                min: '1',
                max: '255',
                placeholder: 'City',
                defaultValue: `${cityValue}`,
              }}
              onChange={setCity}
            />
            <InputState
              formControl='form-group col-md-2'
              label='Province:'
              input={{
                id: 'province',
                type: 'text',
                min: '1',
                max: '255',
                placeholder: 'Province',
                defaultValue: `${provinceValue}`,
              }}
              onChange={setProvince}
            />
            <InputState
              formControl='form-group col-md-3'
              label='Postal:'
              input={{
                id: 'pcode',
                type: 'text',
                min: '1',
                max: '7',
                placeholder: 'Postal',
                defaultValue: `${postalValue}`,
              }}
              onChange={setPostal}
            />
          </div>
          <div className='form-row'>
            <InputState
              formControl='form-group col-md-8 offset-md-2'
              label='Country:'
              input={{
                id: 'country',
                type: 'text',
                min: '1',
                max: '255',
                placeholder: 'Country',
                defaultValue: `${countryValue}`,
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
            <label htmlFor='memType'>Normal</label>
            <input
              type='radio'
              name='memType'
              value='Normal'
              onChange={(e) => setMembership(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='memType'>Premium</label>
            <input
              type='radio'
              name='memType'
              value='Premium'
              onChange={(e) => setMembership(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='memType'>Trial</label>
            <input
              type='radio'
              name='memType'
              value='Premium'
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

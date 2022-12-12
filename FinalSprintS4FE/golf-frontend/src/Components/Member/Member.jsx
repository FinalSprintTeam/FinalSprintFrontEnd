import React, { useState } from 'react';
import { Fragment } from 'react';
import MembersHeader from '../Layout/MembersHeader';
import Block from '../../UI/Block';
import Button from '../../UI/Button';
import classes from '../../UI/Button.module.css';
import { IoIosAddCircle } from 'react-icons/io';
import { MdViewList } from 'react-icons/md';
import '../../UI/Member.css';

function MemberItems(props) {
  const [open, setOpen] = useState(false);
}

const Member = () => {
  const iconAdd = <IoIosAddCircle />;
  const iconView = <MdViewList />;
  const buttonGroup = (
    <div className={classes.btnContainer}>
      <Button label='Add Member' style={classes} icon={iconAdd} />
      <Button label='View Members ' style={classes} icon={iconView} />
    </div>
  );

  return (
    <section>
      <Fragment>
        <Block>
          <div>
            <MembersHeader title='Members' button={buttonGroup} />
          </div>
        </Block>
      </Fragment>
      <form>
        <div id='names'>
          <div>
            <label for='fname'>First Name: </label>
            <input type={'text'} id={'fname'} name={'fname'} />
          </div>
          <div>
            <label for='lname'>Last Name: </label>
            <input type={'text'} id={'lname'} name={'lname'} />
          </div>
        </div>
        <div>
          <p4>Address</p4>
        </div>
        <div id='address'>
          <div>
            <label for='street'>Street:</label>
            <input type={'text'} id={'street'} name={'street'} />
          </div>
          <div>
            <label for='city'>City:</label>
            <input type={'city'} id={'city'} name={'city'} />
          </div>
          <div>
            <label for='postalCode'>Postal Code:</label>
            <input type={'postalCode'} id={'postalCode'} name={'postalCode'} />
          </div>
          <div>
            <label for='province'>Province:</label>
            <input type={'province'} id={'province'} name={'province'} />
          </div>
          <div>
            <label for='country'>Country</label>
            <input type={'country'} id={'country'} name={'country'} />
          </div>
        </div>

        <div id='email'>
          <div>
            <label for='email'>Email:</label>
            <input type={'text'} id={'email'} name={'email'} />
          </div>
          <div>
            <input type='radio' id='prem' name='membership_name' value='prem' />
            <label for='prem'>Premium</label>
            <input type='radio' id='norm' name='membership_name' value='norm' />
            <label for='norm'>Normal</label>
            <input
              type='radio'
              id='trial'
              name='membership_name'
              value='trial'
            />
            <label for='trial'>Trial</label>
          </div>
        </div>
        <input type='submit' value='Submit' />
      </form>
    </section>
  );
};

export default Member;

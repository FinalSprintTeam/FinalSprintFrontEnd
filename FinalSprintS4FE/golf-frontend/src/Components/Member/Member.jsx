import React from 'react';
import { Fragment } from 'react';
import MembersHeader from '../Layout/MembersHeader';
import Block from '../../UI/Block';
import Button from '../../UI/Button';
import classes from '../../UI/Button.module.css';
import { IoIosAddCircle } from 'react-icons/io';
import { MdViewList } from 'react-icons/md';

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
    <Fragment>
      <Block>
        <MembersHeader title='Members' button={buttonGroup} />
      </Block>
    </Fragment>
  );
};

export default Member;

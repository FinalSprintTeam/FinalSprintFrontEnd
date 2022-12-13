import { Fragment } from 'react';
import { useState } from 'react';
import classes from './Header.module.css';

const MembersHeader = ({ title, button }) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>{title}</h1>
        {button}
      </header>
    </Fragment>
  );
};

export default MembersHeader;

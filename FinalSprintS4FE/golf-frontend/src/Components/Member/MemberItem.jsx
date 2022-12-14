import React from 'react';
import classes from './MemberItem.module.css';

const MemberItem = ({ id, firstName }) => {
  return (
    <li key={id} className={classes['member-item']}>
      <h2>{firstName[0]}</h2>
    </li>
  );
};

export default MemberItem;

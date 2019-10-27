import React from 'react';
import classes from './card.module.css';

const Card = (props) => {
  const { children } = props;
  return <div className={classes.Card}>{children}</div>;
};

export default Card;

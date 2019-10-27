import React from 'react';

import classes from './Icon.module.css';

const icon = ({ type }) => (
  <img src={require(`../../assets/images/${type}.svg`)} alt={type} className={classes.Icon} />
);

export default icon;

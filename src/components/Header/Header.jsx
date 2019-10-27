import React from 'react';

import classes from './Header.module.css';

const header = ({ color }) => (
  <header className={classes.Header} style={{ backgroundColor: color }}>
    <h1>Weather</h1>
  </header>
);

export default header;

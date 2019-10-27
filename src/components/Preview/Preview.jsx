import React from 'react';

import classes from './Preview.module.css';

const previewImage = require('../../assets/images/Preview.svg');

const preview = () => <img src={previewImage} alt="Weather App Icon" className={classes.Preview} />;

export default preview;

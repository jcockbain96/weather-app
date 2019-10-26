import React from 'react';

import classes from './WeatherDetails.module.css';
import Temperature from './Temperature';
import Description from './Description';
import Date from './Date';
import Icon from '../../elements/Icon';

const WeatherDetails = (props) => {
  const { data } = props;
  return (
    <div className={classes.WeatherDetailsWrapper}>
      <div className={classes.WeatherIconWrapper}>
        <Icon type={data.description} />
      </div>
      <div className={classes.WeatherDataWrapper}>
        <Temperature degrees={data.temperature} />
        <Description type={data.description} />
        <Date />
      </div>
    </div>
  );
};

export default WeatherDetails;

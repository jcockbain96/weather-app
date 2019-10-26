import React from 'react';
import Header from '../../components/Header';
import Card from '../../elements/Card';
import WeatherDetails from '../../components/WeatherDetails';

import classes from './app.module.css';

const App = () => {
  const temperatureData = {
    description: 'Clouds',
    temperature: 20,
  };
  return (
    <div className={classes.appWrapper}>
      <Header />
      <main className={classes.appMain}>
        <Card>
          <WeatherDetails data={temperatureData} />
        </Card>
      </main>
    </div>
  );
};

export default App;

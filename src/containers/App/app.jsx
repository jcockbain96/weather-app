import React, { useState } from 'react';

import { MoonLoader } from 'react-spinners';

import axios from 'axios';
import Header from '../../components/Header';
import Card from '../../elements/Card';
import WeatherDetails from '../../components/WeatherDetails';
import SearchBar from '../../components/SearchBar';
import Preview from '../../components/Preview';
import ErrorNotice from '../../components/ErrorNotice';

import classes from './App.module.css';
import assetMapping from '../../assets/assetMapping.json';

import { openWeatherKey } from '../../config';

const App = () => {
  const [searchBarInput, setSearchInput] = useState('');
  const [weatherDetails, setWeatherDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const tryAgainHandler = () => {
    setSearchInput('');
    setWeatherDetails({});
    setError(false);
  };

  const searchBarHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const setWeather = () => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchBarInput}&appid=${openWeatherKey}&units=metric`,
      )
      .then((response) => {
        const newWeatherDetails = {
          temperature: response.data.main.temp,
          description: response.data.weather[0].main,
        };
        setWeatherDetails(newWeatherDetails);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  };

  let cardContent = <Preview />;
  if (loading) {
    cardContent = <MoonLoader />;
  } else if (error) {
    cardContent = <ErrorNotice onClickHandler={tryAgainHandler} />;
  } else if (weatherDetails.temperature && weatherDetails.description) {
    cardContent = <WeatherDetails data={weatherDetails} />;
  }

  return (
    <div className={classes.appWrapper}>
      <Header
        color={
          assetMapping.colors[
            // Set header color based on weather condition; if error, set color to red
            error ? 'error' : weatherDetails.description
          ]
        }
      />
      <main className={classes.appMain}>
        <SearchBar
          value={searchBarInput}
          onChangeHandler={searchBarHandler}
          onClickHandler={setWeather}
          error={error}
        />
        <Card>{cardContent}</Card>
      </main>
    </div>
  );
};

export default App;

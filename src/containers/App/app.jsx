import React, { useState } from 'react';

import { MoonLoader } from 'react-spinners';

import axios from 'axios';
import Header from '../../components/Header';
import Card from '../../elements/Card';
import WeatherDetails from '../../components/WeatherDetails';
import SearchBar from '../../components/SearchBar';
import Preview from '../../components/Preview';
import ErrorNotice from '../../components/ErrorNotice';

import classes from './app.module.css';

const apiKey = process.env.API_KEY;

const App = () => {
  const [searchBarInput, setSearchInput] = useState('');
  const [weatherDetails, setWeatherDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);

  //     const result = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${searchBarInput}&appid=${apiKey}&units=metric`,
  //     );
  //     setWeatherDetails({
  //       temperature: result.data.main.temp,
  //       description: result.data.weather[0].main,
  //     });
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [searchBarInput]);

  const tryAgainHandler = () => {
    setSearchInput('');
    setWeatherDetails({});
    setError(false);
  };

  const setWeather = () => {
    setLoading(true);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchBarInput}&appid=${apiKey}&units=metric`,
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

  const searchBarHandler = (e) => {
    setSearchInput(e.target.value);
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
      <Header />
      <main className={classes.appMain}>
        <SearchBar
          value={searchBarInput}
          onChangeHandler={searchBarHandler}
          onClickHandler={setWeather}
        />
        {/* <Card>
          <WeatherDetails data={weatherDetails} />
        </Card> */}
        <Card>{cardContent}</Card>
      </main>
    </div>
  );
};

export default App;

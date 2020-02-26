import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentForecastCard from './CurrentForecastCard';
import DailyForecastList from './DailyForecastList';
import CitySearchForm from './CitySearchForm';
import CityHeader from './CityHeader';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import './ForecastContainer.css';

const NUM_DAILY_FORECAST = 5;

function ForecastContainer() {
  const [location, setLocation] = useState();
  // {
  //   city: 'Austin',
  //   coords: [30.2672, -97.7431]
  // }
  const [currentForecast, setCurrentForecast] = useState({});
  const [dailyForecast, setDailyForecast] = useState([]);
  const [timezone, setTimezone] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  async function getWeatherData() {
    try {
      const URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.DARK_SKY_API}/${location.coords[0]},${location.coords[1]}`;
      const res = await axios.get(URL);
      const { data } = res;
      const { currently } = data;
      const daily = data.daily.data;
      setCurrentForecast({
        temp: currently.temperature,
        summary: currently.summary,
        icon: currently.icon
      });
      let forecastWeek = [];
      for (let i = 0; i < NUM_DAILY_FORECAST; i++) {
        forecastWeek.push({
          low: daily[i].temperatureMin,
          high: daily[i].temperatureMax,
          icon: daily[i].icon,
          timestamp: daily[i].time
        });
      }
      setDailyForecast(forecastWeek);
      setTimezone(data.timezone);
      setErrorMessage(null);
      setIsLoading(false);
    } catch (err) {
      debugger;
      console.log(err);
      // setErrorMessage('Something went wrong. Please try again later');
    }
    // finally {
    //   setIsLoading(false);
    // }
  }

  function getGeolocation() {
    function geoSuccess(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      async function getCityFromCoords(lat, long) {
        try {
          const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?types=place&access_token=${process.env.MAPBOX_API}`;
          const res = await axios.get(URL);
          const { data } = res;
          setLocation({ city: data.features[0].text, coords: [lat, long] });
        } catch (err) {
          // setErrorMessage('Something went wrong. Please try again later');
        }
        // finally {
        //   setIsLoading(false);
        // }
      }
      getCityFromCoords(latitude, longitude);
    }
    function geoError() {
      setErrorMessage('Please allow your location or enter a city above.');
      setIsLoading(false);
    }
    if (!navigator.geolocation) {
      setErrorMessage(
        'Geolocation is not supported by your browser. Please enter a city above.'
      );
      setIsLoading(false);
    } else {
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    }
  }
  useEffect(() => {
    getGeolocation();
  }, []);

  useEffect(() => {
    getWeatherData();
  }, [location]);

  function updateLocation(newCity) {
    setIsLoading(true);
    setLocation(newCity);
  }

  let result;
  if (errorMessage && !isLoading) {
    result = <ErrorMessage errorMessage={errorMessage} />;
  } else if (isLoading) {
    result = <Loader />;
  } else {
    result = (
      <>
        <CityHeader city={location.city} />
        <CurrentForecastCard currentForecast={currentForecast} />
        <DailyForecastList dailyForecast={dailyForecast} timezone={timezone} />
      </>
    );
  }

  return (
    <div className="ForecastContainer">
      <CitySearchForm updateLocation={updateLocation} />
      <hr />
      {result}
    </div>
  );
}

export default ForecastContainer;

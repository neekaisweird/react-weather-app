import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentForecastCard from './CurrentForecastCard';
import DailyForecastList from './DailyForecastList';
import CitySearchForm from './CitySearchForm';
import CityHeader from './CityHeader';
import Loader from './Loader';
import './ForecastContainer.css';

const NUM_DAILY_FORECAST = 5;

function ForecastContainer() {
  const [location, setLocation] = useState({
    city: 'Seattle',
    coords: [47.6062, -122.3321]
  });
  const [currentForecast, setCurrentForecast] = useState({});
  const [dailyForecast, setDailyForecast] = useState([]);
  const [timezone, setTimezone] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getWeatherData();
  }, [location]);

  function updateLocation(newCity) {
    setIsLoading(true);
    setLocation(newCity);
  }
  return (
    <div className="ForecastContainer">
      <CitySearchForm updateLocation={updateLocation} />
      <hr />
      <CityHeader city={location.city} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CurrentForecastCard currentForecast={currentForecast} />
          <DailyForecastList
            dailyForecast={dailyForecast}
            timezone={timezone}
          />
        </>
      )}
    </div>
  );
}

export default ForecastContainer;

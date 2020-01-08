import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentForecastCard from './CurrentForecastCard';
import DailyForecastList from './DailyForecastList';
import CityHeader from './CityHeader';

const NUM_DAILY_FORECAST = 5;

function ForecastContainer() {
  const [location, setLocation] = useState({
    city: 'Seattle',
    coords: [-122.3321, 47.6062]
  });
  const [currentForecast, setCurrentForecast] = useState({});
  const [dailyForecast, setDailyForecast] = useState([]);
  const [timezone, setTimezone] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getWeatherData() {
    try {
      const URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.DARK_SKY_API}/${location.coords[1]},${location.coords[0]}`;
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

  function updateLocation(city) {
    setLocation(city);
  }
  return (
    <div>
      {isLoading ? (
        <h4>Loading weather data for you! </h4>
      ) : (
        <div>
          <CityHeader city={location.city} updateLocation={updateLocation} />
          <CurrentForecastCard currentForecast={currentForecast} />
          <DailyForecastList
            dailyForecast={dailyForecast}
            timezone={timezone}
          />
        </div>
      )}
    </div>
  );
}

export default ForecastContainer;

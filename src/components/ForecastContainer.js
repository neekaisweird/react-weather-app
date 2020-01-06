import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentForecastCard from './CurrentForecastCard';
import DailyForecastList from './DailyForecastList';

const NUM_DAILY_FORECAST = 5;
const URL =
  'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/fecaf02b90b8464d188ad74aae2bcb9e/47.6062,-122.3321';

function ForecastContainer() {
  const [currentForecast, setCurrentForecast] = useState({});
  const [dailyForecast, setDailyForecast] = useState([]);
  const [timezone, setTimezone] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getWeatherData() {
    try {
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
  }, []);
  return (
    <div>
      {isLoading ? (
        <h4>Loading weather data for you! </h4>
      ) : (
        <div>
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

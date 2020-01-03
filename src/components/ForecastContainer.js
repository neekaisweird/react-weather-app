import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentForecastCard from './CurrentForecastCard';
import DailyForecastList from './DailyForecastList';

const URL =
  'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/fecaf02b90b8464d188ad74aae2bcb9e/47.6062,-122.3321';

function ForecastContainer() {
  const [currentForecast, setCurrentForecast] = useState({});
  const [dailyForecast, setDailyForecast] = useState([]);
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
      setDailyForecast([
        {
          low: daily[0].temperatureMin,
          high: daily[0].temperatureMax,
          icon: daily[0].icon
        },
        {
          low: daily[1].temperatureMin,
          high: daily[1].temperatureMax,
          icon: daily[1].icon
        },
        {
          low: daily[2].temperatureMin,
          high: daily[2].temperatureMax,
          icon: daily[2].icon
        },
        {
          low: daily[3].temperatureMin,
          high: daily[3].temperatureMax,
          icon: daily[3].icon
        },
        {
          low: daily[4].temperatureMin,
          high: daily[4].temperatureMax,
          icon: daily[4].icon
        }
      ]);
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
          <DailyForecastList dailyForecast={dailyForecast} />
        </div>
      )}
    </div>
  );
}

export default ForecastContainer;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
const URL =
  'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/fecaf02b90b8464d188ad74aae2bcb9e/47.6062,-122.3321';

function ForecastContainer() {
  const [currentTemp, setCurrentTemp] = useState(null);
  async function getWeatherData() {
    const res = await axios.get(URL);

    const { data } = res;
    console.log(data);
    setCurrentTemp(data.currently.temperature);
  }

  useEffect(() => {
    getWeatherData();
  }, []);
  return (
    <div>
      <h1>Forecast Container</h1>
      <p>{currentTemp}°F</p>
    </div>
  );
}

export default ForecastContainer;

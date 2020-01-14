import React from 'react';
import './CurrentForecastTemp.css';

function CurrentForecastTemp({ temp }) {
  return <h1 className="CurrentForecastTemp">{Math.round(temp)}°F</h1>;
}

export default CurrentForecastTemp;

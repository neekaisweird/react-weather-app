import React from 'react';
import './DailyForecastLow.css';

function DailyForecastLow({ low }) {
  return <div className="DailyForecastLow">{Math.round(low)}°F</div>;
}

export default DailyForecastLow;

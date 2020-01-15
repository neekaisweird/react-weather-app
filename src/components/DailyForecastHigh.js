import React from 'react';
import './DailyForecastHigh.css';

function DailyForecastHigh({ high }) {
  return <div className="DailyForecastHigh">{Math.round(high)} / </div>;
}

export default DailyForecastHigh;

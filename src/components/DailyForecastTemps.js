import React from 'react';
import './DailyForecastTemps.css';

function DailyForecastTemps({ high, low }) {
  return (
    <div className="DailyForecastTemps">
      <span style={{ fontSize: '1.4rem' }}>{Math.round(high)} / </span>
      <span>{Math.round(low)}°F</span>
    </div>
  );
}

export default DailyForecastTemps;

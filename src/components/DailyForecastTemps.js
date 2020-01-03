import React from 'react';

function DailyForecastTemps({ high, low }) {
  return (
    <div>
      <p>High: {Math.round(high)}°F</p>
      <p>Low: {Math.round(low)}°F</p>
    </div>
  );
}

export default DailyForecastTemps;

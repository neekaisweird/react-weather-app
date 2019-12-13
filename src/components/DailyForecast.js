import React from 'react';

function DailyForecast({ day, high, low }) {
  return (
    <div>
      <h2>{day}</h2>
      <p>High: {high}</p>
      <p>Low: {low}</p>
    </div>
  );
}

export default DailyForecast;

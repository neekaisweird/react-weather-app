import React from 'react';
import DailyForecastCard from './DailyForecastCard';

function DailyForecastList({ dailyForecast, timezone }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {dailyForecast.map(d => (
        <DailyForecastCard key={d.day} dailyForecast={d} timezone={timezone} />
      ))}
    </div>
  );
}

export default DailyForecastList;

import React from 'react';
import DailyForecastCard from './DailyForecastCard';

function DailyForecastList({ dailyForecast }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {dailyForecast.map(d => (
        <DailyForecastCard dailyForecast={d} />
      ))}
    </div>
  );
}

export default DailyForecastList;

import React from 'react';
import DailyForecastCard from './DailyForecastCard';

function DailyForecastList({ dailyForecast, currentDay }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {dailyForecast.map(d => (
        <DailyForecastCard dailyForecast={d} currentDay={currentDay} />
      ))}
    </div>
  );
}

export default DailyForecastList;

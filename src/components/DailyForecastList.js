import React from 'react';
import DailyForecastCard from './DailyForecastCard';
import './DailyForecastList.css';

function DailyForecastList({ dailyForecast, timezone }) {
  return (
    <div className="DailyForecastList">
      {dailyForecast.map(d => (
        <DailyForecastCard
          key={d.timestamp}
          dailyForecast={d}
          timezone={timezone}
        />
      ))}
    </div>
  );
}

export default DailyForecastList;

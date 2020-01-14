import React from 'react';
import ForecastIcon from './ForecastIcon';
import DailyForecastTemps from './DailyForecastTemps';
import DailyForecastDay from './DailyForecastDay';
import './DailyForecastCard.css';

function DailyForecastCard({ dailyForecast, timezone }) {
  return (
    <div className="DailyForecastCard">
      <DailyForecastDay
        timezone={timezone}
        timestamp={dailyForecast.timestamp}
      />
      <ForecastIcon icon={dailyForecast.icon} />
      <DailyForecastTemps high={dailyForecast.high} low={dailyForecast.low} />
    </div>
  );
}

export default DailyForecastCard;

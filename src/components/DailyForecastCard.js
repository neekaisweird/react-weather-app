import React from 'react';
import ForecastIcon from './ForecastIcon';
import DailyForecastHigh from './DailyForecastHigh';
import DailyForecastLow from './DailyForecastLow';
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
      <div>
        <DailyForecastHigh high={dailyForecast.high} />
        <DailyForecastLow low={dailyForecast.low} />
      </div>
    </div>
  );
}

export default DailyForecastCard;

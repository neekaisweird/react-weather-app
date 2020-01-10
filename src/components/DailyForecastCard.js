import React from 'react';
import ForecastIcon from './ForecastIcon';
import DailyForecastTemps from './DailyForecastTemps';
import DailyForecastDayOfTheWeek from './DailyForecastDayOfTheWeek';

function DailyForecastCard({ dailyForecast, timezone }) {
  return (
    <div>
      <DailyForecastDayOfTheWeek
        timezone={timezone}
        timestamp={dailyForecast.timestamp}
      />
      <ForecastIcon icon={dailyForecast.icon} />
      <DailyForecastTemps high={dailyForecast.high} low={dailyForecast.low} />
    </div>
  );
}

export default DailyForecastCard;

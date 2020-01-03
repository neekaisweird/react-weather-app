import React from 'react';
import CurrentForecastIcon from './CurrentForecastIcon';
import DailyForecastTemps from './DailyForecastTemps';

function DailyForecastCard({ dailyForecast }) {
  return (
    <div>
      <CurrentForecastIcon icon={dailyForecast.icon} />
      <DailyForecastTemps high={dailyForecast.high} low={dailyForecast.low} />
    </div>
  );
}

export default DailyForecastCard;

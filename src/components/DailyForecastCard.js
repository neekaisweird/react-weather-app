import React from 'react';
import CurrentForecastIcon from './CurrentForecastIcon';
import DailyForecastTemps from './DailyForecastTemps';
import DailyForecastDayOfTheWeek from './DailyForecastDayOfTheWeek';

function DailyForecastCard({ dailyForecast, currentDay }) {
  return (
    <div>
      <DailyForecastDayOfTheWeek currentDay={currentDay} />
      <CurrentForecastIcon icon={dailyForecast.icon} />
      <DailyForecastTemps high={dailyForecast.high} low={dailyForecast.low} />
    </div>
  );
}

export default DailyForecastCard;

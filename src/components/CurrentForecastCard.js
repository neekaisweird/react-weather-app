import React from 'react';
import CurrentForecastSummary from './CurrentForecastSummary';
import ForecastIcon from './ForecastIcon';
import CurrentForecastTemp from './CurrentForecastTemp';

function CurrentForecastCard({ currentForecast }) {
  return (
    <div>
      <h3>Currently: </h3>
      <ForecastIcon icon={currentForecast.icon} />
      <CurrentForecastSummary summary={currentForecast.summary} />
      <CurrentForecastTemp temp={currentForecast.temp} />
    </div>
  );
}

export default CurrentForecastCard;

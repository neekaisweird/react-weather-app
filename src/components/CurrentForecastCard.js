import React from 'react';
import CurrentForecastSummary from './CurrentForecastSummary';
import CurrentForecastIcon from './CurrentForecastIcon';
import CurrentForecastTemp from './CurrentForecastTemp';

function CurrentForecastCard({ currentForecast }) {
  return (
    <div>
      <h3>Currently: </h3>
      <CurrentForecastIcon icon={currentForecast.icon} />
      <CurrentForecastSummary summary={currentForecast.summary} />
      <CurrentForecastTemp temp={currentForecast.temp} />
    </div>
  );
}

export default CurrentForecastCard;

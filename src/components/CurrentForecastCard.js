import React from 'react';
import CurrentForecastSummary from './CurrentForecastSummary';
import ForecastIcon from './ForecastIcon';
import CurrentForecastTemp from './CurrentForecastTemp';
import './CurrentForecastCard.css';

function CurrentForecastCard({ currentForecast }) {
  return (
    <div className="CurrentForecastCard">
      <ForecastIcon icon={currentForecast.icon} />
      <CurrentForecastSummary summary={currentForecast.summary} />
      <CurrentForecastTemp temp={currentForecast.temp} />
    </div>
  );
}

export default CurrentForecastCard;

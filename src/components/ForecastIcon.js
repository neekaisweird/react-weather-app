import React from 'react';
import './ForecastIcon.css';

function ForecastIcon({ icon }) {
  return (
    <img
      className="ForecastIcon"
      alt={icon}
      src={`src/assets/images/${icon}.svg`}
    />
  );
}

export default ForecastIcon;

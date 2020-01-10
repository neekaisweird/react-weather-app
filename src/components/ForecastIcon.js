import React from 'react';

function ForecastIcon({ icon }) {
  return (
    <span>
      <img alt={icon} src={`src/assets/images/${icon}.svg`} />
    </span>
  );
}

export default ForecastIcon;

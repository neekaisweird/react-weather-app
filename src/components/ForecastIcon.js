import React from 'react';

function ForecastIcon({ icon }) {
  return (
    <img
      style={{ verticalAlign: 'middle' }}
      alt={icon}
      src={`src/assets/images/${icon}.svg`}
    />
  );
}

export default ForecastIcon;

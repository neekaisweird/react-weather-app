import React from 'react';

function CurrentForecastIcon({ icon }) {
  return (
    <span>
      <img src={`src/assets/images/${icon}.svg`} />
    </span>
  );
}

export default CurrentForecastIcon;

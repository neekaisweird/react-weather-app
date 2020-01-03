import React from 'react';

function CurrentForecastTemp({ temp }) {
  return <h1>{Math.round(temp)}°F</h1>;
}

export default CurrentForecastTemp;

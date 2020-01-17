import React from 'react';
import './CityHeader.css';

function CityHeader({ city }) {
  return (
    <div className="CityHeader">
      <h1>Forecast for {city}</h1>
    </div>
  );
}

export default CityHeader;

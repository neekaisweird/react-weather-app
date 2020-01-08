import React from 'react';
import CitySearchForm from './CitySearchForm';

function CityHeader({ city, updateLocation }) {
  return (
    <div>
      <h1>Forecast for {city}</h1>
      <CitySearchForm updateLocation={updateLocation} />
    </div>
  );
}

export default CityHeader;

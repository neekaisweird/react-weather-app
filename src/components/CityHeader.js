import React from 'react';
import CitySearchForm from './CitySearchForm';

function CityHeader({ city, updateCity }) {
  return (
    <div>
      <h1>Forecast for {city}</h1>
      <CitySearchForm updateCity={updateCity} />
    </div>
  );
}

export default CityHeader;

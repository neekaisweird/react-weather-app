import React from 'react';
import CitySearchForm from './CitySearchForm';
import './CityHeader.css';

function CityHeader({ city, updateLocation }) {
  return (
    <div className="CityHeader">
      <h1>Forecast for {city}</h1>
      <CitySearchForm updateLocation={updateLocation} />
    </div>
  );
}

export default CityHeader;

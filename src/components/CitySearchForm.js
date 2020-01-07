import React from 'react';
import useInputState from '../hooks/useInputState';

function CitySearchForm({ updateCity }) {
  const [city, handleCityChange, resetCity] = useInputState('');
  function handleSubmit(e) {
    e.preventDefault();
    updateCity(city);
    resetCity();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter a new city"
        />
        <button>Go</button>
      </form>
    </div>
  );
}

export default CitySearchForm;

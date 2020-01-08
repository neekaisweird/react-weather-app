import React from 'react';
import useInputState from '../hooks/useInputState';
import axios from 'axios';

function CitySearchForm({ updateLocation }) {
  const [city, handleCityChange, resetCity] = useInputState('');
  async function getCityLocation(city) {
    try {
      const URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?types=place&access_token=${process.env.MAPBOX_API}`;
      const res = await axios.get(URL);
      const { data } = res;
      console.log(data);
      updateLocation({
        city: data.features[0].text,
        coords: data.features[0].center
      });
    } catch (err) {
      console.log(err);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    getCityLocation(city);
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

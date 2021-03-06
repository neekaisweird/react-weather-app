import React, { useEffect } from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '../../node_modules/@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

function CitySearchForm({ updateLocation }) {
  function citySubmission({ result }) {
    updateLocation({
      city: result.text,
      coords: result.center.slice().reverse() // reverse to match [lat, long]
    });
    geocoder.clear();
  }

  // mapbox autocomplete search feature
  mapboxgl.accessToken = process.env.MAPBOX_API;
  var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'place',
    placeholder: 'Enter a new city'
  });

  useEffect(() => {
    geocoder.addTo('#geocoder-container');
    geocoder.on('result', citySubmission);
  }, []);

  return (
    <div style={{ padding: '2rem 0' }}>
      <form id="geocoder-container"></form>
    </div>
  );
}

export default CitySearchForm;

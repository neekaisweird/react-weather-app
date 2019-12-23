import React from 'react';
import DailyForecastList from './DailyForecastList';

function App() {
  return (
    <div>
      <h1>
        Forecast for <span>Seattle</span>
      </h1>
      <DailyForecastList />
    </div>
  );
}

export default App;

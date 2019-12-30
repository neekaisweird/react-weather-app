import React from 'react';
import DailyForecastList from './DailyForecastList';
import ForecastContainer from './ForecastContainer';

function App() {
  return (
    <div>
      <h1>
        Forecast for <span>Seattle</span>
      </h1>
      <ForecastContainer />
      {/* <DailyForecastList /> */}
    </div>
  );
}

export default App;

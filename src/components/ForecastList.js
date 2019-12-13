import React from 'react';
import DailyForecast from './DailyForecast';
import { FAKE_FORECAST } from '../constants';

function ForecastList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {FAKE_FORECAST.map(f => {
        return <DailyForecast day={f.day} high={f.high} low={f.low} />;
      })}
    </div>
  );
}

export default ForecastList;

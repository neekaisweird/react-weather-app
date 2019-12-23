import React from 'react';
import DailyForecastCard from './DailyForecastCard';
import { FAKE_FORECAST } from '../constants';

function DailyForecastList() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {FAKE_FORECAST.map(f => {
        return <DailyForecastCard day={f.day} high={f.high} low={f.low} />;
      })}
    </div>
  );
}

export default DailyForecastList;

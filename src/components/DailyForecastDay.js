import React from 'react';
import getDay from '../helpers/timestampConverter';

function DailyForecastDay({ timestamp, timezone }) {
  return <div>{getDay(timestamp, timezone)}</div>;
}

export default DailyForecastDay;

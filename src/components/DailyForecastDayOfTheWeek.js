import React from 'react';
import getDay from '../helpers/timestampConverter';

function DailyForecastDayOfTheWeek({ timestamp, timezone }) {
  return <div>{getDay(timestamp, timezone)}</div>;
}

export default DailyForecastDayOfTheWeek;

import React from 'react';
import getDay from '../helpers/timestampConverter';

function DailyForecastDayOfTheWeek({ currentDay }) {
  return <div>{getDay(currentDay.timestamp, currentDay.timezone)}</div>;
}

export default DailyForecastDayOfTheWeek;

import React from 'react';
import getDay from '../helpers/timestampConverter';
import './DailyForecastDay.css';

function DailyForecastDay({ timestamp, timezone }) {
  return <div className="DailyForecastDay">{getDay(timestamp, timezone)}</div>;
}

export default DailyForecastDay;

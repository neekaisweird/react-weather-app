import moment from 'moment';
import 'moment-timezone';

const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export default (timestamp, timezone) =>
  daysOfTheWeek[
    moment
      .unix(timestamp)
      .tz(timezone)
      .day()
  ];

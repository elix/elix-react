import { wrap } from './ElixComponentWrapper.jsx';
import { default as ElixCalendarMonthNavigator } from 'elix/src/CalendarMonthNavigator.js';


export default class CalendarMonthNavigator extends wrap({
  base: ElixCalendarMonthNavigator,
  events: [
    'date-changed'
  ]
}) {}

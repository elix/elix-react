import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/CalendarMonthNavigator.js';

export default class CalendarMonthNavigator extends wrap({
  base,
  events: [
    'date-changed'
  ],
  tag: 'elix-calendar-month-navigator'
}) {}

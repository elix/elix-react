import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/CalendarMonthYearHeader.js';

export default class CalendarMonthYearHeader extends wrap({
  base,
  events: [
    'date-changed'
  ]
}) {}

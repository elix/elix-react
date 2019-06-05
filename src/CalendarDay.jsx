import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/CalendarDay.js';

export default class CalendarDay extends wrap({
  base,
  events: [
    'date-changed'
  ]
}) {}

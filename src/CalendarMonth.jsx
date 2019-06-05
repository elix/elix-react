import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/CalendarMonth.js';

export default class CalendarMonth extends wrap({
  base,
  events: [
    'date-changed'
  ]
}) {}

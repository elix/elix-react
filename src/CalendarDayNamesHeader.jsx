import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/CalendarDayNamesHeader.js';

export default class CalendarDayNamesHeader extends wrap({
  base,
  tag: 'elix-calendar-day-names-header'
}) {}

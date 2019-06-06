import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/DateInput.js';

export default class DateInput extends wrap({
  base,
  events: [
    'date-changed',
    'input'
  ],
  tag: 'elix-date-input'
}) {}

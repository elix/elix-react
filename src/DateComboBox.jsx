import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/DateComboBox.js';

export default class DateComboBox extends wrap({
  base,
  events: [
    'closed',
    'date-changed',
    'opened',
    'opened-changed'
  ]
}) {}

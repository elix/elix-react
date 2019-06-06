import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/FilterComboBox.js';

export default class FilterComboBox extends wrap({
  base,
  events: [
    'closed',
    'opened',
    'opened-changed',
    'selected-index-changed'
  ],
  tag: 'elix-filter-combo-box'
}) {}

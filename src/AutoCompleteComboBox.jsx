import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/AutoCompleteComboBox.js';

export default class AutoCompleteComboBox extends wrap({
  base,
  events: [
    'closed',
    'opened',
    'opened-changed',
    'selected-index-changed'
  ]
}) {}

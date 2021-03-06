import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/ListComboBox.js';

export default class ListComboBox extends wrap({
  base,
  events: [
    'closed',
    'opened',
    'opened-changed',
    'selected-index-changed'
  ],
  tag: 'elix-list-combo-box'
}) {}

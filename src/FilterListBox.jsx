import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/FilterListBox.js';

export default class FilterListBox extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ]
}) {}

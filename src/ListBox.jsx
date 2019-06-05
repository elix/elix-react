import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/ListBox.js';

export default class ListBox extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ]
}) {}

import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/TabStrip.js';

export default class TabStrip extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ]
}) {}

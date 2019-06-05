import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/SlidingPages.js';

export default class SlidingPages extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ]
}) {}

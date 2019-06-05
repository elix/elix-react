import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/Modes.js';

export default class Modes extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ]
}) {}

import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/SlidingStage.js';

export default class SlidingStage extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ]
}) {}

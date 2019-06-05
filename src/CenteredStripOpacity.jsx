import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/CenteredStripOpacity.js';

export default class CenteredStripOpacity extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ]
}) {}

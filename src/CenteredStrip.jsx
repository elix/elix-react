import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/CenteredStrip.js';

export default class CenteredStrip extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ]
}) {}

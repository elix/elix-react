import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/Overlay.js';

export default class Overlay extends wrap({
  base,
  events: [
    'closed',
    'opened',
    'opened-changed'
  ]
}) {}

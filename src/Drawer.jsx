import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/Drawer.js';

export default class Drawer extends wrap({
  base,
  events: [
    'closed',
    'effect-phase-changed',
    'opened',
    'opened-changed'
  ]
}) {}

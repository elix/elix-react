import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/Toast.js';

export default class Toast extends wrap({
  base,
  events: [
    'closed',
    'effect-phase-changed',
    'opened',
    'opened-changed'
  ],
  tag: 'elix-toast'
}) {}

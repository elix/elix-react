import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/PopupSource.js';

export default class PopupSource extends wrap({
  base,
  events: [
    'closed',
    'opened',
    'opened-changed'
  ],
  tag: 'elix-popup-source'
}) {}

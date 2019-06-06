import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/PopupButton.js';

export default class PopupButton extends wrap({
  base,
  events: [
    'closed',
    'opened',
    'opened-changed'
  ],
  tag: 'elix-popup-button'
}) {}

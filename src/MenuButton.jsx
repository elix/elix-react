import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/MenuButton.js';

export default class MenuButton extends wrap({
  base,
  events: [
    'closed',
    'menu-item-selected',
    'opened',
    'opened-changed'
  ],
  tag: 'elix-menu-button'
}) {}
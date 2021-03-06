import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/HamburgerMenuButton.js';

export default class HamburgerMenuButton extends wrap({
  base,
  events: [
    'closed',
    'opened',
    'opened-changed'
  ],
  tag: 'elix-hamburger-menu-button'
}) {}

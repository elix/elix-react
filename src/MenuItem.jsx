import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/MenuItem.js';

export default class MenuItem extends wrap({
  base,
  events: [
    'selected-changed'
  ],
  tag: 'elix-menu-item'
}) {}

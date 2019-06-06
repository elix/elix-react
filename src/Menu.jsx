import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/Menu.js';

export default class Menu extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ],
  tag: 'elix-menu'
}) {}

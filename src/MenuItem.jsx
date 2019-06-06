import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/MenuItem.js';

export default class MenuItem extends wrap({
  base,
  tag: 'elix-menu-item'
}) {}

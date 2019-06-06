import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/MenuSeparator.js';

export default class MenuSeparator extends wrap({
  base,
  tag: 'elix-menu-separator'
}) {}

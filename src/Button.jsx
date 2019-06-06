import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/Button.js';

export default class Button extends wrap({
  base,
  tag: 'elix-button'
}) {}

import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/Input.js';

export default class Input extends wrap({
  base,
  events: [
    'input'
  ]
}) {}

import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/AutoSizeTextarea.js';

export default class AutoSizeTextarea extends wrap({
  base,
  events: [
    'change',
    'input'
  ],
  tag: 'elix-auto-size-textarea'
}) {}

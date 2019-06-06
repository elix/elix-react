import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/AutoCompleteInput.js';

export default class AutoCompleteInput extends wrap({
  base,
  events: [
    'input'
  ],
  tag: 'elix-auto-complete-input'
}) {}

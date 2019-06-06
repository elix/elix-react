import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/ComboBox.js';

export default class ComboBox extends wrap({
  base,
  events: [
    'closed',
    'opened',
    'opened-changed'
  ],
  tag: 'elix-combo-box'
}) {}

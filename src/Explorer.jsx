import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/Explorer.js';

export default class Explorer extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ],
  tag: 'elix-explorer'
}) {}

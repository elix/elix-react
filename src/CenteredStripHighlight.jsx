import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/CenteredStripHighlight.js';

export default class CenteredStripHighlight extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ],
  tag: 'elix-centered-strip-highlight'
}) {}

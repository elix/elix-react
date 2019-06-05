import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/ExpandableSection.js';

export default class ExpandableSection extends wrap({
  base,
  events: [
    'closed',
    'opened',
    'opened-changed'
  ]
}) {}

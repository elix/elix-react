import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/ExpandablePanel.js';

export default class ExpandablePanel extends wrap({
  base,
  events: [
    'closed',
    'effect-phase-changed',
    'opened',
    'opened-changed'
  ],
  tag: 'elix-expandable-panel'
}) {}

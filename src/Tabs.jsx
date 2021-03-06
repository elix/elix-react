import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/Tabs.js';

export default class Tabs extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ],
  tag: 'elix-tabs'
}) {}

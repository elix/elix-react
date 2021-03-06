import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/PullToRefresh.js';

export default class PullToRefresh extends wrap({
  base,
  events: [
    'refreshing-changed'
  ],
  tag: 'elix-pull-to-refresh'
}) {}

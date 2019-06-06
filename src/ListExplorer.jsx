import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/ListExplorer.js';

export default class ListExplorer extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ],
  tag: 'elix-list-explorer'
}) {}

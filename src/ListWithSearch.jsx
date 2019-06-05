import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/ListWithSearch.js';

export default class ListWithSearch extends wrap({
  base,
  events: [
    'selected-index-changed'
  ]
}) {}

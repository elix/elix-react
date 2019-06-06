import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/DropdownList.js';

export default class DropdownList extends wrap({
  base,
  events: [
    'closed',
    'items-changed',
    'menu-item-selected',
    'opened',
    'opened-changed',
    'selected-index-changed'
  ],
  tag: 'elix-dropdown-list'
}) {}

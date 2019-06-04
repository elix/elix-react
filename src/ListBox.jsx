import { wrap } from './ElixComponentWrapper.jsx';
import ListBox from 'elix/src/ListBox.js';


export default class extends wrap({
  base: ListBox,
  events: [
    'selected-index-changed'
  ]
}) {}

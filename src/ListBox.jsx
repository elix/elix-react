import { wrap } from './ElixComponentWrapper.jsx';
import { default as ElixListBox } from 'elix/src/ListBox.js';


export default class ListBox extends wrap({
  base: ElixListBox,
  events: [
    'selected-index-changed'
  ]
}) {}

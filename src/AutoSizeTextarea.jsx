import { wrap } from './ElixComponentWrapper.jsx';
import { default as ElixAutoSizeTextarea } from 'elix/src/AutoSizeTextarea.js';


export default class AutoSizeTextarea extends wrap({
  base: ElixAutoSizeTextarea,
  events: [
    'change',
    'input'
  ]
}) {}

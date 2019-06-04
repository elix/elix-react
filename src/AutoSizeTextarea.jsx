import { wrap } from './ElixComponentWrapper.jsx';
import AutoSizeTextarea from 'elix/src/AutoSizeTextarea.js';


export default class extends wrap({
  base: AutoSizeTextarea,
  events: [
    'change',
    'input'
  ]
}) {}

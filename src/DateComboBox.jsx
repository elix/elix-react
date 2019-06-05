import { wrap } from './ElixComponentWrapper.jsx';
import { default as ElixDateComboBox } from 'elix/src/DateComboBox.js';


export default class DateComboBox extends wrap({
  base: ElixDateComboBox,
  events: [
    'date-changed'
  ]
}) {}

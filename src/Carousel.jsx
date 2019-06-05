import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/Carousel.js';


export default class Carousel extends wrap({
  base,
  events: [
    'selected-index-changed'
  ]
}) {}

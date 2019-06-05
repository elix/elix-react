import { wrap } from './ElixComponentWrapper.jsx';
import { default as ElixCarousel } from 'elix/src/Carousel.js';


export default class Carousel extends wrap({
  base: ElixCarousel,
  events: [
    'selected-index-changed'
  ]
}) {}

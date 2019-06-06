import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/CarouselSlideshow.js';

export default class CarouselSlideshow extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ],
  tag: 'elix-carousel-slideshow'
}) {}

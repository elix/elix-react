import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/CarouselWithThumbnails.js';

export default class CarouselWithThumbnails extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ],
  tag: 'elix-carousel-with-thumbnails'
}) {}

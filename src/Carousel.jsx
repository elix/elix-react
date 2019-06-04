import { wrap } from './ElixComponentWrapper.jsx';
import Carousel from 'elix/src/Carousel.js';


export default class extends wrap({
  base: Carousel,
  events: [
    'selected-index-changed'
  ],
  roles: [
    'proxyRole'
  ]
}) {}

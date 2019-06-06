import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/Slideshow.js';

export default class Slideshow extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ],
  tag: 'elix-slideshow'
}) {}

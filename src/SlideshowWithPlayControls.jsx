import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/SlideshowWithPlayControls.js';

export default class SlideshowWithPlayControls extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ],
  tag: 'elix-slideshow-with-play-controls'
}) {}

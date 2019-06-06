import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/OverlayFrame.js';

export default class OverlayFrame extends wrap({
  base,
  tag: 'elix-overlay-frame'
}) {}

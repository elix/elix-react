import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/ArrowDirectionButton.js';

export default class ArrowDirectionButton extends wrap({
  base,
  tag: 'elix-arrow-direction-button'
}) {}

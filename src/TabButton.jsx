import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/TabButton.js';

export default class TabButton extends wrap({
  base,
  tag: 'elix-tab-button'
}) {}

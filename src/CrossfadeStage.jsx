import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/CrossfadeStage.js';

export default class CrossfadeStage extends wrap({
  base,
  events: [
    'items-changed',
    'selected-index-changed'
  ],
  tag: 'elix-crossfade-stage'
}) {}

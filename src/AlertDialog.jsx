import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/AlertDialog.js';

export default class AlertDialog extends wrap({
  base,
  events: [
    'closed',
    'opened',
    'opened-changed'
  ],
  tag: 'elix-alert-dialog'
}) {}

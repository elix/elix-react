import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/MenuButton.js';

export default class MenuButton extends wrap({
  base,
  events: [
    'closed',
    'menu-item-selected',
    'opened',
    'opened-changed'
  ],
  parts: [
    'backdrop',
    'frame',
    'menu',
    'popup',
    'source'
  ],
  slots: [
    'source'
  ],
  tag: 'elix-menu-button'
}) {

  get items() {
    return this.refs.root.items;
  }

}

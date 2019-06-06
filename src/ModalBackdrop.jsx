import { wrap } from './ElixComponentWrapper.jsx';
import { default as base } from 'elix/src/ModalBackdrop.js';

export default class ModalBackdrop extends wrap({
  base,
  tag: 'elix-modal-backdrop'
}) {}

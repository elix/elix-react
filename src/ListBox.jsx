import 'elix/src/ListBox.js';
import ElixComponentWrapper from './ElixComponentWrapper.jsx';


export default class ListBox extends ElixComponentWrapper {

  static get metadata() {
    return {
      events: [
        'selected-index-changed'
      ]
    };
  }

}

import 'elix/src/Carousel.js';
import ElixComponentWrapper from './ElixComponentWrapper.jsx';


export default class Carousel extends ElixComponentWrapper {

  static get metadata() {
    return {
      events: [
        'selected-index-changed'
      ],
      roles: [
        'proxyRole'
      ]
    };
  }

}

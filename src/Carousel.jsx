import 'elix/src/Carousel.js';
import ElixComponentWrapper from './ElixComponentWrapper.jsx';
import React from 'react';


export default class Carousel extends ElixComponentWrapper {

  componentDidMount() {
    this.wireEventCallback('selected-index-changed');
    this.updateRole('proxyRole');
  }

  componentDidUpdate(prevProps) {
    if (this.props.proxyRole !== prevProps.proxyRole) {
      this.updateRole('proxyRole');
    }
  }
  
  render() {
    return (
      <elix-carousel
          ref="root"
          selected-index={this.props.selectedIndex}
          style={this.props.style}>
        {this.props.children}
      </elix-carousel>
    );
  }

}

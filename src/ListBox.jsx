import 'elix/src/ListBox.js';
import ElixComponentWrapper from './ElixComponentWrapper.jsx';
import React from 'react';


export default class ListBox extends ElixComponentWrapper {

  componentDidMount() {
    this.wireEventCallback('selected-index-changed');
  }
  
  render() {
    return (
      <elix-list-box
          ref="root"
          selected-index={this.props.selectedIndex}
          style={this.props.style}>
        {this.props.children}
      </elix-list-box>
    );
  }

}

import 'elix/src/ListBox.js';
import React from 'react';

export default class ListBox extends React.Component {

  componentDidMount() {
    this.refs.root.addEventListener('selected-index-changed', event => {
      const { selectedIndex } = event.detail;
      if (this.props.onSelectedIndexChanged) {
        this.props.onSelectedIndexChanged(selectedIndex);
      }
    });
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

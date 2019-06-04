import 'elix/src/ListBox.js';
import React from 'react';

export default class ListBox extends React.Component {

  componentDidMount() {
    // We can listen to events on the Elix component, and use those events to
    // update state.
    this.refs.list.addEventListener('selected-index-changed', event => {
      const { selectedIndex } = event.detail;
      if (this.props.onSelectedIndexChanged) {
        this.props.onSelectedIndexChanged(selectedIndex);
      }
    });
  }
  
  render() {
    return (
      <elix-list-box
          ref="list"
          selected-index={this.props.selectedIndex}
          style={this.props.style}>
        {this.props.children}
      </elix-list-box>
    );
  }

}

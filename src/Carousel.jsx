import 'elix/src/Carousel.js';
import React from 'react';

export default class Carousel extends React.Component {

  componentDidMount() {
    this.refs.root.addEventListener('selected-index-changed', event => {
      const { selectedIndex } = event.detail;
      if (this.props.onSelectedIndexChanged) {
        this.props.onSelectedIndexChanged(selectedIndex);
      }
    });
    updateRole(this);
  }

  componentDidUpdate() {
    updateRole(this);
  }
  
  render() {
    const ProxyRole = this.props.proxyRole;
    return (
      <elix-carousel
          ref="root"
          selected-index={this.props.selectedIndex}
          style={this.props.style}>
        <template slot="proxyRole">
          <ProxyRole/>
        </template>
        {this.props.children}
      </elix-carousel>
    );
  }

}


function updateRole(component) {
  // const root = component.refs.root;
  // const proxyRole = component.props.proxyRole;
  // if (root.proxyRole !== proxyRole) {
  //   root.proxyRole = proxyRole;
  // }
}

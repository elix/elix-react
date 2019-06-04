import 'elix/src/Carousel.js';
import React from 'react';
import ReactDOM from 'react-dom';

export default class Carousel extends React.Component {

  componentDidMount() {
    this.refs.root.addEventListener('selected-index-changed', event => {
      const { selectedIndex } = event.detail;
      if (this.props.onSelectedIndexChanged) {
        this.props.onSelectedIndexChanged(selectedIndex);
      }
    });
    applyProperties(this);
  }

  componentDidUpdate() {
    applyProperties(this);
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

const proxyRoleKey = Symbol('proxyRole');

function applyProperties(component) {
  const ProxyRole = component.props.proxyRole;
  if (ProxyRole !== component[proxyRoleKey]) {
    component[proxyRoleKey] = ProxyRole;
    const template = document.createElement('template');
    document.body.appendChild(template);
    ReactDOM.render(ProxyRole({ children: [] }), template.content, () => {
      const root = component.refs.root;
      root.proxyRole = template;  
    });
  }
}

import React from 'react';
import ReactDOM from 'react-dom';


export default class ElixComponentWrapper extends React.Component {

  componentDidMount() {
    const metadata = this.constructor.metadata;
    const events = metadata && metadata.events;
    if (events) {
      events.forEach(event => wireEventCallback(this, event));
    }
    roles(this).forEach(role => updateRole(this, role));
  }

  componentDidUpdate(prevProps) {
    roles(this).forEach(role => {
      if (this.props[role] !== prevProps[role]) {
        updateRole(this, role);
      }
    })
  }
  
  render() {
    const tag = this.constructor.metadata.tag;
    const propsToPass = {
      ref: 'root'
    };
    for (const key in this.props) {
      if (key !== 'children' && !key.startsWith('on')) {
        propsToPass[attributeNameFromPropertyName(key)] = this.props[key];
      }
    }
    const children = this.props.children || [];
    return React.createElement(tag, propsToPass, ...children);
  }

}


export function wrap(metadata) {
  class Wrapped extends ElixComponentWrapper {}
  Wrapped.metadata = metadata;
  if (!Wrapped.metadata.tag) {
    const tag = tagFromClassName(metadata.base.name);
    Wrapped.metadata.tag = tag;
  }
  return Wrapped;
}


function attributeNameFromPropertyName(propertyName) {
  const uppercaseRegEx = /([A-Z])/g;
  const attribute = propertyName.replace(uppercaseRegEx, '-$1').toLowerCase();
  return attribute;
}


function roles(component) {
  const metadata = component.constructor.metadata;
  const roles = metadata && metadata.roles;
  return roles || [];
}


function tagFromClassName(className) {
  const uppercaseRegEx = /([A-Z])/g;
  const baseName = className.replace(uppercaseRegEx, '-$1').toLowerCase();
  return `elix${baseName}`;
}


function updateRole(component, role) {
  const Role = component.props[role];
  if (Role) {
    const template = document.createElement('template');
    document.body.appendChild(template);
    ReactDOM.render(<Role/>, template.content, () => {
      const root = component.refs.root;
      root.proxyRole = template;
    });
  }
}


function wireEventCallback(component, eventName) {
  const nameParts = eventName.split('-');
  const capitalizedParts = nameParts.map(part =>
    `${part[0].toUpperCase()}${part.slice(1)}`
  );
  const callbackName = `on${capitalizedParts.join('')}`;
  component.refs.root.addEventListener(eventName, event => {
    const callback = component.props[callbackName];
    if (callback) {
      callback(event.detail);
    }
  });
}

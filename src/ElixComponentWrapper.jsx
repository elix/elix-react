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
  const base = metadata.base;
  Wrapped.metadata = Object.assign({}, metadata);
  if (!metadata.tag) {
    const tag = tagFromClassName(base.name);
    Wrapped.metadata.tag = tag;
  }
  if (!metadata.roles) {
    const properties = propertiesForClass(metadata.base);
    const roles = properties.filter(key => key.endsWith('Role'));
    Wrapped.metadata.roles = roles;
  }
  return Wrapped;
}


function attributeNameFromPropertyName(propertyName) {
  const uppercaseRegEx = /([A-Z])/g;
  const attribute = propertyName.replace(uppercaseRegEx, '-$1').toLowerCase();
  return attribute;
}


function propertiesForClass(classFn) {
  // HTMLElement and its base classes have no properties we need to inspect.
  if (classFn === HTMLElement) {
    return [];
  }
  // Get properties for parent class.
  const baseClass = Object.getPrototypeOf(classFn.prototype).constructor;
  const baseProperties = propertiesForClass(baseClass);
  // Get properties for this class.
  const propertyNames = Object.getOwnPropertyNames(classFn.prototype);
  const getterNames = propertyNames.filter(propertyName => {
    const descriptor = Object.getOwnPropertyDescriptor(classFn.prototype, propertyName);
    return descriptor && typeof descriptor.get === 'function';
  });
  // Merge.
  const diff = getterNames.filter(name => baseProperties.indexOf(name) < 0);
  return [...baseProperties, ...diff];
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

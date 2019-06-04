import React from 'react';
import ReactDOM from 'react-dom';


export default class ElixComponentWrapper extends React.Component {

  updateRole(role) {
    const Role = this.props[role];
    if (Role) {
      const template = document.createElement('template');
      document.body.appendChild(template);
      ReactDOM.render(<Role/>, template.content, () => {
        const root = this.refs.root;
        root.proxyRole = template;
      });
    }
  }

  wireEventCallback(eventName) {
    const nameParts = eventName.split('-');
    const capitalizedParts = nameParts.map(part =>
      `${part[0].toUpperCase()}${part.slice(1)}`
    );
    const callbackName = `on${capitalizedParts.join('')}`;
    this.refs.root.addEventListener(eventName, event => {
      const callback = this.props[callbackName];
      if (callback) {
        callback(event.detail);
      }
    });
  }

}

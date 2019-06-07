import AutoSizeTextarea from '../../src/AutoSizeTextarea.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  render() {
    return (
      <AutoSizeTextarea minimumRows="2" placeholder="Type all you want here!"/>
    );
  }

}


ReactDOM.render(<App/>, document.querySelector('#root'));

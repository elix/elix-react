import MenuButton from '../../src/MenuButton.jsx';
import MenuItem from '../../src/MenuItem.jsx';
import MenuSeparator from '../../src/MenuSeparator.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MenuButton aria-label="Sample Menu">
          <MenuItem>New Tab</MenuItem>
          <MenuItem>New Window</MenuItem>
          <MenuSeparator></MenuSeparator>
          <MenuItem>History</MenuItem>
          <MenuItem>Downloads</MenuItem>
          <MenuItem>Bookmarks</MenuItem>
          <MenuSeparator></MenuSeparator>
          <MenuItem>Zoom</MenuItem>
          <MenuItem>Settings</MenuItem>
        </MenuButton>
      </div>
    );
  }

}


ReactDOM.render(<App/>, document.querySelector('#root'));

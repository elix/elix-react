import MenuButton from '../../src/MenuButton.jsx';
import MenuItem from '../../src/MenuItem.jsx';
import MenuSeparator from '../../src/MenuSeparator.jsx';
import React from 'react';
import ReactDOM from 'react-dom';


const CustomMenuItem = (props) => {
  const style = {
    fontFamily: 'Lato',
    fontSize: '16px',
    padding: '10px 15px'
  };
  return (
    <MenuItem style={style}>{props.children}</MenuItem>
  )
}


class App extends React.Component {

  render() {
    const menuButtonLabel = (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        Menu
        <img src="resources/baseline-keyboard_arrow_down-24px.svg"/>
      </div>
    );
    const menuStyle = {
      background: 'white',
      padding: '0'
    };
    const frameStyle = {
      border: 'solid 1px #dcdcdc',
      borderTop: 'solid 3px #43b2cf',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.33)'
    };
    const sourceStyle = {
      backgroundColor: 'white',
      border: 'none'
    };
    return (
      <div>
        <MenuButton
            aria-label="Sample Menu"
            source={menuButtonLabel}
            frameStyle={frameStyle}
            menuStyle={menuStyle}
            sourceStyle={sourceStyle}>
          <CustomMenuItem>New Tab</CustomMenuItem>
          <CustomMenuItem>New Window</CustomMenuItem>
          <MenuSeparator></MenuSeparator>
          <CustomMenuItem>History</CustomMenuItem>
          <CustomMenuItem>Downloads</CustomMenuItem>
          <CustomMenuItem>Bookmarks</CustomMenuItem>
          <MenuSeparator></MenuSeparator>
          <CustomMenuItem>Zoom</CustomMenuItem>
          <CustomMenuItem>Settings</CustomMenuItem>
        </MenuButton>
      </div>
    );
  }

}


ReactDOM.render(<App/>, document.querySelector('#root'));

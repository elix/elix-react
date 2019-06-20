import MenuButton from '../../src/MenuButton.jsx';
import MenuItem from '../../src/MenuItem.jsx';
import MenuSeparator from '../../src/MenuSeparator.jsx';
import React from 'react';
import ReactDOM from 'react-dom';


const ArrowIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={props.style}>
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    <path fill="none" d="M0 0h24v24H0V0z" />
  </svg>
);


class CustomMenuButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened || false
    };
    this.openedChanged = this.openedChanged.bind(this);
  }

  openedChanged(detail) {
    const opened = detail.opened;
    this.setState({ opened });
  }

  render() {
    const opened = this.state.opened;

    const rotation = opened ? '180deg' : '0deg';
    const iconStyle = {
      height: '18px',
      transform: `rotate(${rotation})`,
      transition: 'transform 325ms ease',
      width: '18px'
    };
    const source = (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {this.props.source}
        <ArrowIcon style={iconStyle}/>
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
      border: 'none',
      color: opened ? '#3c9fb9' : '',
      fill: opened ? '#3c9fb9' : ''
    };

    return (
      <MenuButton
        ref="inner"
        aria-label={this.props['aria-label']}
        frameStyle={frameStyle}
        menuStyle={menuStyle}
        opened={opened}
        onOpenedChanged={this.openedChanged}
        source={source}
        sourceStyle={sourceStyle}>
        {this.props.children}
      </MenuButton>
    );
  }

}


const CustomMenuItem = (props) => {
  const style = {
    fontFamily: 'Lato',
    fontSize: '16px',
    padding: '10px 15px'
  };
  return (
    <MenuItem style={style}>{props.children}</MenuItem>
  );
}


class App extends React.Component {

  render() {
    return (
      <div>
        <CustomMenuButton
            aria-label="Sample Menu"
            source="Menu">
          <CustomMenuItem>New Tab</CustomMenuItem>
          <CustomMenuItem>New Window</CustomMenuItem>
          <MenuSeparator></MenuSeparator>
          <CustomMenuItem>History</CustomMenuItem>
          <CustomMenuItem>Downloads</CustomMenuItem>
          <CustomMenuItem>Bookmarks</CustomMenuItem>
          <MenuSeparator></MenuSeparator>
          <CustomMenuItem>Zoom</CustomMenuItem>
          <CustomMenuItem>Settings</CustomMenuItem>
        </CustomMenuButton>
      </div>
    );
  }

}


ReactDOM.render(<App/>, document.querySelector('#root'));

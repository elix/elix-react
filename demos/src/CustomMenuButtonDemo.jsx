import Menu from '../../src/Menu.jsx';
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


const CustomMenu = (props) => (
  <Menu generic={false}>{props.children}</Menu>
);


class CustomMenuButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened || false
    };
    this.openedChanged = this.openedChanged.bind(this);
  }

  get items() {
    return this.refs.inner.items;
  }

  openedChanged(detail) {
    this.setState({
      opened: detail.opened
    });
    if (this.props.onOpenedChanged) {
      this.props.onOpenedChanged(detail);
    }
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
      boxShadow: 'none'
      // boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.33)'
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
        menuRole={CustomMenu}
        menuStyle={menuStyle}
        opened={opened}
        onClosed={this.props.onClosed}
        onOpenedChanged={this.openedChanged}
        source={source}
        sourceStyle={sourceStyle}>
        {this.props.children}
      </MenuButton>
    );
  }

}


class CustomMenuItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: props.selected || false
    };
    this.selectedChanged = this.selectedChanged.bind(this);
  }

  render() {
    const selected = this.state.selected;
    const style = {
      backgroundColor: selected ? '#ecf7fa' : '',
      color: selected ? '#3c9fb9' : '',
      fontFamily: 'Lato',
      fontSize: '16px',
      padding: '10px 15px',
      whiteSpace: 'nowrap'
    };
    return (
      <MenuItem
        generic={false}
        onSelectedChanged={this.selectedChanged}
        style={style}
      >
        {this.props.children}
      </MenuItem>
    );
  }

  selectedChanged(detail) {
    this.setState({
      selected: detail.selected
    });
  }

}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItemText: null
    };
    this.openedChanged = this.openedChanged.bind(this);
  }

  openedChanged(detail) {
    if (!detail.opened) {
      const closeResult = detail.closeResult;
      const selectedItemText = closeResult != null && closeResult >= 0 ?
        this.refs.menuButton.items[closeResult].textContent :
        null;
      this.setState({ selectedItemText });
    }
  }

  render() {
    const selectedItemText = this.state.selectedItemText;
    const result = selectedItemText ?
      (<p>You picked {selectedItemText}</p>) :
      '';
    return (
      <div>
        <CustomMenuButton
          ref="menuButton"
          aria-label="Sample Menu"
          onOpenedChanged={this.openedChanged}
          source="Menu"
        >
          <CustomMenuItem>New Tab</CustomMenuItem>
          <CustomMenuItem>New Window</CustomMenuItem>
          <MenuSeparator/>
          <CustomMenuItem>History</CustomMenuItem>
          <CustomMenuItem>Downloads</CustomMenuItem>
          <CustomMenuItem>Bookmarks</CustomMenuItem>
          <MenuSeparator/>
          <CustomMenuItem>Zoom</CustomMenuItem>
          <CustomMenuItem>Settings</CustomMenuItem>
        </CustomMenuButton>
        {result}
      </div>
    );
  }

}


ReactDOM.render(<App/>, document.querySelector('#root'));

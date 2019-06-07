import AutoSizeTextarea from '../src/AutoSizeTextarea.jsx';
import CalendarMonthNavigator from '../src/CalendarMonthNavigator.jsx';
import DateComboBox from '../src/DateComboBox.jsx';
import MenuButton from '../src/MenuButton.jsx';
import MenuItem from '../src/MenuItem.jsx';
import MenuSeparator from '../src/MenuSeparator.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
    this.dateChanged = this.dateChanged.bind(this);
  }

  dateChanged(detail) {
    this.setState(detail);
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
        <AutoSizeTextarea minimumRows="2" placeholder="Type all you want here!"/>
        <CalendarMonthNavigator
          date={this.state.date}
          onDateChanged={this.dateChanged}
        />
        <div>{this.state.date.toDateString()}</div>
        <DateComboBox
          date={this.state.date}
          onDateChanged={this.dateChanged}
        />
      </div>
    );
  }

}


ReactDOM.render(<App/>, document.querySelector('#root'));

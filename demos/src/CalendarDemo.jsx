import CalendarMonthNavigator from '../../src/CalendarMonthNavigator.jsx';
import DateComboBox from '../../src/DateComboBox.jsx';
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
    const { date } = detail;
    this.setState({ date });
  }

  render() {
    return (
      <div>
        <CalendarMonthNavigator
          date={this.state.date}
          onDateChanged={this.dateChanged}
        />
        <p>
          {this.state.date.toDateString()}
        </p>
        <DateComboBox
          date={this.state.date}
          onDateChanged={this.dateChanged}
        />
      </div>
    );
  }

}


ReactDOM.render(<App/>, document.querySelector('#root'));

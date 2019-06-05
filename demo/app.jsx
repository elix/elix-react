import AutoSizeTextarea from '../src/AutoSizeTextarea.jsx';
import CalendarMonthNavigator from '../src/CalendarMonthNavigator.jsx';
import Carousel from '../src/Carousel.jsx';
import CustomPageDot from './CustomPageDot.jsx';
import ListBox from '../src/ListBox.jsx';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      selectedIndex: 0
    };
    this.dateChanged = this.dateChanged.bind(this);
    this.selectedIndexChanged = this.selectedIndexChanged.bind(this);
  }

  dateChanged(detail) {
    this.setState(detail);
  }

  render() {
    return (
      <div>
        <p>
          Selection: {this.state.selectedIndex}
        </p>
        <ListBox
          aria-label="Nature scenes"
          onSelectedIndexChanged={this.selectedIndexChanged}
          selectedIndex={this.state.selectedIndex}
          style={{height: "250px", maxWidth: "300px"}}>
          <div>Mountain lake</div>
          <div>Terraced farm</div>
          <div>Winter trees</div>
          <div>Forest river</div>
          <div>Red panda</div>
        </ListBox>
        <Carousel
          aria-label="Nature scenes"
          arrowButtonOverlap="false"
          onSelectedIndexChanged={this.selectedIndexChanged}
          // proxyRole={CustomPageDot}
          selectedIndex={this.state.selectedIndex}
          style={{height: "250px", maxWidth: "300px"}}>
          <img src="resources/image01.jpg" alt="Mountain lake"/>
          <img src="resources/image02.jpg" alt="Terraced farm"/>
          <img src="resources/image03.jpg" alt="Winter trees"/>
          <img src="resources/image04.jpg" alt="Forest river"/>
          <img src="resources/image05.jpg" alt="Red panda"/>
        </Carousel>
        <AutoSizeTextarea minimumRows="2" placeholder="Type all you want here!"/>
        <CalendarMonthNavigator
          date={this.state.date}
          onDateChanged={this.dateChanged}
          />
        <div>{this.state.date.toDateString()}</div>
      </div>
    );
  }

  selectedIndexChanged(detail) {
    this.setState(detail);
  }

}


ReactDOM.render(<App/>, document.querySelector('#root'));

This repository provides React components wrapping each of the web components in the [Elix library](https://component.kitchen/elix).

_Note: We are currently evaluating whether the Elix project should officially maintain these React versions of the Elix components on an ongoing basis as a supported aspect of the Elix project. If this would be interesting to you, please let us know via a tweet to [@ElixElements](https://twitter.com/ElixElements)._


## Instantiating Elix components in JSX

You can `import` the React Elix components in the `src` folder into your React application:

```jsx
import React from 'react';
import ListBox from 'elix-react/src/ListBox.jsx';

class App extends React.Component {
  render() {
    return (
      <ListBox aria-label="Fruits">
        <div>Acai</div>
        <div>Akee</div>
        <div>Apple</div>
        <div>Apricot</div>
        <div>Avocado</div>
        <div>Banana</div>
        <!-- etc. -->
      </ListBox>
    );
  }
}
```

The React versions of the Elix components generally work like React components rather than HTML custom elements, as noted below:


## Setting properties

You can set properties using camelCase property names instead of hyphenated attribute names:

```jsx
<ListBox selectedIndex={0}></ListBox>
```

At this time, the React Elix components only support properties that are strings, or that can be coerced to and from strings (like the numeric `selectedIndex` above).


## Listening to events

You can listen to the custom events raised by an Elix component by defining an `on` callback in the usual React way:

```jsx
import React from 'react';
import ListBox from 'elix-react/src/ListBox.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    };
    this.selectedIndexChanged = this.selectedIndexChanged.bind(this);
  }

  render() {
    return (
      <ListBox
        onSelectedIndexChanged={this.selectedIndexChanged}
        selectedIndex={this.state.selectedIndex}
      ></ListBox>
    );
  }

  selectedIndexChanged(detail) {
    const { selectedIndex } = detail;
    this.setState({ selectedIndex });
  }

}
```

The `detail` parameter to an event callback will be the same as the `event.detail` object included in the underlying `CustomEvent` object. You can deconstruct this parameter to extract the necessary event details, such as `selectedIndex` above.


# Demos

* [ListBox and Carousel](https://elix.github.io/elix-react/demos/listAndCarousel.html) synced together
* [Calendar components](https://elix.github.io/elix-react/demos/calendar.html)
* [MenuButton](https://elix.github.io/elix-react/demos/menuButton.html)
* [AutoSizeTextarea](https://elix.github.io/elix-react/demos/autoSizeTextarea.html)

Source for the above demos can be found in `demos/src`.

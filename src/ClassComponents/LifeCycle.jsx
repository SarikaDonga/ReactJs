import React from 'react';

class Lifecycle extends React.Component {
  // 1. Constructor: Initialize the state.
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello, world!',
    };
    console.log('Constructor: Component is being initialized');
  }

  // 2. componentDidMount: Called after the component is mounted (inserted into the DOM).
  componentDidMount() {
    console.log('componentDidMount: Component has been mounted');
    // Simulate an API call or other setup here
    this.setState({ message: 'Component Mounted!' });
  }

  // 3. componentWillUnmount: Called before the component is removed from the DOM.
  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be removed');
    // Cleanup, like clearing timers or unsubscribing from services
  }

  // Render method: Displays the component's UI
  render() {
    console.log('Render: Component is rendering');
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default Lifecycle;

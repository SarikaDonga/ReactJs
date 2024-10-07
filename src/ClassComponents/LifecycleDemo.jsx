import React from 'react';

class LifecycleDemo extends React.Component {
  // 1. Constructor: Initialize the state.
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor: Component is being initialized');
  }

  // 2. componentDidMount: Called after the component is mounted (inserted into the DOM).
  componentDidMount() {
    console.log('componentDidMount: Component has been mounted');
    // Simulating an API call that sets the count after mounting
    this.setState({ count: 10 });
  }

  // 3. shouldComponentUpdate: Called before rendering when new props or state are being received.
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate: Should component re-render?');
    return true; // Return true to allow re-rendering, false otherwise
  }

  // 4. componentDidUpdate: Called after the component has updated (re-rendered).
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component has re-rendered');
    if (prevState.count !== this.state.count) {
      console.log(`Count changed from ${prevState.count} to ${this.state.count}`);
    }
  }

  // 5. componentWillUnmount: Called right before the component is unmounted and destroyed.
  componentWillUnmount() {
    console.log('componentWillUnmount: Component is about to be removed');
  }

  // Custom method to increment the count
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Render method: Displays the component's UI
  render() {
    console.log('Render: Component is rendering');
    return (
      <div>
        <h1>React Class Component Lifecycle</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default LifecycleDemo;

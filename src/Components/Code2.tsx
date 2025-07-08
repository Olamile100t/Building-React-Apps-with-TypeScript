"useClient"
import { Component } from "react";


// Step 1: Define the state type
interface CounterState {
  count: number; // State has one property: count, which is a number
}

// Step 2: Define the props type (none in this case)
// interface CounterProps {} // Can also use `{}`
 
// Step 3: Provide both props and state types to Component
class Counter extends Component<  CounterState> {
  // Step 4: Define state with correct type
  state: CounterState = {
    count: 0,
  };

  // Step 5: Method to increment count
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

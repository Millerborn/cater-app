import React, { Component } from "react";

class Counter extends Component {

  state = {
    quantity: 0,
  }

  increment = () => {
    console.log('increment quantity', this.state.quantity);
    const newCount = Number(this.state.quantity) + 1;
    this.setState({
      ...this.state,
      quantity: newCount, 
    });
  }

  decrement = () => {
    console.log('decrement quantity', this.state.quantity);
    const newCount = Number(this.state.quantity) - 1;
    this.setState({
      ...this.state,
      quantity: newCount, 
    });
  }

  render() {
    return (
      <div className="stepper-input">
        <button 
          className="decrement" 
          onClick={this.decrement}
        >
          –
        </button>
        <button 
          className="increment" 
          onClick={this.increment}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;

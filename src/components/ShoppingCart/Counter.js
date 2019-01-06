import React, { Component } from "react";

class Counter extends Component {

state = {
  quantity: 0,
}

decrement = () => {
  const newCount = Number(this.state.quantity) - 1;
  console.log('decrement props quantity', newCount);
  this.updateQuantity(newCount);
  this.setState({
    quantity: newCount, 
  });
}

increment = () => {
  const newCount = Number(this.state.quantity) + 1;
  console.log('increment props quantity', newCount);
  this.updateQuantity(newCount);
  this.setState({
    quantity: newCount, 
  });
}

updateQuantity = (count) => {  
  console.log('update quantity', count);
  this.props.quantity(count);
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
        <a>{this.state.quantity}</a>
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

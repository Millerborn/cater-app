import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckoutList from './CheckoutList/CheckoutList';

class CheckoutPage extends Component {

    state = {
        orderTotal: 50,
        hours: 3,
    }

     // handle on click, go to next page and dispatch information to state in index
     handleNextClick = (event) => {
        event.preventDefault();
        console.log('history', this.props);
        this.props.history.push('/display-chef')
    }

    componentWillMount() {
        console.log('WillUpdate', this.props.user.id)
        const user = this.props.user.id;
        this.props.dispatch( { type: 'FETCH_CHECKOUT', payload: user  } );
        this.props.dispatch({ type: 'GET_ORDERS' });
    }

  render() {

    const orderInfo = this.props.order[0];
    let orderList = '';
    if (orderInfo !== undefined){
    orderList = 
    <div>
    <h4>Review and order Chef</h4>
                <h5>Your order information</h5>
                <br></br>
                <p>{orderInfo.first_name} {orderInfo.last_name}</p>
                <p>{orderInfo.street} {orderInfo.city} {orderInfo.state}</p>
                <p>{orderInfo.zip}</p>
                <p>{orderInfo.address_type}</p>
                <br></br>
                <p>{orderInfo.email}</p>
                <p>{orderInfo.phone}</p>
                <p>{orderInfo.time_to_make}</p>
    </div>
    ;}

    const orderTotal = this.props.order;
    let orderCost = '';
    if(orderTotal !== undefined){
        orderCost =
        <div>
            <p>Order cost {orderTotal.time_to_make}</p>
        </div>
    }
    const orderz = this.props.order;
    return (
        <div id="main-checkout-div">
            {JSON.stringify(orderz)}
            <h3>Checkout</h3>
                <p>{orderCost}</p>
                <div id="formInput" onSubmit={this.handleNextClick}>
                    <div id="checkout-order-information">{orderList}</div>
                    <br></br>
                    <h3>Your Order</h3>
                    <CheckoutList />
                    <p>Hours to Make: {this.state.hours}</p>
                    <p>Order total: ${this.state.orderTotal}</p>
                </div>
                <Button>Checkout</Button>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    user: reduxState.user,
    order: reduxState.orders,
});

export default connect(mapStateToProps)(CheckoutPage);

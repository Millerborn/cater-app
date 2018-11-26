import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import CheckoutList from './CheckoutList/CheckoutList';

class CheckoutPage extends Component {

     // handle on click, go to next page and dispatch information to state in index
     handleNextClick = (event) => {
        event.preventDefault();
        console.log('history', this.props);
        this.props.history.push('/display-chef')
    }

    removeItem = (id) => {
        console.log('removing from cart id: ', id);
        this.props.dispatch( { type: 'REMOVE_FROM_CART', payload: id } );
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
                <br></br>
                <p>{orderInfo.email}</p>
                <p>{orderInfo.phone}</p>
    </div>
    ;
    }

    let cartItems;
    cartItems = this.props.menu.map(menu => {
        let quantity = this.props.productQuantity;
      return (
            <div className="cart-item" key={menu.id}>
                <div className="product-info">
                    <p className="quantity">x1 {menu.title} ${menu.price} {menu.time_to_make} hour to make</p>
                </div>
                <button className="product-remove" onClick={() => this.removeItem(menu.id)}>
                    remove from cart
                </button>
            </div>
      );
    });

    return (
        <div id="main-checkout-div">
            <h3>Checkout</h3>
                <div id="formInput" onSubmit={this.handleNextClick}>
                    <div id="checkout-order-information">{orderList}</div>
                    <br></br>
                    {cartItems}
                    {/* <CheckoutList order={this.props.order}/> */}
                </div>
                <Button>Checkout</Button>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    user: reduxState.user,
    order: reduxState.orders,
    menu: reduxState.menu,
});

export default connect(mapStateToProps)(CheckoutPage);

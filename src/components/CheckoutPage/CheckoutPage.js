import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import CheckoutList from './CheckoutList/CheckoutList';

class CheckoutPage extends Component {

    removeItem = (id) => {
        console.log('removing from cart id: ', id);
        this.props.dispatch( { type: 'REMOVE_FROM_CART', payload: id } );
    }

    componentWillMount() {
        console.log('WillUpdate', this.props.user.id)
        const user = this.props.user.id;
        this.props.dispatch( { type: 'FETCH_CHECKOUT', payload: user  } );
    }

  render() {
    const orderInfo = this.props.orders;
    let orderList = '';
    if (orderInfo !== undefined){
        console.log('order info', orderInfo); 
        orderList = 
        <div>
            <h4>Review and order Chef</h4>
                <h5>Your order information</h5>
                <br></br>
                <p>{orderInfo.first_name} {orderInfo.last_name}</p>
                <p>{this.props.address.street} {this.props.address.city} {this.props.address.state}</p>
                <p>{this.props.address.zip}</p>
                <p>{this.props.address.address_type}</p>
                <br></br>
                <br></br>
                <p>{orderInfo.email}</p>
                <p>{orderInfo.phone}</p>
            </div>
        } else {
            orderList = [];
    }

    // let cartItems;
    // cartItems = this.props.orders.map(menu => {
    //     let quantity = this.props.productQuantity;
    //   return (
    //         <div className="cart-item" key={menu.id}>
    //             <div className="product-info">
    //                 <p className="quantity">x1 {menu.title} ${menu.price} {menu.time_to_make} hour to make</p>
    //             </div>
    //             <button className="product-remove" onClick={() => this.removeItem(menu.id)}>
    //                 remove from cart
    //             </button>
    //         </div>
    //   );
    // });

    let cartItems;
    if(this.props.cart){
    cartItems = this.props.cart.map((order, i) => {
        return (
              <div className="cart-item" key={i}>
                  <div className="product-info">
                      <p className="quantity">x1 {order.title} ${order.price} {order.time_to_make} hour to make
                          <button className="product-remove" onClick={() => this.removeItem(i)}>
                              remove from cart
                          </button>
                      </p>
                  </div>
              </div>
        );
      })
        } else {
          cartItems=[];
        }


    return (
        <div id="main-checkout-div">
            <h3>Checkout</h3>
            {/* {JSON.stringify('order info here--------:')}
            {JSON.stringify(this.props.orders)} */}
                <div id="formInput" onSubmit={this.handleNextClick}>
                    <div id="checkout-order-information">{orderList}</div>
                    <br></br>
                    <div>
                        <p>cart items here</p>
                        {cartItems}
                        {JSON.stringify('history')}
                        {JSON.stringify(this.props.cart)}
                        {/* {this.props.cart.map((order, i) => {
                          return (
                                <div className="cart-item" key={i}>
                                    <div className="product-info">
                                        <p className="quantity">x1 {order.title} ${order.price} {order.time_to_make} hour to make
                                            <button className="product-remove" onClick={() => this.removeItem(i)}>
                                                remove from cart
                                            </button>
                                        </p>
                                    </div>
                                </div>
                          );
                        })} */}
                    </div>
                    {/* <CheckoutList order={this.props.order}/> */}
                </div>
                <Button>Checkout</Button>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    user: reduxState.user,
    orders: reduxState.orders,
    menu: reduxState.menu,
    address: reduxState.address,
});

export default connect(mapStateToProps)(CheckoutPage);

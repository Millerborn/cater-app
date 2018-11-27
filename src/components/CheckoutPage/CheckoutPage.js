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

    const orderInfo = this.props.orders[0];
    let orderList = '';
    if (orderInfo !== undefined){
        console.log('order info', orderInfo); 
        orderList = 
        <div>
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
                <br></br>
                <br></br>
            </div>
        } else {
            orderList = [];
    }

    return (
        <div id="main-checkout-div">
            <h3>Checkout</h3>
                <div id="formInput" onSubmit={this.handleNextClick}>
                    <div id="checkout-order-information">
                        {orderList}
                    </div>
                    <br></br>
                    <div>
                        {this.props.orders.map( (order) => {
                            console.log('mapping orders: ', order); 
                          return (
                                <div className="cart-item" key={order.id}>
                                    <div className="product-info">
                                        <ul className="quantity">
                                            <li>
                                                x1 {order.title} ${order.price} {order.time_to_make} hour to make
                                                <button className="product-remove" onClick={() => this.removeItem(order.id)}>
                                                    remove from cart
                                                </button>    
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                          );
                        })}
                    </div>
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






// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import Button from '@material-ui/core/Button';
// import CheckoutList from './CheckoutList/CheckoutList';

// class CheckoutPage extends Component {

//     removeItem = (id) => {
//         console.log('removing from cart id: ', id);
//         this.props.dispatch( { type: 'REMOVE_FROM_CART', payload: id } );
//     }

//     componentWillMount() {
//         console.log('WillUpdate', this.props.user.id)
//         const user = this.props.user.id;
//         this.props.dispatch( { type: 'FETCH_CHECKOUT', payload: user  } );
//     }

//   render() {
//     const orderInfo = this.props.orders;
//     let orderList = '';
//     if (orderInfo !== undefined){
//         console.log('order info', orderInfo); 
//         orderList = 
//         <div>
//             <div>
//                 <h4>Review and order Chef</h4>
//                     <h5>Your order information</h5>
//                     <br></br>
//                     <p>{orderInfo.first_name} {orderInfo.last_name}</p>
//                     <p>{orderInfo.street} {orderInfo.city} {orderInfo.state}</p>
//                     <p>{orderInfo.zip}</p>
//                     <p>{orderInfo.address_type}</p>
//                     <br></br>
//                     <br></br>
//                     <p>{orderInfo.email}</p>
//                     <p>{orderInfo.phone}</p>
//                 </div>
//                 <br></br>
//                 <br></br>
//             </div>
//         } else {
//             orderList = [];
//     }

//     const orders = this.props.orders
//     let checkoutOrders;
//     if(orders !== null){
//     checkoutOrders = this.props.orders.map((order, i) => {
//         let quantity = this.props.productQuantity;
//       return (
//             <li className="cart-item" key={i}>

//             <div className="product-info">
//                 <p className="quantity">x1 {this.props.orders.title} ${this.props.orders.price}</p>
//             </div>
//             </li>
//             );
//           });
//         } else {
//           checkoutOrders=[];
//         }

//     return (
//         <div id="main-checkout-div">
//             <h3>Checkout</h3>
//                 <div id="formInput" onSubmit={this.handleNextClick}>
//                     <div id="checkout-order-information">
//                         {orderList}
//                     </div>
//                     <br></br>
//                     <div>
//                         <p>cart items here</p>
//                         {JSON.stringify('history')}
//                         {JSON.stringify(this.props.orders)}
//                     </div>
//                     <div>
//                         {checkoutOrders}
//                         {/* {this.props.orders.map((order, i) => {
//                           return (
//                                 <div className="cart-item" key={i}>
//                                     <div className="product-info">
//                                         <p className="quantity">x1 {order.title} ${order.price} {order.time_to_make} hour to make
//                                             <button className="product-remove" onClick={() => this.removeItem(i)}>
//                                                 remove from cart
//                                             </button>
//                                         </p>
//                                     </div>
//                                 </div>
//                           );
//                         })} */}
//                     </div>
//                 </div>
//                 <Button>Checkout</Button>
//         </div>
//     );
//   }
// }

// const mapStateToProps = reduxState => ({
//     user: reduxState.user,
//     orders: reduxState.orders,
//     menu: reduxState.menu,
//     address: reduxState.address,
// });

// export default connect(mapStateToProps)(CheckoutPage);

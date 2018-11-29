// // import React, { Component } from "react";
// // import { connect } from 'react-redux';
// // import CartScrollBar from "./CartScrollBar";
// // import EmptyCart from "./EmptyCart";
// // import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
// // import Popover from '@material-ui/core/Popover';
// // import Button from '@material-ui/core/Button';
// // import DeleteIcon from '@material-ui/icons/Delete';

// // class CartHeader extends Component {

// //   state = {
// //     showCart: null,
// //     totalItems: 0,
// //     totalAmount: 0,
// //   }

// //   componentDidMount() {
// //     const user = this.props.user.id;
// //     this.props.dispatch( { type: 'FETCH_CHECKOUT', payload: user  } );
// //   }

// //   removeItem = (order) => {
// //     console.log('item order_id: ', order);
// //     this.props.dispatch( { type: 'REMOVE_FROM_CART', payload: order } );
// //   }

// //   handleClick = event => {
// //     this.setState({
// //       showCart: event.currentTarget,
// //     });
// //   };

// //   handleClose = () => {
// //     this.setState({
// //       showCart: null,
// //     });
// //   };

// //   handleHistoryClick = () => {
// //     this.props.history.push('/checkout');
// //   }

// //   sumTotalItems(orders) {
// //     let total = 0;
// //     let cart = orders;
// //     total = cart.length;
// //     console.log('cart length', total);
// //     this.setState({
// //       totalItems: total
// //     });
// //   }

// //   sumTotalAmount(cartItems) {  
// //     console.log('cart items', cartItems);
// //     let total = 0;
// //     for (var i = 0; i < cartItems.length; i++) {
// //       total += cartItems[i].price * parseInt(cartItems[i].quantity);
// //     }
// //     this.setState({
// //       totalAmount: total
// //     });
// //   }

// //   // componentDidMount() {
// //   //   this.props.dispatch( { type: 'FETCH_HISTORY', payload: this.props.history } );
// //   //   console.log('order history----------------------: ', this.props.history);
// //   // }

// //   render() {
// //     const showCart = this.state.showCart;
// //     const open = Boolean(showCart);
// //     let cartItems;
// //     if(this.props.orders !== undefined){
// //     cartItems = this.props.orders.map((order, i) => {
// //       return (
// //             <li className="cart-item" key={i}>
// //               <div className="product-info">
// //                   <p className="quantity">x{order.quantity} <strong>{order.title}</strong> ${order.price * order.quantity}              
// //                     <DeleteIcon onClick={() => this.removeItem(order)}></DeleteIcon>
// //                   </p>
// //               </div>
// //             </li>
// //             );
// //           });
// //         } else {
// //           cartItems=[];
// //     }
// //     let view;
// //     if (cartItems.length <= 0) {
// //       view = <EmptyCart />;
// //     } else {
// //       view = (
// //         <CSSTransitionGroup
// //           transitionName="fadeIn"
// //           transitionEnterTimeout={500}
// //           transitionLeaveTimeout={300}
// //           component="ul"
// //           className="cart-items"
// //         >
// //           {cartItems}
// //         </CSSTransitionGroup>
// //       );
// //     }

// //     return (
// //         <div className="container">
// //         <Button
// //             aria-owns={open ? 'simple-popper' : undefined}
// //             aria-haspopup="true"
// //             variant="contained"
// //             onClick={this.handleClick}
// //         >
// //             View Cart
// //         </Button>
// //         <Popover
// //                 id="simple-popper"
// //                 open={open}
// //                 showcart={showCart}
// //                 onClose={this.handleClose}
// //                 anchorOrigin={{
// //                     vertical: 'bottom',
// //                     horizontal: 'center',
// //                 }}
// //                 transformOrigin={{
// //                     vertical: 'top',
// //                     horizontal: 'center',
// //                 }}
// //               >
// //           <div className="cart">
// //             <div className="cart-info">
// //             {JSON.stringify(this.props.history)}
// //               <table>
// //                 <tbody>
// //                   <tr>
// //                     <td>No. of items</td>
// //                     <td>:</td>
// //                     <td>
// //                     <strong>{cartItems.length}</strong>
// //                     </td>
// //                   </tr>
// //                   <tr>
// //                     <td>Sub Total</td>
// //                     <td>:</td>
// //                     <td>
// //                       <button onClick={() => this.sumTotalAmount(this.props.total)}>
// //                         <strong>${this.state.totalAmount}</strong>
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 </tbody>
// //               </table>
// //             </div>
// //             <div
// //               className={
// //                 this.state.showCart ? "cart-preview active" : "cart-preview"
// //               }
// //               ref="cartPreview"
// //             >
// //               <CartScrollBar>{view}</CartScrollBar>
// //               <div className="action-block">
// //                 <button
// //                   type="button"
// //                   className="checkout-button"
// //                   onClick={this.handleHistoryClick}
// //                   id="hire-chef-button"
// //                 >
// //                   PROCEED TO CHECKOUT
// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //           </Popover>
// //         </div>
// //     );
// //   }
// // }

// // const mapStateToProps = reduxState => ({
// //   address: reduxState.address,
// //   menu: reduxState.menu,
// //   orders: reduxState.orders,
// //   chef: reduxState.chefs,
// //   user: reduxState.user,
// //   quantity: reduxState.quantity,
// //   total: reduxState.total,
// //   history: reduxState.history,
// // });

// // export default connect(mapStateToProps)(CartHeader);


// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import CartScrollBar from "./CartScrollBar";
// import EmptyCart from "./EmptyCart";
// import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
// import Popover from '@material-ui/core/Popover';
// import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';

// class CartHeader extends Component {

//     state = {
//       showCart: null,
//       cart: this.props.cart,
//     }

//   handleClick = event => {
//     // console.log('handle click history', this.props.history);
//     // this.props.dispatch({ type: 'FETCH_HISTORY', payload: this.props.history });
//     this.setState({
//       showCart: event.currentTarget,
//     });
//   };

//   handleClose = () => {
//     this.setState({
//       showCart: null,
//     });
//   };

// //   componentDidMount() {
// //     console.log('WillUpdate', this.props.history)
// //     this.props.dispatch({ type: 'FETCH_HISTORY', payload: this.props.history });
// // }

//   handleHistoryClick = () => {
//     // console.log('handle history handle click', this.props.history);
//     // this.props.dispatch({ type: 'FETCH_HISTORY', payload: this.props.history });
//     this.props.history.push('/checkout');
// }

//   render() {
//     const showCart = this.state.showCart;
//     const open = Boolean(showCart);
//     // let quantity = this.props.productQuantity;
//     let cartItems;
//     if(this.props.cartItems){
//     cartItems = this.props.cartItems.map((order, i) => {
//       return (
//             <li className="cart-item" key={i}>
//               <div className="product-info">
//                   <p className="quantity">x{order.quantity} <strong>{order.title}</strong> ${order.price * order.quantity}              
//                     <DeleteIcon onClick={this.props.removeProduct.bind(this, order.id)}></DeleteIcon>
//                   </p>
//               </div>
//             </li>
//             );
//           });
//         } else {
//           cartItems=[];
//     }
//     let view;
//     if (cartItems.length <= 0) {
//       view = <EmptyCart />;
//     } else {
//       view = (
//         <CSSTransitionGroup
//           transitionName="fadeIn"
//           transitionEnterTimeout={500}
//           transitionLeaveTimeout={300}
//           component="ul"
//           className="cart-items"
//         >
//           {cartItems}
//         </CSSTransitionGroup>
//       );
//     }
//     return (
//         <div className="container">
//         <Button
//             aria-owns={open ? 'simple-popper' : undefined}
//             aria-haspopup="true"
//             variant="contained"
//             onClick={this.handleClick}
//         >
//         {/* {JSON.stringify('history info here--------:')}
//         {JSON.stringify(this.props.history)} */}
//             View Cart
//         </Button>
//         <Popover
//                 id="simple-popper"
//                 open={open}
//                 showcart={showCart}
//                 onClose={this.handleClose}
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'center',
//                 }}
//                 transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'center',
//                 }}
//               >
//           <div className="cart">
//             <div className="cart-info">
//               <table>
//                 <tbody>
//                   <tr>
//                     <td>No. of items</td>
//                     <td>:</td>
//                     <td>
//                     <strong>{this.props.totalItems}</strong>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td>Sub Total</td>
//                     <td>:</td>
//                     <td>
//                       <strong>${this.props.total}</strong>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div
//               className={
//                 this.state.showCart ? "cart-preview active" : "cart-preview"
//               }
//               ref="cartPreview"
//             >
//               <CartScrollBar>{view}</CartScrollBar>
//               <div className="action-block">
//                 <button
//                   type="button"
//                   className="checkout-button"
//                   onClick={this.handleHistoryClick}
//                   id="hire-chef-button"
//                 >
//                   PROCEED TO CHECKOUT
//                 </button>
//               </div>
//             </div>
//           </div>
//           </Popover>
//         </div>
//     );
//   }
// }

// const mapStateToProps = reduxState => ({
//   address: reduxState.address,
//   menu: reduxState.menu,
//   orders: reduxState.orders,
//   chef: reduxState.chefs,
//   user: reduxState.user,
// });

// export default connect(mapStateToProps)(CartHeader);


import React, { Component } from "react";
import { connect } from 'react-redux';
import CartScrollBar from "./CartScrollBar";
import EmptyCart from "./EmptyCart";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

class CartHeader extends Component {

  state = {
    showCart: null,
    totalItems: 0,
    totalAmount: 0,
  }

  componentDidMount() {
    const user = this.props.user.id;
    console.log('this.props.history', this.props.history);
    this.props.dispatch( { type: 'FETCH_CHECKOUT', payload: user  } );
  }

  removeItem = (order) => {
    console.log('item order_id: ', order);
    this.props.dispatch( { type: 'REMOVE_FROM_CART', payload: order } );
    this.props.removeProduct();
  }

  handleClick = event => {
    this.setState({
      showCart: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      showCart: null,
    });
  };

  handleHistoryClick = () => {
    console.log('push to checkout', this.props.history);
    // this.props.dispatch( { type: 'FETCH_HISTORY', payload: this.props.history } ); 
    this.props.history.push('/checkout');
  }

  // sumTotalItems(orders) {
  //   let total = 0;
  //   let cart = orders;
  //   total = cart.length;
  //   console.log('cart length', total);
  //   this.setState({
  //     totalItems: total
  //   });
  // }

  render() {
    const showCart = this.state.showCart;
    const open = Boolean(showCart);
    let cartItems;
    if(this.props.orders !== undefined){
    cartItems = this.props.orders.map((order, i) => {
      return (
            <li className="cart-item" key={i}>
              <div className="product-info">
                  <p className="quantity">x{order.quantity} <strong>{order.title}</strong> ${order.price * order.quantity}              
                    <DeleteIcon onClick={() => this.removeItem(order)}></DeleteIcon>
                  </p>
              </div>
            </li>
            );
          });
        } else {
          cartItems=[];
    }
    let view;
    if (cartItems.length <= 0) {
      view = <EmptyCart />;
    } else {
      view = (
        <CSSTransitionGroup
          transitionName="fadeIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="ul"
          className="cart-items"
        >
          {cartItems}
        </CSSTransitionGroup>
      );
    }

    return (
        <div className="container">
        <Button
            aria-owns={open ? 'simple-popper' : undefined}
            aria-haspopup="true"
            variant="contained"
            onClick={this.handleClick}
        >
            View Cart
        </Button>
        <Popover
                id="simple-popper"
                open={open}
                showcart={showCart}
                onClose={this.handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
              >
          <div className="cart">
            <div className="cart-info">
            {JSON.stringify(this.props.totalAmount)}
              <table>
                <tbody>
                  <tr>
                    <td>No. of items</td>
                    <td>:</td>
                    <td>
                    <strong>{cartItems.length}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Sub Total</td>
                    <td>:</td>
                    <td>
                        <strong>${this.props.totalAmount}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className={
                this.state.showCart ? "cart-preview active" : "cart-preview"
              }
              ref="cartPreview"
            >
              <CartScrollBar>{view}</CartScrollBar>
              <div className="action-block">
                <button
                  type="button"
                  className="checkout-button"
                  onClick={this.handleHistoryClick}
                  id="hire-chef-button"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
          </Popover>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  address: reduxState.address,
  menu: reduxState.menu,
  orders: reduxState.orders,
  chef: reduxState.chefs,
  user: reduxState.user,
  quantity: reduxState.quantity,
  total: reduxState.total,
});

export default connect(mapStateToProps)(CartHeader);
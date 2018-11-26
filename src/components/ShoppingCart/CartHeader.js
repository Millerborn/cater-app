// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import CartScrollBar from "./CartScrollBar";
// import EmptyCart from "./EmptyCart";
// import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
// import Popover from '@material-ui/core/Popover';
// import Button from '@material-ui/core/Button';

// class CartHeader extends Component {

//       state = {
//       showCart: null,
//       cart: this.props.cart,
//     }

//      // handle on click, go to next page and dispatch information to state in index
//      handleNextClick = (event) => {
//         event.preventDefault();
//         console.log('history', this.props);
//         this.props.history.push('/display-chef')
//     }

//     componentWillMount() {
//         console.log('WillUpdate', this.props.user.id)
//         const user = this.props.user.id;
//         this.props.dispatch( { type: 'FETCH_CHECKOUT', payload: user  } );
//         this.props.dispatch({ type: 'GET_ORDERS' });
//     }

//   render() {
//     const showCart = this.state.showCart;
//     const open = Boolean(showCart);
//     const orderInfo = this.props.order[0];
//     let orderList = '';
//     if (orderInfo !== undefined){
//     orderList = 
//     <div>
//     <h4>Review and order Chef</h4>
//                 <h5>Your order information</h5>
//                 <br></br>
//                 <p>{orderInfo.first_name} {orderInfo.last_name}</p>
//                 <p>{orderInfo.street} {orderInfo.city} {orderInfo.state}</p>
//                 <p>{orderInfo.zip}</p>
//                 <p>{orderInfo.address_type}</p>
//                 <br></br>
//                 <br></br>
//                 <p>{orderInfo.email}</p>
//                 <p>{orderInfo.phone}</p>
//     </div>
//     ;
//     }
//     return (
//       <div className="container">
//               <Button
//                   aria-owns={open ? 'simple-popper' : undefined}
//                   aria-haspopup="true"
//                   variant="contained"
//                   onClick={this.handleClick}
//               >
//                   View Cart
//               </Button>
//               <Popover
//                       id="simple-popper"
//                       open={open}
//                       showcart={showCart}
//                       onClose={this.handleClose}
//                       anchorOrigin={{
//                           vertical: 'bottom',
//                           horizontal: 'center',
//                       }}
//                       transformOrigin={{
//                           vertical: 'top',
//                           horizontal: 'center',
//                       }}
//                     >
//                 <div className="cart">
//                   <div className="cart-info">
//                     <table>
//                       <tbody>
//                         <tr>
//                           <td>No. of items</td>
//                           <td>:</td>
//                           <td>
//                           <strong>{this.props.totalItems}</strong>
//                           </td>
//                           <td>{JSON.stringify('cart here:')}</td>
//                           <td>{JSON.stringify(this.state.cart)}</td>
//                         </tr>
//                         <tr>
//                           <td>Sub Total</td>
//                           <td>:</td>
//                           <td>
//                             <strong>{this.props.total}</strong>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                   {/* <div>
//                       <a
//                       className="cart-icon"
//                       href="/hire-chef"
//                       onClick={this.handleCart.bind(this)}
//                       ref="cartButton"
//                       >
//                       <img
//                           className={this.props.cartBounce ? "tada" : " "}
//                           src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
//                           alt="Cart"
//                       />
//                       {this.props.totalItems ? (
//                           <span className="cart-count">{this.props.totalItems}</span>
//                       ) : (
//                           ""
//                       )}
//                       </a>
//                   </div> */}
//                   <div
//                     className={
//                       this.state.showCart ? "cart-preview active" : "cart-preview"
//                     }
//                     ref="cartPreview"
//                   >
//                     <CartScrollBar>{orderList}</CartScrollBar>
//                     <div className="action-block">
//                       <button
//                         type="button"
//                         className="checkout-button"
//                         onClick={this.handleClick}
//                       >
//                         PROCEED TO CHECKOUT
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 </Popover>
//               </div>
//     );
//   }
// }

// const mapStateToProps = reduxState => ({
//     user: reduxState.user,
//     order: reduxState.orders,
// });

// export default connect(mapStateToProps)(CartHeader);



// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import CartScrollBar from "./CartScrollBar";
// import EmptyCart from "./EmptyCart";
// import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
// import Popover from '@material-ui/core/Popover';
// import Button from '@material-ui/core/Button';
// import CartHeaderListItems from './CartHeaderListItems';

// class CartHeader extends Component {

//     state = {
//       showCart: null,
//       cart: this.props.cart,
//     }

//   handleClick = event => {
//     this.setState({
//       showCart: event.currentTarget,
//     });
//   };

//   handleClose = () => {
//     this.setState({
//       showCart: null,
//     });
//   };

//   componentWillMount() {
//     console.log('WillUpdate', this.props.user.id)
//     const user = this.props.user.id;
//     this.props.dispatch( { type: 'FETCH_CHECKOUT', payload: user  } );
//     this.props.dispatch({ type: 'GET_ORDERS' });
//   }

//   handleSubmit = () => {
//     console.log('In HRI pushing order to db', this.state.cart);
//     // this.props.dispatch( { type: 'ADD_ORDER', payload: this.state.selectedProduct } );
//   }
//   render() {
//     const showCart = this.state.showCart;
//     const open = Boolean(showCart);
//     // let quantity = this.props.productQuantity;
//     const cartItems = this.props.order.map((order, i) => {
//               return (<CartHeaderListItems key={i} order={order} history={this.props.history} />);
//           });
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
//                     <td>{JSON.stringify('cart here:')}</td>
//                     <td>{JSON.stringify(this.state.cart)}</td>
//                   </tr>
//                   <tr>
//                     <td>Sub Total</td>
//                     <td>:</td>
//                     <td>
//                       <strong>{this.props.total}</strong>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             {/* <div>
//                 <a
//                 className="cart-icon"
//                 href="/hire-chef"
//                 onClick={this.handleCart.bind(this)}
//                 ref="cartButton"
//                 >
//                 <img
//                     className={this.props.cartBounce ? "tada" : " "}
//                     src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
//                     alt="Cart"
//                 />
//                 {this.props.totalItems ? (
//                     <span className="cart-count">{this.props.totalItems}</span>
//                 ) : (
//                     ""
//                 )}
//                 </a>
//             </div> */}
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
//                   onClick={this.handleClick}
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
//   order: reduxState.orders,
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
import CartHeaderListItems from "./CartHeaderListItems";

class CartHeader extends Component {

    state = {
      showCart: null,
      cart: this.props.cart,
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

  componentWillMount() {
    console.log('WillUpdate', this.props.user.id)
    const user = this.props.user.id;
    this.props.dispatch( { type: 'FETCH_CHECKOUT', payload: user  } );
    this.props.dispatch({ type: 'GET_ALL_ORDERS' });
}

  handleHistoryClick = () => {
    console.log('event');
    this.props.history.push('/checkout');
}

  // handleSubmit = () => {
  //   console.log('In HRI pushing order to db', this.state.cart);
  //   // this.props.dispatch( { type: 'ADD_ORDER', payload: this.state.selectedProduct } );
  // }
  render() {
    const showCart = this.state.showCart;
    const open = Boolean(showCart);

    // let quantity = this.props.productQuantity;
    let cartItems;
    cartItems = this.props.menu.map(menu => {
        let quantity = this.props.productQuantity;
      return (
            <li className="cart-item" key={menu.id}>
            <div className="product-info">
                <p className="quantity">x1 {menu.title} ${menu.price}</p>
            </div>
            {/* <a
                className="product-remove"
                href="#"
                onClick={this.props.removeProduct.bind(this, menu.id)}
            >
                ×
            </a> */}
            </li>
            );
          });
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
        {/* {JSON.stringify('history here:')}
        {JSON.stringify(this.props.history)} */}
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
              <table>
                <tbody>
                  <tr>
                    <td>No. of items</td>
                    {JSON.stringify('order here')}
                    {JSON.stringify(this.props.order)}
                    <td>:</td>
                    <td>
                    <strong>{this.props.totalItems}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Sub Total</td>
                    <td>:</td>
                    <td>
                      <strong>${this.props.total}</strong>
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
            {/* <CartHeaderListItems 
            history={this.props.history} 
            user={this.props.user}
            order={this.props.order}
            cartBounce={this.state.cartBounce}
            total={this.state.totalAmount}
            totalItems={this.state.totalItems}
            cart={this.state.cart}
            removeProduct={this.handleRemoveProduct}
            handleSearch={this.handleSearch}
            handleMobileSearch={this.handleMobileSearch}
            handleCategory={this.handleCategory}
            categoryTerm={this.state.category}
            updateQuantity={this.updateQuantity}
            productQuantity={this.state.moq}
            cart={cart} 
            /> */}
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
  order: reduxState.orders,
  chef: reduxState.chefs,
  user: reduxState.user,
});

export default connect(mapStateToProps)(CartHeader);

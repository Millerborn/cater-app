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
    this.props.dispatch({ type: 'GET_ORDERS' });
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
    if(this.props.cartItems){
    cartItems = this.props.cartItems.map((order, i) => {
      return (
            <li className="cart-item" key={i}>
              <div className="product-info">
                  <p className="quantity">x{order.quantity} <strong>{order.title}</strong> ${order.price * order.quantity}              
                    <DeleteIcon></DeleteIcon>
                  </p>
              </div>
            </li>
            );
          });
        } else {
          cartItems=[];
        }

    // let cartItems = this.props.cart;
    // cartList = '';
    // if (cartItems !== undefined){
    //   cartList = 
    // <div>
    //             <br></br>
    //             <p>{cartItem.title} {cartItem.price}</p>
    // </div>
    // ;
    // }
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
        {/* {JSON.stringify('order info here--------:')}
        {JSON.stringify(this.props.orders)} */}
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
            {JSON.stringify('props cart')}
            {JSON.stringify(this.props.cart)}
            {/* <CartHeaderListItems 
                  history={this.props.history} 
                  user={this.props.user}
                  cartBounce={this.state.cartBounce}
                  total={this.state.totalAmount}
                  totalItems={this.state.totalItems}
                  cart={this.props.cart}
                  removeProduct={this.handleRemoveProduct}
                  handleSearch={this.handleSearch}
                  handleMobileSearch={this.handleMobileSearch}
                  handleCategory={this.handleCategory}
                  categoryTerm={this.state.category}
                  updateQuantity={this.updateQuantity}
                  productQuantity={this.state.moq}
                  cart={this.props.cart} 
                  orders={this.props.orders}
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
  orders: reduxState.orders,
  chef: reduxState.chefs,
  user: reduxState.user,
});

export default connect(mapStateToProps)(CartHeader);

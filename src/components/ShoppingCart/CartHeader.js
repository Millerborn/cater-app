import React, { Component } from "react";
import { connect } from 'react-redux';
import CartScrollBar from "./CartScrollBar";
import EmptyCart from "./EmptyCart";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

class CartHeader extends Component {

  state = {
    showCart: null,
    totalItems: 0,
    totalAmount: 0,
    cart: this.props.orders,
  }

  componentDidMount() {
    const user = this.props.user.id;
    this.props.dispatch( { type: 'FETCH_CHECKOUT', payload: user  } );
  }

  removeItem = (order) => {
    this.props.dispatch( { type: 'REMOVE_FROM_CART', payload: order } );
    this.props.removeProduct(order.id);
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
    this.props.history.push('/checkout');
    this.handleClose();
  }

  sumTotalAmount() {    
    let total = 0;
    let cart = this.state.cart;
    for (var i = 0; i < cart.length; i++) {
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      ...this.state,
      totalAmount: total
    });
  }

  render() {
    const showCart = this.state.showCart;
    const open = Boolean(showCart);
    let cartItems;
    if(this.props.orders !== undefined){
    cartItems = this.props.orders.map( (order, i) => {
      const cartOrder = <p>x{order.quantity} {order.title} ${order.price}</p>
  return (
      <List key={i}>
          <ListItem>
          <ListItemText
              primary={cartOrder}
          />
          <ListItemSecondaryAction>
              <IconButton aria-label="Delete">
              <DeleteIcon 
                  onClick={() => this.removeItem(order)}
              />
              </IconButton>
          </ListItemSecondaryAction>
          </ListItem>
      </List>
      );
  })
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
            {JSON.stringify('cart')}
            {JSON.stringify(this.state.cart)}
              <table>
                <tbody>
                  <tr>
                    <td>No. of items</td>
                    <td>:</td>
                    <td>
                    <strong>{cartItems.length}</strong>
                    {/* {JSON.stringify(cartItems.quantity)} */}
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

export default connect(mapStateToProps)(withRouter(CartHeader));
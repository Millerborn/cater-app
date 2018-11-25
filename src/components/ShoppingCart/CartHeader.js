import React, { Component } from "react";
import { connect } from 'react-redux';
import CartScrollBar from "./CartScrollBar";
import EmptyCart from "./EmptyCart";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

class CartHeader extends Component {

    state = {
      showCart: null,
      cart: this.props.cartItems,
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

//   handleCart(e) {
//     e.preventDefault();
//     this.setState({
//       showCart: !this.state.showCart
//     });
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//   }

//   handleClickOutside(event) {
//     const cartNode = findDOMNode(this.refs.cartPreview);
//     // const buttonNode = findDOMNode(this.refs.cartButton);
//     if (cartNode.classList.contains("active")) {
//       if (!cartNode || !cartNode.contains(event.target)) {
//         this.setState({
//           showCart: false
//         });
//         event.stopPropagation();
//       }
//     }
//   }
//   componentDidMount() {
//     document.addEventListener(
//       "click",
//       this.handleClickOutside.bind(this),
//       true
//     );
//   }
//   componentWillUnmount() {
//     document.removeEventListener(
//       "click",
//       this.handleClickOutside.bind(this),
//       true
//     );
//   }
  render() {
    const showCart = this.state.showCart;
    const open = Boolean(showCart);
    // let quantity = this.props.productQuantity;
    let cartItems;
    cartItems = this.props.menu.map(menu => {
        let quantity = this.props.productQuantity;
      return (
            <li className="cart-item" key={menu.id}>
            <p>cart here</p>
            <div className="product-info">
                <p className="product-name">{menu.title}</p>
                <p className="product-price">{menu.time_to_make}</p>
            </div>
            <div className="product-total">
                <p className="quantity">
                {quantity} {quantity > 1 ? "Nos." : "No."}{" "}
                </p>
                <p className="amount">{quantity * this.props.chef.hourly_rate}</p>
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
                      <strong>{this.props.total}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <div>
                <a
                className="cart-icon"
                href="/hire-chef"
                onClick={this.handleCart.bind(this)}
                ref="cartButton"
                >
                <img
                    className={this.props.cartBounce ? "tada" : " "}
                    src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                    alt="Cart"
                />
                {this.props.totalItems ? (
                    <span className="cart-count">{this.props.totalItems}</span>
                ) : (
                    ""
                )}
                </a>
            </div> */}
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
                  // className={this.state.cart.length > 0 ? " " : "disabled"}
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
});

export default connect(mapStateToProps)(CartHeader);

import React, { Component } from "react";
import { connect } from 'react-redux';
import HireList from "./HireList/HireList";
import CartHeader from '../ShoppingCart/CartHeader';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import Nav from '../Nav/Nav';
import { withRouter } from 'react-router-dom';
import Carousel from 'nuka-carousel';
import '../../index.css';


class HirePage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      term: "",
      category: "",
      cartBounce: false,
      quantity: 1,
      quickViewProduct: {},
      modalActive: false,
      slideIndex: 0,
    };
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
  }

  // Filter by Category
  handleCategory(event) {
    this.setState({ ...this.state, category: event.target.value });
    console.log(this.state.category);
  }

  // Add to Cart
  handleAddToCart(selectedProducts) {
    let cart = this.state.cart;
    let productID = selectedProducts.menu_item_id;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID) !== false) {
      let index = this.checkProduct(productID);
      cart[index].quantity =
        Number(cart[index].quantity) + Number(productQty);
      this.setState({
        ...this.state,
        cart: cart
      });
    } else {
      cart.push(selectedProducts);
    }
    this.setState({
      ...this.state,
      cart: [...this.state.cart, cart],
      cartBounce: true
    });
    setTimeout(
      function() {
        this.setState({
          ...this.state,
          cartBounce: false,
          quantity: 1
        });
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }
  handleRemoveProduct(id) {
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id === id);
    cart.splice(index, 1);
    this.setState({
      ...this.state,
      cart: [...this.state.cart,cart]
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    // e.preventDefault();
  }

  checkProduct(productID) {
    let cart = this.state.cart;
    for (let i=0; i<cart.length; i++) {
      if (cart[i].menu_item_id === productID) {
        return i;
      }
    }
    return false;
  }
  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      ...this.state,
      totalItems: total
    });
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

  //Reset Quantity
  updateQuantity(qty) {
    console.log("quantity added...");
    this.setState({
      ...this.state,
      quantity: qty
    });
  }

  render() {
    const imageOne = this.props.menu[0];
    const imageTwo = this.props.menu[1];
    const imageThree = this.props.menu[2];
    const chef = this.props.menu[0];
      let chefName = '';
      if (chef !== undefined){
      chefName = 
      <div>
      <h2>Chef {chef.first_name} {chef.last_name}'s Menu</h2>
      <Carousel
            slideIndex={this.state.slideIndex}
            afterSlide={slideIndex => this.setState({ slideIndex })}
          >
            <img className="carousel-image" src={imageOne.image} />
            <img className="carousel-image" src={imageTwo.image} />
            <img className="carousel-image" src={imageThree.image} />
            <HireList
              total={this.state.totalAmount}
              productsList={this.state.products}
              searchTerm={this.state.term}
              addToCart={this.handleAddToCart}
              productQuantity={this.state.quantity}
              updateQuantity={this.updateQuantity}
              history={this.props.history}
              />
            </Carousel>
      </div>
      ;
      }
    return (
      <div className="container">
        {chefName}
        <div hidden>
          <CartHeader
            // // history={this.props.history} 
            // orders={this.props.orders}
            totalAmount={this.state.totalAmount}
            totalItems={this.state.totalItems}
            // cartItems={this.state.cart}
            removeProduct={this.handleRemoveProduct}
          />
        </div>
          {/* <Carousel
            slideIndex={this.state.slideIndex}
            afterSlide={slideIndex => this.setState({ slideIndex })}
          >
            <img src={imageOne.image} />
            <img src={imageTwo.image} />
            <img src={imageThree.image} />
            <HireList
              total={this.state.totalAmount}
              productsList={this.state.products}
              searchTerm={this.state.term}
              addToCart={this.handleAddToCart}
              productQuantity={this.state.quantity}
              updateQuantity={this.updateQuantity}
              history={this.props.history}
              />
            </Carousel> */}
        <div hidden>
          <CheckoutPage
            history={this.props.history} 
            total={this.state.totalAmount}
          />
        </div>
        <div hidden>
          <Nav
            history={this.props.history} 
          />
        </div>
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
export default connect(mapStateToProps)(withRouter(HirePage));



// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import HireListItem from "./HireListItem/HireListItem";
// import compose from 'recompose/compose';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../index.css';
// import { withStyles } from '@material-ui/core/styles';


// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//   },
//   dense: {
//     marginTop: 16,
//   },
//   menu: {
//     width: 200,
//   },
// });



// class HirePage extends Component {

//   render() {
//     const chef = this.props.menu[0];
//       let chefName = '';
//       if (chef !== undefined){
//       chefName = 
//       <div>
//       <h2>Chef {chef.first_name} {chef.last_name}'s Menu</h2>
//       </div>
//       ;
//       }

//     return (
//       <div className="container">
//           <HireListItem chef={chefName} />
//       </div>
//     );
//   }
// }

// const mapStateToProps = reduxState => ({
//     address: reduxState.address,
//     menu: reduxState.menu,
//     orders: reduxState.orders,
//     chef: reduxState.chefs,
//     user: reduxState.user,
// });

// export default 
//   compose( 
//   connect(mapStateToProps), 
//   withStyles(styles))(HirePage);

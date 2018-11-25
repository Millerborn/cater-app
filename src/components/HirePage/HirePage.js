import React, { Component } from "react";
import { connect } from 'react-redux';
// import ReactDOM from "react-dom";
// import axios from "axios";
import HireList from "./HireList/HireList";
import QuickView from "./QuickView";
import CartHeader from '../ShoppingCart/CartHeader';

import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TextField from '@material-ui/core/TextField';

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
      modalActive: false
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  // Fetch Initial Set of Products from external API
  getProducts() {
    this.props.dispatch({ type: 'FETCH_MENU' });
    this.props.dispatch({ type: 'GET_ORDERS' });
  }
  componentWillMount() {
    this.getProducts();
  }

  // Search by Keyword
  handleSearch(event) {
    this.setState({ term: event.target.value });
  }
  // Mobile Search Reset
  handleMobileSearch() {
    this.setState({ term: "" });
  }
  // Filter by Category
  handleCategory(event) {
    this.setState({ category: event.target.value });
    console.log(this.state.category);
  }
  // Add to Cart
  handleAddToCart(selectedProducts) {
    let cartItem = this.state.cart;
    let productID = selectedProducts.id;
    let productQty = selectedProducts.quantity;
    if (this.checkProduct(productID)) {
      console.log("hi");
      let index = cartItem.findIndex(x => x.id === productID);
      cartItem[index].quantity =
        Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem
      });
    } else {
      cartItem.push(selectedProducts);
    }
    this.setState({
      cart: cartItem,
      cartBounce: true
    });
    setTimeout(
      function() {
        this.setState({
          cartBounce: false,
          quantity: 1
        });
        console.log(this.state.quantity);
        console.log(this.state.cart);
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }
  handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id === id);
    cart.splice(index, 1);
    this.setState({
      cart: cart
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }
  checkProduct(productID) {
    let cart = this.state.cart;
    return cart.some(function(item) {
      return item.id === productID;
    });
  }
  sumTotalItems() {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
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
      totalAmount: total
    });
  }

  //Reset Quantity
  updateQuantity(qty) {
    console.log("quantity added...");
    this.setState({
      quantity: qty
    });
  }
  // Open Modal
  openModal(product) {
    this.setState({
      quickViewProduct: product,
      modalActive: true
    });
  }
  // Close Modal
  closeModal() {
    this.setState({
      modalActive: false
    });
  }

  render() {

    const chef = this.props.menu[0];
      let chefName = '';
      if (chef !== undefined){
      chefName = 
      <div>
      <h2>Chef {chef.first_name} {chef.last_name}'s Menu</h2>
      </div>
      ;
    }

    return (
      <div className="container">
        {JSON.stringify('stringing')}
        {JSON.stringify(this.state)}
        {JSON.stringify(this.state.totalAmount)}
        {chefName}
        <CartHeader
          cartBounce={this.state.cartBounce}
          total={this.state.totalAmount}
          totalItems={this.state.totalItems}
          cartItems={this.state.cart}
          removeProduct={this.handleRemoveProduct}
          handleSearch={this.handleSearch}
          handleMobileSearch={this.handleMobileSearch}
          handleCategory={this.handleCategory}
          categoryTerm={this.state.category}
          updateQuantity={this.updateQuantity}
          productQuantity={this.state.moq}
        />
        <HireList
          productsList={this.state.products}
          searchTerm={this.state.term}
          addToCart={this.handleAddToCart}
          productQuantity={this.state.quantity}
          updateQuantity={this.updateQuantity}
          openModal={this.openModal}
          chef={this.props.chef}
          address={this.props.address} 
          history={this.props.history}
          menu={this.props.menu}
          orders={this.props.orders} 
          />

      <ExpansionPanel>
                     <ExpansionPanelSummary>
                         <Button onClick={this.createCustomOrder}>Enter a custom order</Button>
                     </ExpansionPanelSummary>
                     <ExpansionPanelDetails>
                         <TextField
                            id="outlined-multiline-flexible"
                            label="Custom Order"
                            multiline
                            rowsMax="4"
                            name="customOrder"
                            value={this.state.customOrder}
                            onChange={this.handleChange}
                            className="customOrderInput"
                            margin="normal"
                            variant="outlined"
                            />
                            <Button onClick={this.customOrderClick}>Add custom Order</Button>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

        <QuickView
          product={this.state.quickViewProduct}
          openModal={this.state.modalActive}
          closeModal={this.closeModal}
        />
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

export default connect(mapStateToProps)(HirePage);





// import React, { Component } from 'react';
// import HireList from './HireList/HireList';
// import { connect } from 'react-redux';
// import Button from '@material-ui/core/Button';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import Orders from './Orders/Orders';
// import Products from '../ShoppingCart/Products';

// class HirePage extends Component {

//     state = {
//         customOrder: '',
//         orderTotal: '',
//     }

//     componentDidMount() {
//         this.props.dispatch({ type: 'FETCH_MENU' });
//         this.props.dispatch({ type: 'GET_ORDERS' });
//     }

//     createCustomOrder = () => {
//         console.log('creating custom Order');
//     }

//     calculateOrderTotal = (time, hourly) => {
//         console.log('calculating order total', time, hourly);
//         let price = time * hourly;
//         return price;
//     }

//     handleChange = (event) => {
//         console.log('Running custom order handle change', event.target.value);
//         this.setState({
//             ...this.state,
//             [event.target.name]: event.target.value,
//             orderTotal: this.calculateOrderTotal,
//         })
//         console.log('state in hire-page', this.state);
        
//     }

//     render() {
//         const chef = this.props.menu[0];
//         let chefName = '';
//         if (chef !== undefined){
//         chefName = 
//         <div>
//         <h2>Chef {chef.first_name} {chef.last_name}'s Menu</h2>
//         </div>
//         ;
//         }

//         // const time = chef.time_to_make;
//         // const hourly = this.props.menu.hourly_rate;
//         return (
//             <div className="App">
//                 <Products />
//                 <Orders chefInfo={this.props.chef}/>
//                 {/* {JSON.stringify(this.props.chef)} */}
//                 {chefName}
//                 <HireList chef={this.props.chef} address={this.props.address} history={this.props.history} />
//                 <ExpansionPanel>
//                     <ExpansionPanelSummary>
//                         <Button onClick={this.createCustomOrder}>Enter a custom order</Button>
//                     </ExpansionPanelSummary>
//                     <ExpansionPanelDetails>
//                         <TextField
//                             id="outlined-multiline-flexible"
//                             label="Custom Order"
//                             multiline
//                             rowsMax="4"
//                             name="customOrder"
//                             value={this.state.customOrder}
//                             onChange={this.handleChange}
//                             className="customOrderInput"
//                             margin="normal"
//                             variant="outlined"
//                             />
//                             <Button onClick={this.customOrderClick}>Add custom Order</Button>
//                     </ExpansionPanelDetails>
//                 </ExpansionPanel>
//             </div>
//         );
//     }
// }

// const mapStateToProps = reduxState => ({
//     address: reduxState.address,
//     menu: reduxState.menu,
//     order: reduxState.orders,
//     chef: reduxState.chefs,
// });

// export default connect(mapStateToProps)(HirePage);

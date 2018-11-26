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
      modalActive: false,
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMobileSearch = this.handleMobileSearch.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.sumTotalAmount = this.sumTotalAmount.bind(this);
    this.checkProduct = this.checkProduct.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    // this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
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
    this.setState({ ...this.state, term: event.target.value });
  }
  // Mobile Search Reset
  handleMobileSearch() {
    this.setState({ ...this.state, term: "" });
  }
  // Filter by Category
  handleCategory(event) {
    this.setState({ ...this.state, category: event.target.value });
    console.log(this.state.category);
  }
  // Add to Cart
  handleAddToCart(selectedProducts) {
    let cart = this.state.cart;
    console.log('cart beginning of handle add: ', this.state.cart);
    console.log('hi from handle add to cart in hire page, selected product: ', selectedProducts);
    let productID = selectedProducts.menu_item_id;
    let productQty = selectedProducts.quantity;
    console.log('checkProduct:',this.checkProduct(productID), 'productID:',productID);
    if (this.checkProduct(productID) !== false) {
      console.log('if statement', this.checkProduct(productID));
      let index = this.checkProduct(productID);
      cart[index].quantity =
        Number(cart[index].quantity) + Number(productQty);
      this.setState({
        ...this.state,
        cart: cart
      });
    } else {
      console.log('else statement');
      
      cart.push(selectedProducts);
    }
    this.setState({
      ...this.state,
      // cart: [...this.state.cart,cart],
      cartBounce: true
    });
    setTimeout(
      function() {
        this.setState({
          ...this.state,
          cartBounce: false,
          quantity: 1
        });
        console.log(this.state.quantity);
        console.log('cart: ', this.state.cart);
      }.bind(this),
      1000
    );
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }
  // handleRemoveProduct(id, e) {
  //   let cart = this.state.cart;
  //   let index = cart.findIndex(x => x.id === id);
  //   cart.splice(index, 1);
  //   this.setState({
  //     ...this.state,
  //     cart: [...this.state.cart,cart]
  //   });
  //   this.sumTotalItems(this.state.cart);
  //   this.sumTotalAmount(this.state.cart);
  //   e.preventDefault();
  // }
  checkProduct(productID) {
    let cart = this.state.cart;
    for (let i=0; i<cart.length; i++) {
      if (cart[i].menu_item_id===productID) {
        return i;
      }
    }
    return false;
    // return cart.some(function(item) {
    // // cart.some(function(item) {
    //   return item.menu_item_id === productID;
    // });
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
  // Open Modal
  openModal(product) {
    this.setState({
      ...this.state,
      quickViewProduct: product,
      modalActive: true
    });
  }
  // Close Modal
  closeModal() {
    this.setState({
      ...this.state,
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
        {/* {JSON.stringify('history')}
        {JSON.stringify(this.props.history)} */}
        {chefName}
        <CartHeader
          history={this.props.history} 
          user={this.props.user}
          orders={this.props.orders}
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
          quantity={this.state.quantity}

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
        {/* <div>
          <CartHeader history={this.props.history} />
        </div> */}
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

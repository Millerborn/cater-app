import React, { Component } from "react";
import Counter from "../../ShoppingCart/Counter";
import { connect } from 'react-redux';
import '../../../index.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


class HireListItem extends Component {

    state = {
      selectedProduct: {},
      quickViewProdcut: {},
      isAdded: false
  }

  addToCart(order_date, address_id, menu_id, chef_id, price, quantity, title) {
    let order = { 
        order_date: order_date,
        address_id: address_id,
        menu_item_id: menu_id,
        chef_id: chef_id,
        price: price,
        quantity: quantity,
        title: title
     }
    this.props.dispatch( { type: 'ADD_TO_CART', payload: order } );
    this.props.dispatch( { type: 'UPDATE_QUANTITY', payload: order.quantity } );
    // this.props.dispatch( { type: 'UPDATE_TOTAL', payload: order.price } );
    this.setState(
      {
        ...this.state,
        selectedProduct: {
          order_date: order_date,
          address_id: address_id,
          menu_item_id: menu_id,
          chef_id: chef_id,
          price: price,
          quantity: quantity,
          title: title
        }
      },
      function() {
        this.props.addToCart(order);
      }
    );
    this.setState(
      {
        ...this.state,
        isAdded: true
      },
      function() {
        setTimeout(() => {
          this.setState({
            ...this.state,
            isAdded: false,
            selectedProduct: {}
          });
        }, 2000);
      }
    );
  }
  quickView(order_date, address_id, menu_id, chef_id, price, quantity, title) {
    this.setState(
      {
        ...this.state,
        quickViewProdcut: {
          order_date: order_date,
          address_id: address_id,
          menu_item_id: menu_id,
          chef_id: chef_id,
          price: price,
          quantity: quantity,
          title: title
        }
      },
      function() {
        this.props.openModal(this.state.quickViewProdcut);
      }
    );
  }

  timeToMake = (time) => {
    if(time <= 1){
      return (<p>{time} Hour to make</p>);
    } else if (time > 1) {
      return (<p>{time} Hours to make</p>);
    }
  }

  render() {
    const address = this.props.user.id;
    let quantity = this.props.productQuantity;
    let menuCard;
    menuCard = this.props.menu.map( (menu, i) => {
      let menu_item_id = menu.id;
      let order_date = '11-26-2018';
      let chef_id = menu.chef_id;
      let price = menu.price;
      let title = menu.title;
        return (
          <Card className="card-menu" key={i}>
              <CardMedia
                        className="menu-item-image"
                        component="img"
                        alt= "https://via.placeholder.com/160x80"
                        height="200"
                        src={menu.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <h2>{menu.title}</h2>
                        <h5>Ingredients</h5>
                        <p>{menu.ingredients}</p>
                        <div>{this.timeToMake(menu.time_to_make)} ${menu.price}</div>
                        <br></br>
                        <h5>How many people will be having this?</h5>
                    </CardContent>
                    <CardActions>
                    <Counter
                      productQuantity={quantity}
                      updateQuantity={this.props.updateQuantity}
                      resetQuantity={this.resetQuantity}
                    />
                      <Button
                        className={!this.state.isAdded ? "" : "added"}
                        type="button"
                        onClick={this.addToCart.bind(
                          this,
                          order_date,
                          address,
                          menu_item_id,
                          chef_id,
                          price,
                          quantity,
                          title
                        )}
                      >
                        {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
                      </Button>
                    </CardActions>
                </Card>
        )});
    return (
      <div className="product">
        {menuCard}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    address: reduxState.address,
    user: reduxState.user,
    orders: reduxState.orders,
});

export default connect(mapStateToProps)(HireListItem);

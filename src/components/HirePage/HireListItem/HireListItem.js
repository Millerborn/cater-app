import React, { Component } from "react";
import { connect } from 'react-redux';
import '../../../index.css';
import Button from '@material-ui/core/Button';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Counter from "../../ShoppingCart/Counter";

class HireListItem extends Component {

state = {
  selectedProduct: {},
  isAdded: false,
  totalAmount: 0,
  quantity: 0,
}

addToCart = (order_date, person_id, menu_id, chef_id, price, quantity, title) => {
  const orderInfo = {
    order_date: order_date,
    person_id: person_id,
    menu_item_id: menu_id,
    chef_id: chef_id,
    price: price,
    quantity: quantity,
  }
  let order = { 
      order_date: order_date,
      person_id: person_id,
      menu_item_id: menu_id,
      chef_id: chef_id,
      price: price,
      quantity: quantity,
      title: title
    }
  this.props.dispatch( { type: 'ADD_TO_CART', payload: orderInfo } );
  console.log('orderInfo', orderInfo);
  console.log('order', order);
}

timeToMake = (time) => {
  if(time <= 1){
    return (<p>{time} Hour to make</p>);
  } else if (time > 1) {
    return (<p>{time} Hours to make</p>);
  }
}

quantity = (quantity) => {
  this.setState({
    quantity: quantity,
  })
}

  render() {
    const person_id = this.props.user.id;
    let quantity = this.state.quantity;
    let menuCard;
    menuCard = this.props.menu.map( (menu, i) => {
      return (
          <div
            id="display-menu-div"
            key={i}
            style={{ background: `url('${menu.image}') no-repeat center center` }}
            src={menu.image}
          >
            <strong><h1 id="menu-card-title">{menu.title}</h1></strong>
          </div>
      )});
    let menu;
    menu = this.props.menu.map( (menu, i) => {
      let menu_item_id = menu.id;
      let order_date = '12-7-2018';
      let chef_id = menu.chef_id;
      let price = menu.menu_price;
      let title = menu.title;
      return (
        <div className="center" key={i}>
          <h1>{menu.title}</h1>
          <h5>Please have these ingredients ready for your chef when they arrive</h5>
          <p>{menu.ingredients}</p>
          <div>{this.timeToMake(menu.time_to_make)}</div>
          <h5>How many people will be having this?</h5>
            <Counter quantity={this.quantity} />
            <Button
              color="primary"
              variant="contained"
              id="hire-menu-button"
              type="button"
              onClick={this.addToCart.bind(
                this,
                order_date,
                person_id,
                menu_item_id,
                chef_id,
                price,
                quantity,
                title
              )}
            >
            add
            </Button>			
          </div>
      )});
    return (
      <div>
        <Slider>
          {menuCard}
        </Slider>
          <h3 id="hire-list-break">What would you like?</h3>
          {JSON.stringify('this.state.quantity ->')}
          {JSON.stringify(this.state.quantity)}
          {menu}
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

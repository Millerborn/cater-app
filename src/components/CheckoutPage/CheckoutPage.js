import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import '../../index.css';
import GridList from '@material-ui/core/GridList';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';

class CheckoutPage extends Component {

    state = {
        cart: this.props.orders,
        totalAmount: 0,
    }

    removeItem = (order) => {
        console.log('item order_id: ', order);
        this.props.dispatch( { type: 'REMOVE_FROM_CART', payload: order } );
    }

    componentWillMount() {
        const user = this.props.user.id;
        this.props.dispatch( { type: 'FETCH_CHECKOUT', payload: user  } );
    }

    // sumTotalAmount() {    
    //     let total = 0;
    //     let orders = this.props.orders;
    //     for (var i = 0; i < orders.length; i++) {
    //       total += orders[i].price * parseInt(orders[i].quantity);
    //     }
    //     this.setState({
    //       ...this.state,
    //       totalAmount: total
    //     });
    //     // console.log('cart total', this.state.totalAmount);
    //   }

  render() {
    const orderInfo = this.props.orders.cart[0];
    let orderList = '';
    if (orderInfo !== undefined){
        orderList = 
        <div>
                <h4>Review and order Chef</h4>
                    <h5>Your order information</h5>
                    <br></br>
                    <p>{orderInfo.first_name} {orderInfo.last_name}</p>
                    <p>{orderInfo.street} {orderInfo.city} {orderInfo.state}</p>
                    <p>{orderInfo.zip}</p>
                    <p>{orderInfo.address_type}</p>
                    <br></br>
                    <br></br>
                    <p>{orderInfo.email}</p>
                    <p>{orderInfo.phone}</p>
                <br></br>
                <br></br>
            </div>
        } else {
            orderList = [];
    }

    return (
        <div id="main-checkout-div">
            <h3>Checkout</h3>
                <div id="checkout-cart" onSubmit={this.handleNextClick}>
                    <GridList className="checkout-gridList" cols={2.5} >
                        {orderList}
                        <br></br>
                        <div>
                        <h3>Your Order</h3>
                            {this.props.orders.cart.map( (order, i) => {
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
                            })}
                            <div>
                                <p>No. People: {this.props.orders.people}</p>
                                <p>Order Total: {this.props.orders.total}</p>
                                <Button color="primary" className="payment-button">Checkout</Button>
                            </div>
                        </div>
                    </GridList>
                </div>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    user: reduxState.user,
    orders: reduxState.orders,
    menu: reduxState.menu,
    address: reduxState.address,
});

export default connect(mapStateToProps)(withRouter(CheckoutPage));
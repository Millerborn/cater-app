import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import '../../index.css';
import GridList from '@material-ui/core/GridList';
import DeleteIcon from '@material-ui/icons/Delete';


class CheckoutPage extends Component {

    state = {
        cart: this.props.orders,
        totalAmount: 0,
    }

    removeItem = (id) => {
        console.log('removing from cart id: ', id);
        this.props.dispatch( { type: 'REMOVE_FROM_CART', payload: id } );
    }

    componentWillMount() {
        const user = this.props.user.id;
        console.log('WillUpdate', user)
        this.props.dispatch( { type: 'FETCH_CHECKOUT', payload: user  } );
    }

    calculateOrder = () => {        
        let total = 0;
        let cart = this.state.cart;
        for (let i = 0; i < cart.length; i++) {
            console.log('in calculate order', cart);
            total += cart[i].price * parseInt(cart[i].quantity);
        }
        this.setState({
            ...this.state,
            totalAmount: total
        });
    }


  render() {
    const orderInfo = this.props.orders[0];
    let orderList = '';
    if (orderInfo !== undefined){
        console.log('order info', orderInfo); 
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
            {JSON.stringify('total amount')}
            {JSON.stringify(this.props.total)}
                <div id="checkout-cart" onSubmit={this.handleNextClick}>
                    <GridList className="checkout-gridList" cols={2.5} >
                        {orderList}
                        <br></br>
                        <div>
                        <h3>Your Order</h3>
                            {this.props.cart.map( (order, i) => {
                                console.log('mapping orders: ', order); 
                            return (
                                    <div id="checkout-order-information" key={i}>
                                        <p>
                                            x{order.quantity} {order.title} ${order.price} 
                                            <DeleteIcon onClick={this.props.removeProduct.bind(this, order.id)}></DeleteIcon>
                                        </p>
                                    </div>
                            );
                            })}
                            <div>
                                <Button className="payment-button">Checkout</Button>
                            </div>
                        </div>
                            <p>Order Total: {this.props.total}</p>
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

export default connect(mapStateToProps)(CheckoutPage);
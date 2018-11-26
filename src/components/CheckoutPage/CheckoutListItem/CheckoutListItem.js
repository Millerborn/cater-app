
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../index.css';
// import Button from '@material-ui/core/Button';


class CheckoutListItem extends Component {

    // handleClick = (id) => {
    //     event.preventDefault();
    //     console.log('chef id', id);
    //     this.props.dispatch( { type: 'SEND_MENU_ID', payload: id } );
    //     this.props.history.push('/hire-chef');
    // }

    timeToMake = (time) => {
        if(time <= 1){
          return (<p>{time} Hour to make</p>);
        } else if (time > 1) {
          return (<p>{time} Hours to make</p>);
        }
      }

    // Displaying details for a single chef
    render() {
        // const key = this.props.order.id;
    const orderCart = this.props.menu;
    let orderReview = '';
    if (orderCart !== undefined){
        orderReview = 
        <div>
            {JSON.stringify(orderCart)}
            <p>x1 {orderCart.title} {orderCart.price}</p>
        </div>
    ;
}
        return (
            <div className="checkout-list-items">
                <div className="checkout-list-details">
                {orderReview}
                {/* {JSON.stringify('cl props.order')}
                {JSON.stringify(this.props.order)}
                <p>Hello this is order info {this.props.order.time_to_make} ${this.props.order.price}</p> */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    order: reduxState.orders,
    menu: reduxState.menu,
});

export default connect(mapStateToProps)(CheckoutListItem);

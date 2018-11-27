import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../index.css';
// import Button from '@material-ui/core/Button';


class CartHeaderListItem extends Component {

    render() {
        // const cart = this.props.cart[0];
        const orders = this.props.reduxState.orders;
        return (
            <div className="checkout-list-items">
                <div className="checkout-list-details">
                {JSON.stringify('JSON orders in CHL Items')}
                {JSON.stringify(orders)}
                    <p> x1 cart item here</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(CartHeaderListItem);
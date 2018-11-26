import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../index.css';
// import Button from '@material-ui/core/Button';


class CartHeaderListItem extends Component {

    componentDidMount() {
        this.props.dispatch({type: 'GET_ORDERS'});
    }

    render() {
        // const cart = this.props.cart[0];
        const menu = this.props.reduxState.menu;
        return (
            <div className="checkout-list-items">
                <div className="checkout-list-details">
                    {JSON.stringify(menu)}
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
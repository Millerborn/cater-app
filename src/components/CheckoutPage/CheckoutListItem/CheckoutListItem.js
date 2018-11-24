
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../index.css';
import Button from '@material-ui/core/Button';
import '../../../index.css';


class CheckoutListItem extends Component {

    // handleClick = (id) => {
    //     event.preventDefault();
    //     console.log('chef id', id);
    //     this.props.dispatch( { type: 'SEND_MENU_ID', payload: id } );
    //     this.props.history.push('/hire-chef');
    // }

    // Displaying details for a single chef
    render() {
        const key = this.props.key;
        return (
            <div className="checkout-list-items">
                <div className="checkout-list-details">
                    <p key={key}> x1 {this.props.order.title} {this.props.order.time_to_make} Hours</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(CheckoutListItem);

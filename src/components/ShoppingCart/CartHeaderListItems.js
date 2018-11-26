import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../index.css';
// import Button from '@material-ui/core/Button';


class CartHeaderListItem extends Component {

    // handleClick = (id) => {
    //     event.preventDefault();
    //     console.log('chef id', id);
    //     this.props.dispatch( { type: 'SEND_MENU_ID', payload: id } );
    //     this.props.history.push('/hire-chef');
    // }

    // Displaying details for a single chef
    render() {
        return (
            <div className="checkout-list-items">
                <div className="checkout-list-details">
                    <p> x1 {this.props.order.price}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(CartHeaderListItem);

//  <li className="cart-item" key={order.id}>
//             <p>cart here</p>
//             <div className="product-info">
//                 <p className="product-name">{order.title}</p>
//                 <p className="product-price">{order.time_to_make}</p>
//             </div>
//             <div className="product-total">
//                 <p className="quantity">
//                 {quantity} {quantity > 1 ? "Nos." : "No."}{" "}
//                 </p>
//                 <p className="amount">{quantity * this.props.chef.hourly_rate}</p>
//             </div>
//              <a
//                 className="product-remove"
//                 href="#"
//                 onClick={this.props.removeProduct.bind(this, menu.id)}
//             >
//                 ×
//             </a>
//              </li>




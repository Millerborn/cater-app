import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class Orders extends Component {

    state = {
        showCart: false,
        cart: this.props.cartItems,
    }

    handleCart(e) {
        e.preventDefault();
        this.setState({
          showCart: !this.state.showCart
        });
      }

      handleSubmit(e) {
        e.preventDefault();
      }

    // Displays a vertical list with project details
    render() {
        // const time = this.props.chefInfo.hourly_rate;
        return (
            <div className="chef-list">
                {JSON.stringify(this.state.cart)}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    user: reduxState.user,
    menu: reduxState.menu,
});

export default connect(mapStateToProps)(Orders);
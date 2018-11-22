import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutListItem from '../ChefListItem/ChefListItem';

class CheckoutList extends Component {

    // Displays a vertical list with project details
    render() {
        return (
            <div className="chef-list">
                {this.props.chefs.map((chef, i) => {
                    return (<ChefListItem key={i} chef={chef} history={this.props.history} />);
                })}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    orders: reduxState.orders,
});

export default connect(mapStateToProps)(CheckoutList);
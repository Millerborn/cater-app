import React, { Component } from 'react';
import { connect } from 'react-redux';
import CheckoutListItem from '../CheckoutListItem/CheckoutListItem';

class CheckoutList extends Component {

    // Displays a vertical list with project details
    render() {
        return (
            <div>
                {/* {JSON.stringify('cl props.order')}
                {JSON.stringify(this.props.order)} */}
                {this.props.order && this.props.order.map((order, i) => {
                    return (
                    <CheckoutListItem key={i} order={this.props.order} history={this.props.history} />
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(CheckoutList);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChefListItem from '../ChefListItem/ChefListItem';

class ChefList extends Component {

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
    reduxState,
    chefs: reduxState.chefs,
});

export default connect(mapStateToProps)(ChefList);
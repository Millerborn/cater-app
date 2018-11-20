import React, { Component } from 'react';
import { connect } from 'react-redux';
import HireListItem from '../HireListItem/HireListItem';

class HireList extends Component {

    // Displays a vertical list with project details
    render() {
        return (
            <div className="chef-list">
                {this.props.chefs.map((chef, i) => {
                    return (<HireListItem key={i} chef={chef} history={this.props.history} />);
                })}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
    chefs: reduxState.chefs,
});

export default connect(mapStateToProps)(HireList);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HireListItem from '../HireListItem/HireListItem';

class HireList extends Component {

    // Displays a vertical list with project details
    render() {
        return (
            <div className="chef-list">
                {this.props.menus.map((menu, i) => {
                    return (<HireListItem key={i} menu={menu} history={this.props.history} />);
                })}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    menus: reduxState.menus,
});

export default connect(mapStateToProps)(HireList);
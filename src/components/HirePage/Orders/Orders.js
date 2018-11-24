import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class Orders extends Component {

    // Displays a vertical list with project details
    render() {
        const time = this.props.chefInfo.hourly_rate;
        return (
            <div className="chef-list">
                {time}
                {JSON.stringify(this.props.chefInfo.hourly_rate)}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    user: reduxState.user,
    menu: reduxState.menu,
});

export default connect(mapStateToProps)(Orders);
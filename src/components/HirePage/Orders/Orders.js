import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';


class Orders extends Component {
    
    handleClick = (event) => {
        console.log('Hire chef button', this.props);
        this.props.history.push('/checkout');
    }

    // Displays a vertical list with project details
    render() {
        const time = this.props.menu.time_to_make;
        return (
            <div className="chef-list">
                {time}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    user: reduxState.user,
    menu: reduxState.menu,
});

export default connect(mapStateToProps)(Orders);
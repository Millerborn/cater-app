
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../index.css';
import Button from '@material-ui/core/Button';


class HireListItem extends Component {

    handleClick = (event) => {
        event.preventDefault();
        console.log('Hire chef button', this.props);
        this.props.history.push('/checkout');
    }

    // Displaying details of selected chef
    render() {
        return (
            <div className="chef-list-item">
                <img alt="chef-avatar" src="https://via.placeholder.com/320x240" />
                <div className="details">
                    <h3>{this.props.chef.first_name} {this.props.chef.last_name}</h3>
                    <p>{this.props.menu.title}</p>
                    <p>Required Ingredients: {this.props.menu.ingredients}</p>
                    <p>{this.props.menu.time_to_make}</p>
                    <p>Style {this.props.menu.style}</p>
                    <p>Kitchenware required, {this.props.menu.required_tools}</p>
                    <p>Price ${this.props.menu.menu_price}</p>
                </div>
                <Button variant="outlined" onClick={this.handleClick}>Checkout</Button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(HireListItem);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../index.css';
import Button from '@material-ui/core/Button';


class ChefListItem extends Component {

    handleClick = (event) => {
        event.preventDefault();
        console.log('Hire chef button', this.props);
        this.props.history.push('/hire-chef');
    }

    // Displaying details for a single chef
    render() {
        return (
            <div className="chef-list-item">
                <img alt="chef-avatar" src="https://via.placeholder.com/320x240" />
                <div className="details">
                    <h3>{this.props.chef.first_name} {this.props.chef.last_name}</h3>
                    <p>{this.props.chef.years_of_experience} Years of experience</p>
                    <p>{this.props.chef.specialty} Speciality</p>
                    <p>Bio: {this.props.chef.description}</p>
                    <p>Chef Rating {this.props.chef.rating}</p>
                    <p>min price ${this.props.chef.min_price}</p>
                </div>
                <Button variant="outlined" onClick={this.handleClick}>Hire Chef</Button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(ChefListItem);

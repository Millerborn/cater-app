
import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../index.css';
import Button from '@material-ui/core/Button';


class ChefListItem extends Component {

    handleClick = (id) => {
        // event.preventDefault();
        console.log('chef id', id);
        this.props.dispatch( { type: 'SEND_MENU_ID', payload: id } );
        this.props.history.push('/hire-chef');
    }

    // Displaying details for a single chef
    render() {
        const key = this.props.chef.id;
        return (
            <div className="chef-list-item">
                <img className="chef-profile-pic" alt="chef-avatar" src={this.props.chef.profile_pic} />
                <div className="details">
                    <h3>{this.props.chef.first_name} {this.props.chef.last_name}</h3>
                    <p>{this.props.chef.years_of_experience} Years of experience</p>
                    <p>{this.props.chef.specialty} Speciality</p>
                    <p>Bio: {this.props.chef.description}</p>
                    <p>Chef Rating {this.props.chef.rating}</p>
                    <p>Hourly Rate ${this.props.chef.hourly_rate}</p>
                </div>
                <Button variant="outlined" onClick={() => this.handleClick(key)}>Hire Chef</Button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(ChefListItem);

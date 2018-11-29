import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Popover from '@material-ui/core/Popover';
import '../../index.css';

class CreateCustomerAddress extends Component {

    state = {
        street: '',
        city: '',
        state: '',
        zip: '',
        address_type: '',
    }

    // handle changes in the form inputs
    handleChange = event => {
        const address = this.state;
        const userId = this.props.user.id;
        console.log('user id', userId);
        console.log('handle change address', address);
        this.setState({
            id: userId,
            [event.target.name]: event.target.value,
        })
    }

    handleAddressSubmit = (event) => {
        event.preventDefault();
        console.log('creating new user address information', this.state);
        this.props.dispatch( { type: 'ADD_ADDRESS', payload: this.state } );
        this.handleClick();
    }

    // handle on click, go to next page and dispatch information to state in index
    handleClick = () => {
        console.log('next click history', this.props.history);
        this.props.history.push('/display-chef');
    }

  render() {
    return (
        <div id="mainDiv">
            <form className="user-update-form" onSubmit={this.handleAddressSubmit}>
                        <h4>Create your address</h4>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label="street" name="street" margin="normal" variant="outlined"
                                value={this.state.street} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label="city" name="city" margin="normal" variant="outlined"
                                value={this.state.city} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label="state" name="state" margin="normal" variant="outlined"
                                value={this.state.state} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='number' label="zip code" name="zip" margin="normal" variant="outlined"
                                value={this.state.zip} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label="address-type" name="address_type" margin="normal" variant="outlined"
                                value={this.state.address_type} onChange={this.handleChange} />
                        </FormControl>
                        <Button 
                            margin="normal" 
                            variant="outlined" 
                            type='submit'
                        >
                            Submit
                        </Button>
                    </form>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    order: reduxState.orders,
    user: reduxState.user,
    address: reduxState.address,
});

export default connect(mapStateToProps)(CreateCustomerAddress);

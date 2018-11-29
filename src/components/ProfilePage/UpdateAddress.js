import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Popover from '@material-ui/core/Popover';
import '../../index.css';

class updateCustomer extends Component {

    state = {
        id: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        address_type: '',
    }

    // handle changes in the form inputs
    handleChange = event => {
        const address = this.props.address[0];
        const addressId = address.id
        console.log('handle change address', address);
        this.setState({
            id: addressId,
            [event.target.name]: event.target.value,
        })
    }

    handleAddressSubmit = (event) => {
        event.preventDefault();
        console.log('updating address information', this.state);
        this.props.dispatch( { type: 'EDIT_ADDRESS', payload: this.state } );
        this.props.handleClose();
    }

  render() {
      const profileInfo = this.props.address[0];
    return (
        <div id="mainDiv">
            <form className="user-update-form" onSubmit={this.handleAddressSubmit}>
                        <h4>Update your address</h4>
                        {/* <div>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.id} name="id" margin="normal" variant="outlined"
                                value={this.state.id} onChange={this.handleChange} />
                        </FormControl>
                        </div> */}
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.street} name="street" margin="normal" variant="outlined"
                                value={this.state.street} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.city} name="city" margin="normal" variant="outlined"
                                value={this.state.city} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.state} name="state" margin="normal" variant="outlined"
                                value={this.state.state} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='number' label={profileInfo.zip} name="zip" margin="normal" variant="outlined"
                                value={this.state.zip} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.address_type} name="address_type" margin="normal" variant="outlined"
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

export default connect(mapStateToProps)(updateCustomer);

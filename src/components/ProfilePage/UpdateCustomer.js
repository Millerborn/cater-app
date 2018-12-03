import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import '../../index.css';

class updateCustomer extends Component {

    state = {
        id: '',
        first_name: '',
        last_name: '',
        favorites: '',
        email: '',
        phone: '',
    }

    // handle changes in the form inputs
    handleChange = event => {
        const customer = this.props.address[0];
        const customerId = customer.id
        this.setState({
            id: customerId,
            [event.target.name]: event.target.value,
        })
    }

    handleCustomerSubmit = (event) => {
        event.preventDefault();
        console.log('updating customer information', this.state);
        this.props.dispatch( { type: 'EDIT_CUSTOMER', payload: this.state } );
        this.props.handleClose();
    }

  render() {
      const profileInfo = this.props.address[0];
    return (
        <div id="mainDiv">
            <form className="user-update-form" onSubmit={this.handleCustomerSubmit}>
                        <h4>Update your Profile Information</h4>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.first_name} name="first_name" margin="normal" variant="outlined"
                                value={this.state.first_name} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.last_name} name="last_name" margin="normal" variant="outlined"
                                value={this.state.last_name} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label="favorites" name="favorites" margin="normal" variant="outlined"
                                value={this.state.favorites} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.email} name="email" margin="normal" variant="outlined"
                                value={this.state.email} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='number' label={profileInfo.phone} name="phone" margin="normal" variant="outlined"
                                value={this.state.phone} onChange={this.handleChange} />
                        </FormControl>
                        <br></br>
                        <Button margin="normal" variant="outlined" type='submit'>
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

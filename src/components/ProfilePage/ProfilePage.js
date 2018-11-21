import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';

class ProfilePage extends Component {

    state = {
            street: '',
            city: '',
            state: '',
            zip: '',
            address_type: '',
            style: '',
    }

    // handle changes in the form inputs
    handleChange = event => {
        console.log('handle change', event.target.value);
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        })
    }

  


  render() {
    return (
        <div id="mainDiv">
            <br></br>
            <h2 id="profile-h3">Profile</h2>
                <form>
                  <FormControl className="profile-account" variant="filled">
                    <TextField type="text" label="first_name" name="first_name" margin="normal" variant="outlined"
                      value={this.state.customer.first_name} />
                      <Button>edit</Button>
                  </FormControl>
                  <FormControl className="profile-account" variant="filled">
                    <TextField type="text" label="last_name" name="last_name" margin="normal" variant="outlined"
                      value={this.state.customer.last_name} />
                      <Button>edit</Button>
                  </FormControl>
                  <FormControl className="profile-account" variant="filled">
                    <TextField type="text" label="email" name="email" margin="normal" variant="outlined"
                      value={this.state.customer.email} />
                      <Button>edit</Button>
                  </FormControl>
                  <FormControl className="profile-account" variant="filled">
                    <TextField type="text" label="password" name="password" margin="normal" variant="outlined"
                      value={this.state.customer.password} />
                      <Button>edit</Button>
                  </FormControl>
                </form>
                <form id="main-address-form" onSubmit={this.handleNextClick}>
                    <h3>Update your address</h3>
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
                        <TextField required type='text' label="zip" name="zip" margin="normal" variant="outlined"
                            value={this.state.zip} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                        <TextField required type='text' label="address type" name="address_type" margin="normal" variant="outlined"
                            value={this.state.address_type} onChange={this.handleChange} />
                        </FormControl>
                </form>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    customer: reduxState.customer,
});

export default connect(mapStateToProps)(ProfilePage);

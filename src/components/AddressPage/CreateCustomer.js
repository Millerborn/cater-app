import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

class CustomerPage extends Component {

    state = {
        first_name: '',   
        last_name: '',
        favorites: '',
        email: '',
        phone: '',
        person_id: this.props.user.id,
    }

    // handle changes in the form inputs
    handleChange = event => {
        console.log('handle change', event.target.value);
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('creating new user customer information:', this.state);
        this.props.dispatch( { type: 'ADD_CUSTOMER', payload: this.state } );
    }

  render() {
    return (
        <div id="mainDiv">
            <br></br>
            <h2 id="address-h3">Hey! Enter some information</h2>
                <form id="main-address-form" onSubmit={this.handleSubmit}>
                    <FormControl className="address-form" variant="filled">
                        <TextField required type='text' label="first_name" name="first_name" margin="normal" variant="outlined"
                            value={this.state.first_name} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                        <TextField required type='text' label="last_name" name="last_name" margin="normal" variant="outlined"
                            value={this.state.last_name} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                        <TextField required type='text' label="favorites" name="favorites" margin="normal" variant="outlined"
                            value={this.state.favorites} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                        <TextField required type='text' label="email" name="email" margin="normal" variant="outlined"
                            value={this.state.email} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                        <TextField required type='text' label="phone" name="phone" margin="normal" variant="outlined"
                            value={this.state.phone} onChange={this.handleChange} />
                        </FormControl>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <center>
                            <Button margin="normal" variant="outlined" type='submit'>
                                Save Information
                            </Button>
                        </center>
                </form>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    user: reduxState.user,
    reduxState,
});

export default connect(mapStateToProps)(CustomerPage);

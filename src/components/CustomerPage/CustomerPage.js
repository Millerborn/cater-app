import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';

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
        console.log('submit:', this.state);
        this.props.dispatch( { type: 'ADD_ADDRESS', payload: this.state } );
        this.setState({
            ...this.state,
            first_name: '',   
            last_name: '',
            favorites: '',
            email: '',
            phone: '',
            person_id: person_id,
        })
        this.handleClick();
    }

     // handle on click, go to next page and dispatch information to state in index
     handleClick = () => {
        console.log('next click history', this.props.history);
        this.props.history.push('/home');
    }


  render() {
    return (
        <div id="mainDiv">
            <br></br>
            <h2 id="address-h3">Hey! Enter some information</h2>
                <form id="main-address-form" onSubmit={this.handleSubmit}>
                    <h4>We want to get to know you?</h4>
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
                            value={this.state.email} onChange={this.handleChange} />
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

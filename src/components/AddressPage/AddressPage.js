import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';

class AddressPage extends Component {

    state = {
        id: '',   
        street: '',
        city: '',
        state: '',
        zip: '',
        address_type: '',
        style: '',
        person_id: null,
    }

    // handle changes in the form inputs
    handleChange = event => {
        console.log('handle change', event.target.value);
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
            person_id: this.props.reduxState.user.id,
            id: this.props.reduxState.address.id,  
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit:', this.state);
        this.props.dispatch( { type: 'ADD_ADDRESS', payload: this.state } );
        this.setState({
            ...this.state,
            id: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            address_type: '',
            style: '',
            person_id: null,
        })
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
        {JSON.stringify(this.props.reduxState.address)}
            <br></br>
            <h2 id="address-h3">Don't stress, we have the Chefs!</h2>
                <form id="main-address-form" onSubmit={this.handleSubmit}>
                    <h4>What's your address?</h4>
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
                        <br></br>
                        <FormControl>
                        <InputLabel htmlFor="style" className="input-label">Style</InputLabel>
                        <Select
                            placeholder="style"
                            value={this.state.style}
                            onChange={this.handleChange}
                            input={<FilledInput name="style" />}
                        >
                            <MenuItem value=''>
                            <em>None</em>
                            </MenuItem>
                                <MenuItem value={1}>Mexican</MenuItem> 
                                <MenuItem value={2}>Indian</MenuItem> 
                                <MenuItem value={3}>Chinese</MenuItem> 
                            </Select>
                        </FormControl>
                        <br></br>
                        <br></br>
                        <br></br>
                        <center>
                            <Button margin="normal" variant="outlined" type='submit'>
                                Find a Chef
                            </Button>
                        </center>
                </form>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AddressPage);

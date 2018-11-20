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
        newAddress: {
            street: '',
            city: '',
            state: '',
            zip: '',
            address_type: '',
            style: '',
        }
    }

    // handle changes in the form inputs
    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit:', this.state);
        this.props.dispatch( { type: 'ADD_ADDRESS', payload: this.state } );
        this.setState({
            ...this.state.newAddress,
            street: '',
            city: '',
            state: '',
            zip: '',
            address_type: '',
            style: '',
        })
        this.handleNextClick();
    }

     // handle on click, go to next page and dispatch information to state in index
     handleNextClick = (event) => {
        event.preventDefault();
        console.log('history', this.props);
        this.props.history.push('/display-chef')
    }


  render() {
    return (
        <div id="mainDiv">
            <br></br>
            <h3 id="address-h3">Don't stress, we have the Chefs!</h3>
                <form id="formInput" onSubmit={this.handleNextClick}>
                <FormControl variant="filled" className="addressForm">
                    <TextField type='text' label="street" name="street" margin="normal" variant="outlined"
                        value={this.state.newAddress.address} onChange={this.handleChange} />
                    </FormControl>
                    <FormControl variant="filled" className="addressForm">
                    <TextField type='text' label="city" name="city" margin="normal" variant="outlined"
                        value={this.state.newAddress.address} onChange={this.handleChange} />
                    </FormControl>
                    <FormControl variant="filled" className="addressForm">
                    <TextField type='text' label="state" name="state" margin="normal" variant="outlined"
                        value={this.state.newAddress.address} onChange={this.handleChange} />
                    </FormControl>
                    <FormControl variant="filled" className="addressForm">
                    <TextField type='text' label="address_type" name="address_type" margin="normal" variant="outlined"
                        value={this.state.newAddress.address} onChange={this.handleChange} />
                    </FormControl>
                    <br></br>
                    <FormControl>
                    <InputLabel htmlFor="style" className="input-label">Style</InputLabel>
                    <Select
                        placeholder="style"
                        value={this.state.newAddress.style}
                        onChange={this.handleChange}
                        input={<FilledInput name="style" id="filled-style-simple" />}
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

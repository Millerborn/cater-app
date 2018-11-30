import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';

class OrderDate extends Component {

    state = {
        date: '',
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
        console.log('saving order date:', this.state);
        this.props.dispatch( { type: 'ADD_DATE', payload: this.state } );
    }

  render() {
    return (
        <div id="mainDiv">
            <br></br>
                <form id="main-address-form" onSubmit={this.handleSubmit}>
                    <FormControl className="address-form" variant="filled">
                        <TextField required type='date' name="date" margin="normal" variant="outlined"
                            value={this.state.date} onChange={this.handleChange} />
                    </FormControl>
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
    user: reduxState.user,
    reduxState,
});

export default connect(mapStateToProps)(OrderDate);

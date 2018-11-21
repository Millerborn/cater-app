import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';

class CheckoutPage extends Component {

    // state = {
    //     newProject: {
    //         address: '',
    //         style: ''
    //     }
    // }

    // handle changes in the form inputs
    handleChange = event => {
        console.log('handleChange', event.target.value)
        this.setState({
            newProject: {
                ...this.state.newProject,
                [event.target.name]: event.target.value,
            }
        });
    }

    // submit project information from form
    onSubmit = event => {
        console.log('onSubmit event: ', this.state);
        event.preventDefault();
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
            <h3>Checkout</h3>
                <div id="formInput" onSubmit={this.handleNextClick}>
                    <TextField type='text' label="address" name="address" placeholder="address" margin="normal" variant="outlined"
                    />
                    <br></br>
                    <Button margin="normal" variant="outlined" type='submit'>
                        Find a Chef
                    </Button>
                </div>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    checkout: reduxState.chefs,
});

export default connect(mapStateToProps)(CheckoutPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';

class AddressPage extends Component {

    state = {
        newProject: {
            address: '',
            style: ''
        }
    }

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
        // this.props.dispatch({ type: 'ADD_P', payload: this.state.newProject })
        // this.setState({
        //     newProject: {
        //         id: this.state.newProject.id + 1,
        //         name: '',
        //         description: '',
        //         thumbnail: '',
        //         website: '',
        //         github: '',
        //         date_completed: '',
        //         tag_id: ''
        //     }
        // });
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
            <h3>Find a Chef Near You</h3>
            <pre>TESTING:  {JSON.stringify(this.props.history)}</pre>

                <form id="formInput" onSubmit={this.handleNextClick}>
                    <FormControl variant="filled" className="addressForm">
                    <TextField type='text' label="address" name="address" placeholder="address" margin="normal" variant="outlined"
                        value={this.state.newProject.address} onChange={this.handleChange} />
                    <br></br>
                    <Select
                        placeholder="style"
                        value={this.state.newProject.style}
                        onChange={this.handleChange}
                        input={<FilledInput name="style" id="filled-age-simple" />}
                    >
                           <MenuItem value=''>
                           <em>None</em>
                           </MenuItem>
                            <MenuItem value={1}>Mexican</MenuItem> 
                            <MenuItem value={2}>Indian</MenuItem> 
                            <MenuItem value={3}>Chinese</MenuItem> 
                        </Select>
                    </FormControl>
                    <Button margin="normal" variant="outlined" type='submit'>
                        Find a Chef
                    </Button>
                </form>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(AddressPage);

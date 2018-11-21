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


// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import FilledInput from '@material-ui/core/FilledInput';
// import InputLabel from '@material-ui/core/InputLabel';

// class AddressPage extends Component {

//     state = {
//             street: '',
//             city: '',
//             state: '',
//             zip: '',
//             address_type: '',
//             style: '',
//     }

//     // handle changes in the form inputs
//     handleChange = event => {
//         console.log('handle change', event.target.value);
//         this.setState({
//             ...this.state,
//             [event.target.name]: event.target.value,
//         })
//     }

//     handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('submit:', this.state);
//         this.props.dispatch( { type: 'ADD_ADDRESS', payload: this.state } );
//         this.setState({
//             ...this.state,
//             street: '',
//             city: '',
//             state: '',
//             zip: '',
//             address_type: '',
//             style: '',
//         })
//     }

//      // handle on click, go to next page and dispatch information to state in index
//      handleClick = (event) => {
//         event.preventDefault();
//         console.log('next click history', this.props.history);
//         this.props.history.push('/display-chef');
//     }


//   render() {
//     return (
//         <div id="mainDiv">
//             <br></br>
//             <h2 id="address-h3">Don't stress, we have the Chefs!</h2>
//                 <form id="main-address-form" onSubmit={this.handleClick}>
//                     <h4>What's your address?</h4>
//                     <FormControl className="address-form" variant="filled">
//                         <TextField required type='text' label="street" name="street" margin="normal" variant="outlined"
//                             value={this.state.street} onChange={this.handleChange} />
//                         </FormControl>
//                         <FormControl className="address-form" variant="filled">
//                         <TextField required type='text' label="city" name="city" margin="normal" variant="outlined"
//                             value={this.state.city} onChange={this.handleChange} />
//                         </FormControl>
//                         <FormControl className="address-form" variant="filled">
//                         <TextField required type='text' label="state" name="state" margin="normal" variant="outlined"
//                             value={this.state.state} onChange={this.handleChange} />
//                         </FormControl>
//                         <FormControl className="address-form" variant="filled">
//                         <TextField required type='text' label="zip" name="zip" margin="normal" variant="outlined"
//                             value={this.state.zip} onChange={this.handleChange} />
//                         </FormControl>
//                         <FormControl className="address-form" variant="filled">
//                         <TextField required type='text' label="address type" name="address_type" margin="normal" variant="outlined"
//                             value={this.state.address_type} onChange={this.handleChange} />
//                         </FormControl>
//                         <br></br>
//                         <FormControl>
//                         <InputLabel htmlFor="style" className="input-label">Style</InputLabel>
//                         <Select
//                             placeholder="style"
//                             value={this.state.style}
//                             onChange={this.handleChange}
//                             input={<FilledInput name="style" />}
//                         >
//                             <MenuItem value=''>
//                             <em>None</em>
//                             </MenuItem>
//                                 <MenuItem value={1}>Mexican</MenuItem> 
//                                 <MenuItem value={2}>Indian</MenuItem> 
//                                 <MenuItem value={3}>Chinese</MenuItem> 
//                             </Select>
//                         </FormControl>
//                         <br></br>
//                         <br></br>
//                         <br></br>
//                         <center>
//                             <Button margin="normal" variant="outlined" type='submit'>
//                                 Find a Chef
//                             </Button>
//                         </center>
//                 </form>
//         </div>
//     );
//   }
// }

// const mapStateToProps = reduxState => ({
//     reduxState,
// });

// export default connect(mapStateToProps)(AddressPage);

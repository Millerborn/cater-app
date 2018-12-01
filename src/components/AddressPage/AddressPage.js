import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import CreateCustomer from './CreateCustomer';
import CreateCustomerAddress from './CreateCustomerAddress';
import OrderDate from './OrderDate';
import List from '@material-ui/core/List';
import '../../index.css';


class AddressPage extends Component {

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
        console.log('submit:', event);
        this.props.dispatch( { type: 'ADD_DATE', payload: this.state } );
        this.handleClick();
    }

     // handle on click, go to next page and dispatch information to state in index
     handleClick = () => {
        console.log('next click history', this.props.history);
        this.props.history.push('/display-chef');
    }

    componentDidMount() {
        const id = this.props.reduxState.user.id;
        console.log('user id', id);
        this.props.dispatch( { type: 'FIND_ADDRESS', payload: id } );
    }

  render() {

    const customerAddress = this.props.reduxState.address[0];
    let customerList = '';
    if (customerAddress !== undefined){
        customerList = 
        <form id="main-address-form" onSubmit={this.handleClick}>
                    <h4>What's your address?</h4>
                    <FormControl className="address-form" variant="filled">
                        <TextField required type='text' label="street" name="street" margin="normal" variant="outlined"
                            value={customerAddress.street} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                        <TextField required type='text' label="city" name="city" margin="normal" variant="outlined"
                            value={customerAddress.city} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                        <TextField required type='text' label="state" name="state" margin="normal" variant="outlined"
                            value={customerAddress.state} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                        <TextField required type='text' label="zip" name="zip" margin="normal" variant="outlined"
                            value={customerAddress.zip} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                        <TextField required type='text' label="address type" name="address_type" margin="normal" variant="outlined"
                            value={customerAddress.address_type} onChange={this.handleChange} />
                        </FormControl>
                        <List>
                        <InputLabel htmlFor="style" className="input-label">Style</InputLabel>
                        <Select
                            id="style-list"
                            placeholder="style"
                            value={this.state.style}
                            onChange={this.handleChange}
                            input={<FilledInput name="style" />}
                        >
                            <MenuItem value=''>
                            <em>None</em>
                            </MenuItem>
                                <MenuItem value={1}>French</MenuItem> 
                                <MenuItem value={2}>Italian</MenuItem> 
                                <MenuItem value={3}>Mexican</MenuItem> 
                                <MenuItem value={4}>Moroccan</MenuItem> 
                                <MenuItem value={5}>Japanese</MenuItem> 
                                <MenuItem value={6}>Indian</MenuItem> 
                                <MenuItem value={7}>American</MenuItem> 
                                <MenuItem value={8}>Japanese</MenuItem> 
                                <MenuItem value={9}>Chinese</MenuItem> 
                            </Select>
                        </List>
                        <FormControl className="address-form" variant="filled">
                        <TextField required type='date' name="date" margin="normal" variant="outlined"
                            value={this.state.date} onChange={this.handleChange} />
                        </FormControl>
                        {/* <OrderDate /> */}
                        <center>
                            <Button margin="normal" variant="outlined" type='submit'>
                                Find a Chef
                            </Button>
                        </center>
                </form>
        } else {
        customerList = 
            <div>
                <CreateCustomer /> 
                <CreateCustomerAddress history={this.props.history} />  
            </div>
    }

    return (
        <div id="main-address-div">
            <h3>Don't stress, we have the Chefs!</h3>
            <center>
                {customerList}
            </center>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    address: reduxState.address,
    reduxState,
});

export default connect(mapStateToProps)(AddressPage);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Popover from '@material-ui/core/Popover';
import '../../index.css';

class ProfilePage extends Component {

    state = {
        address: {
            street: '',
            city: '',
            state: '',
            zip: '',
            address_type: '',
        },
        customer: {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
        },
        anchorEl: null,
    }

    handleClick = event => {
        this.setState({
          anchorEl: event.currentTarget,
        });
      };
    
      handleClose = () => {
        this.setState({
          anchorEl: null,
        });
      };

    // handle changes in the form inputs
    handleAddressChange = event => {
        console.log('handle change', event.target.value);
        this.setState({
            ...this.state.address,
            [event.target.name]: event.target.value,
        })
    }

    // handle changes in the form inputs
    handleCustomerChange = event => {
        console.log('handle change', event.target.value);
        this.setState({
            ...this.state.customer,
            [event.target.name]: event.target.value,
        })
    }

    componentWillMount() {
        console.log('WillUpdate', this.props.user.id)
        const user = this.props.user.id;
        this.props.dispatch( { type: 'FETCH_CHECKOUT', payload: user  } );
        this.props.dispatch({ type: 'GET_ORDERS' });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let addressInformation = this.state.address;
        console.log('updating address information', addressInformation);
    }

  render() {
    const anchorEl = this.state.anchorEl;
    const open = Boolean(anchorEl);
    const profileInfo = this.props.order[0];
    let profilePage = '';
    if (profileInfo !== undefined){
        profilePage = 
        <center>
            <div>
                <br></br>
                <p>{profileInfo.first_name} {profileInfo.last_name}</p>
                <p>Address</p>
                <p>
                    {profileInfo.street} {profileInfo.city} {profileInfo.state} {profileInfo.zip}
                </p> 
                    <p>{profileInfo.address_type}</p>
                <p>{profileInfo.email}</p>
                <p>{profileInfo.phone}</p>
                <br></br>
                <Button 
                    aria-owns={open ? 'simple-popper' : undefined}
                    aria-haspopup="true"
                    variant="contained"
                    onClick={this.handleClick}
                    color="primary"
                >
                    Edit Information
                </Button>
                <Popover
                    id="simple-popper"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <form className="user-update-form" onSubmit={this.handleAddressChange}>
                        <h4>Update your address</h4>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.street} name="street" margin="normal" variant="outlined"
                                value={this.state.address.street} onChange={this.handleAddressChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.city} name="city" margin="normal" variant="outlined"
                                value={this.state.address.city} onChange={this.handleAddressChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.state} name="state" margin="normal" variant="outlined"
                                value={this.state.address.state} onChange={this.handleAddressChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='number' label={profileInfo.zip} name="zip" margin="normal" variant="outlined"
                                value={this.state.address.zip} onChange={this.handleAddressChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.address_type} name="address_type" margin="normal" variant="outlined"
                                value={this.state.address_type} onChange={this.handleAddressChange} />
                        </FormControl>
                        <Button 
                            margin="normal" 
                            variant="outlined" 
                            type='submit'
                        >
                            Submit
                        </Button>
                    </form>
                    <br></br>
                    <form className="user-update-form" onSubmit={this.handleCustomerSubmit}>
                        <h4>Update your Profile Information</h4>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.first_name} name="first_name" margin="normal" variant="outlined"
                                value={this.state.customer.first_name} onChange={this.handleCustomerChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.last_name} name="last_name" margin="normal" variant="outlined"
                                value={this.state.customer.last_name} onChange={this.handleCustomerChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.email} name="email" margin="normal" variant="outlined"
                                value={this.state.customer.email} onChange={this.handleCustomerChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='number' label={profileInfo.phone} name="phone" margin="normal" variant="outlined"
                                value={this.state.customer.phone} onChange={this.handleCustomerChange} />
                        </FormControl>
                        <Button margin="normal" variant="outlined" type='submit'>
                            Submit
                        </Button>
                    </form>
                </Popover>
            </div>
        </center>
    ;
    }
    return (
        <div id="mainDiv">
            <br></br>
            <center>
                <h2 id="profile-h3">Profile</h2>
            </center>
            <center>
                {profilePage}
            </center>
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    order: reduxState.orders,
    user: reduxState.user,
});

export default connect(mapStateToProps)(ProfilePage);

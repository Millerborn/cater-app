import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Popover from '@material-ui/core/Popover';
import '../../index.css';

class ProfilePage extends Component {

    state = {
        id: this.props.user.id,
        street: '',
        city: '',
        state: '',
        zip: '',
        address_type: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
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
    handleChange = event => {
        console.log('handle change', event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    componentDidMount() {
        const user = this.props.user.id;
        this.props.dispatch( { type: 'FIND_ADDRESS', payload: user  } );
    }

    handleAddressSubmit = (event) => {
        event.preventDefault();
        console.log('updating address information', this.state);
        this.props.dispatch( { type: 'EDIT_ADDRESS', payload: this.state } );
    }

    handleCustomerSubmit = (event) => {
        event.preventDefault();
        console.log('updating customer information', this.state);
        this.props.dispatch( { type: 'EDIT_CUSTOMER', payload: this.state } );
    }

  render() {
    const anchorEl = this.state.anchorEl;
    const open = Boolean(anchorEl);
    const profileInfo = this.props.address[0];
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
                    <form className="user-update-form" onSubmit={this.handleAddressSubmit}>
                        <h4>Update your address</h4>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.street} name="street" margin="normal" variant="outlined"
                                value={this.state.street} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.city} name="city" margin="normal" variant="outlined"
                                value={this.state.city} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.state} name="state" margin="normal" variant="outlined"
                                value={this.state.state} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='number' label={profileInfo.zip} name="zip" margin="normal" variant="outlined"
                                value={this.state.zip} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.address_type} name="address_type" margin="normal" variant="outlined"
                                value={this.state.address_type} onChange={this.handleChange} />
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
                                value={this.state.first_name} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.last_name} name="last_name" margin="normal" variant="outlined"
                                value={this.state.last_name} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='text' label={profileInfo.email} name="email" margin="normal" variant="outlined"
                                value={this.state.email} onChange={this.handleChange} />
                        </FormControl>
                        <FormControl className="address-form" variant="filled">
                            <TextField required type='number' label={profileInfo.phone} name="phone" margin="normal" variant="outlined"
                                value={this.state.phone} onChange={this.handleChange} />
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
    address: reduxState.address,
});

export default connect(mapStateToProps)(ProfilePage);

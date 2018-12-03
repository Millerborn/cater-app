import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import '../../index.css';
import UpdateCustomer from './UpdateCustomer';
import UpdateAddress from './UpdateAddress';

class ProfilePage extends Component {

    state = {
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

    componentDidMount() {
        const user = this.props.user.id;
        this.props.dispatch( { type: 'FIND_ADDRESS', payload: user  } );
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
                <h3>{profileInfo.first_name} {profileInfo.last_name}</h3>
                <p>
                    {profileInfo.street} {profileInfo.city} {profileInfo.state} {profileInfo.zip}
                </p> 
                    <p>Address type: {profileInfo.address_type}</p>
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
                <center>
                    <UpdateAddress handleClose={this.handleClose} address={this.props.address} />
                    <UpdateCustomer handleClose={this.handleClose} address={this.props.address} />
                </center>
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

import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class CheckoutPage extends Component {

     // handle on click, go to next page and dispatch information to state in index
     handleNextClick = (event) => {
        event.preventDefault();
        console.log('history', this.props);
        this.props.history.push('/display-chef')
    }

    componentDidMount() {
        this.props.dispatch( { type: 'FETCH_ADDRESS' } );
    }

  render() {
      const address = this.props.address[0];
    return (
        <div id="mainDiv">
            {JSON.stringify(address)}
            {this.props.address}
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
    address: reduxState.address,
});

export default connect(mapStateToProps)(CheckoutPage);

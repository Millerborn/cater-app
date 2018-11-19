import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FilledInput from '@material-ui/core/FilledInput';

class DisplayChef extends Component {

     // handle on click, go to next page and dispatch information to state in index
     handleNextClick = (event) => {
        event.preventDefault();
        this.props.history.push('/display-chef')
        this.postInformation();
    }

  render() {
    return (
        <div id="mainDiv">
            <br></br>
            <h3>Find a Chef Near You</h3>
            <h4>Chefs go here</h4>
            {JSON.stringify}
        </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(DisplayChef);

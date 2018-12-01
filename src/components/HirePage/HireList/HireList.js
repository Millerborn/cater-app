import React, { Component } from "react";
import HireListItem from '../HireListItem/HireListItem';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


class HireList extends Component {
  render() {
        return (
          <HireListItem history={this.props.history} />
        );
      }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(HireList);
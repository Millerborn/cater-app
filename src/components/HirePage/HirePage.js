import React, { Component } from "react";
import { connect } from 'react-redux';
import HireList from "./HireList/HireList";
import { withRouter } from 'react-router-dom';
import compose from 'recompose/compose';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});



class HirePage extends Component {

  // Filter by Category
  handleCategory(event) {
    this.setState({ ...this.state, category: event.target.value });
    console.log(this.state.category);
  }

  render() {
    const chef = this.props.menu[0];
      let chefName = '';
      if (chef !== undefined){
      chefName = 
      <div>
      <h2>Chef {chef.first_name} {chef.last_name}'s Menu</h2>
      </div>
      ;
      }

    return (
      <div className="container">
        {chefName}
          <HireList history={this.props.history}/>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    address: reduxState.address,
    menu: reduxState.menu,
    orders: reduxState.orders,
    chef: reduxState.chefs,
    user: reduxState.user,
});

// export default connect(mapStateToProps)(withStyles(HirePage));

export default compose(
  connect(mapStateToProps),
  withStyles(styles)
)(HirePage);

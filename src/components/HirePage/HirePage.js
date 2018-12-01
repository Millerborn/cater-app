import React, { Component } from "react";
import { connect } from 'react-redux';
import HireListItem from "./HireListItem/HireListItem";
import compose from 'recompose/compose';
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
          <HireListItem chef={chefName} />
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

export default 
  compose( 
  connect(mapStateToProps), 
  withStyles(styles))(HirePage);

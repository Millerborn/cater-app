import React, { Component } from "react";
import { connect } from 'react-redux';
import HireList from "./HireList/HireList";
import { withRouter } from 'react-router-dom';
import '../../index.css';

class HirePage extends Component {

  render() {
    const chef = this.props.menu[0];
      let chefName = '';
      if (chef !== undefined){
      chefName = 
      <div>
      <h2>Chef {chef.first_name} {chef.last_name}'s Menu</h2>
      <br></br>
            <HireList
              history={this.props.history}
              />
      </div>
      ;
      }
    return (
      <center>
      <div className="container">
        {chefName}
      </div>
      </center>
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
export default connect(mapStateToProps)(withRouter(HirePage));

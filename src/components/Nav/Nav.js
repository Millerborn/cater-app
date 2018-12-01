import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import CartHeader from '../ShoppingCart/CartHeader';

const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h2 className="nav-title">Cater</h2>
    </Link>
    <div className="nav-right">
      <Link hidden className="nav-link" id="cater-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <LogOutButton className="nav-link"/>
          <div className="nav-link">
            <CartHeader />
          </div>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </>
      )}
      {/* Always show this link since the about page is not protected */}
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
  history: state.history,
  address: state.address,
  menu: state.menu,
  orders: state.orders,
  chef: state.chefs,
  quantity: state.quantity,
  total: state.total,
});

export default connect(mapStateToProps)(Nav);

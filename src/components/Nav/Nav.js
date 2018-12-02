import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import CartHeader from '../ShoppingCart/CartHeader';
import { withRouter } from 'react-router-dom';


const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h2 className="nav-title">Cater</h2>
    </Link>
    <div className="nav-right">
      <Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <LogOutButton className="nav-link"/>
          <CartHeader />
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

export default connect(mapStateToProps)(withRouter(Nav));





// import React , { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
// import CartHeader from '../ShoppingCart/CartHeader';
// import { withRouter } from 'react-router-dom';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import { withStyles } from '@material-ui/core/styles';
// import compose from 'recompose/compose';
// import Typography from '@material-ui/core/Typography';
// import PropTypes from 'prop-types';

// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';




// const styles = {
//   root: {
//     flexGrow: 1,
//     display: 'flex',
//     color: '#F44336',
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

// class Nav extends Component {

//   render() {
//     const { classes } = this.props;
//     return(
//       <div id="nav-color" className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" color="inherit" className={classes.grow}>
//             <Link to="/home">
//                 <h2 className="nav-title">Cater</h2>
//             </Link>
//           </Typography>
//           <div>
//             <Link className="nav-link" to="/home">
//               {/* Show this link if they are logged in or not,
//               but call this link 'Home' if they are logged in,
//               and call this link 'Login / Register' if they are not */}
//               {this.props.user.id ? 'Home' : 'Login / Register'}
//             </Link>
//             {/* Show the link to the info page and the logout button if the user is logged in */}
//               {this.props.user.id && (
//                 <>
//                   <Link className="nav-link" to="/profile">
//                     <Typography variant="h6" color="inherit" className={classes.grow}>
//                       Profile
//                     </Typography>
//                   </Link>
//                   <Link className="nav-link" to="/about">
//                   <Typography variant="h6" color="inherit" className={classes.grow}>
//                     About
//                   </Typography>
//                   </Link>
//                   <LogOutButton color="inherit" className="nav-link"/>
//                   <CartHeader className={classes.menuButton} />
//                 </>
//                 )}
//                 {/* Always show this link since the about page is not protected */}
//           </div>
//         </Toolbar>
//       </AppBar>
//     </div>
//       // <div className={classes.root}>
//       //     <AppBar position="static">
//       //       <Toolbar> 
//       //         <Link to="/home">
//       //           <h2 className="nav-title">Cater</h2>
//       //         </Link>
//       //         <div className="nav-right">
//       //           <Link className="nav-link" to="/home">
//       //             {/* Show this link if they are logged in or not,
//       //             but call this link 'Home' if they are logged in,
//       //             and call this link 'Login / Register' if they are not */}
//       //             {this.props.user.id ? 'Home' : 'Login / Register'}
//       //           </Link>
//                 // {/* Show the link to the info page and the logout button if the user is logged in */}
//                 // {this.props.user.id && (
//                 //   <>
//                 //     <Link className="nav-link" to="/profile">
//                 //       <Typography variant="h6" color="inherit" className={classes.grow}>
//                 //         Profile
//                 //       </Typography>
//                 //     </Link>
//                 //     <Link className="nav-link" to="/about">
//                 //     <Typography variant="h6" color="inherit" className={classes.grow}>
//                 //       About
//                 //     </Typography>
//                 //     </Link>
//                 //     <LogOutButton color="inherit" className="nav-link"/>
//                 //     <CartHeader className={classes.menuButton} />
//                 //   </>
//                 // )}
//                 // {/* Always show this link since the about page is not protected */}
//       //         </div>
//       //       </Toolbar>
//       //     </AppBar>
//       //   </div>
//     )
//   }
    
// }

// // render()
// // const Nav = (props) => (
// //   <div className="nav">
// //     <AppBar position="static">
// //       <Toolbar> 
// //         <Link to="/home">
// //           <h2 className="nav-title">Cater</h2>
// //         </Link>
// //         <div className="nav-right">
// //           <Link className="nav-link" to="/home">
// //             {/* Show this link if they are logged in or not,
// //             but call this link 'Home' if they are logged in,
// //             and call this link 'Login / Register' if they are not */}
// //             {props.user.id ? 'Home' : 'Login / Register'}
// //           </Link>
// //           {/* Show the link to the info page and the logout button if the user is logged in */}
// //           {props.user.id && (
// //             <>
// //               <Link className="nav-link" to="/profile">
// //                 <Typography variant="h6" color="inherit" className={classes.grow}>
// //                   Profile
// //                 </Typography>
// //               </Link>
// //               <Link className="nav-link" to="/about">
// //               <Typography variant="h6" color="inherit" className={classes.grow}>
// //                 About
// //               </Typography>
// //               </Link>
// //               <LogOutButton color="inherit" className="nav-link"/>
// //               <CartHeader />
// //             </>
// //           )}
// //           {/* Always show this link since the about page is not protected */}
// //         </div>
// //       </Toolbar>
// //     </AppBar>
// //   </div>
// // );

// // Instead of taking everything from state, we just want the user
// // object to determine if they are logged in
// // if they are logged in, we show them a few more links 
// // if you wanted you could write this code like this:
// // const mapStateToProps = ({ user }) => ({ user });
// const mapStateToProps = state => ({
//   user: state.user,
//   history: state.history,
//   address: state.address,
//   menu: state.menu,
//   orders: state.orders,
//   chef: state.chefs,
//   quantity: state.quantity,
//   total: state.total,
// });

// Nav.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default compose(
//   connect(mapStateToProps),
//   withStyles(styles)
// )(Nav);
import React, { Component } from "react";
import HireListItem from '../HireListItem/HireListItem';
import { connect } from 'react-redux';

class HireList extends Component {
  render() {
        return (
          <HireListItem
            total={this.props.total}
            addToCart={this.props.addToCart}
            productQuantity={this.props.productQuantity}
            updateQuantity={this.props.updateQuantity}
            openModal={this.props.openModal}
            chef={this.props.chef}
            address={this.props.address} 
            history={this.props.history}
            menu={this.props.menu}
            orders={this.props.orders}
            cart={this.props.cart}
          />
        );
      }
}

const mapStateToProps = reduxState => ({
    user: reduxState.user,
    menu: reduxState.menu,
});

export default connect(mapStateToProps)(HireList);


// import React, { Component } from "react";
// import HireListItem from '../HireListItem/HireListItem';
// import { connect } from 'react-redux';
// import 'bootstrap/dist/css/bootstrap.min.css';


// class HireList extends Component {
//   render() {
//         return (
//           <HireListItem history={this.props.history} />
//         );
//       }
// }

// const mapStateToProps = reduxState => ({
//     reduxState,
// });

// export default connect(mapStateToProps)(HireList);
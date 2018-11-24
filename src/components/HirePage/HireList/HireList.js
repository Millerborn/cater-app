import React, { Component } from "react";
import HireListItem from '../HireListItem/HireListItem';
import LoadingProducts from "../../ShoppingCart/loaders/Products";
import NoResults from "../../ShoppingCart/NoResults";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { connect } from 'react-redux';


class HireList extends Component {
  constructor() {
    super();
  }
  render() {
    let productsData;
    let term = this.props.searchTerm;
    let x;

    function searchingFor(term) {
      return function(x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
      };
    }
    productsData = this.props.productsList
      .filter(searchingFor(term))
      .map(product => {
        return (
          <HireListItem
            key={product.id}
            price={product.price}
            name={product.name}
            image={product.image}
            id={product.id}
            addToCart={this.props.addToCart}
            productQuantity={this.props.productQuantity}
            updateQuantity={this.props.updateQuantity}
            openModal={this.props.openModal}
          />
        );
      });

    // Empty and Loading States
    let view;
    if (productsData.length <= 0 && !term) {
      view = <LoadingProducts />;
    } else if (productsData.length <= 0 && term) {
      view = <NoResults />;
    } else {
      view = (
        <CSSTransitionGroup
          transitionName="fadeIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="div"
          className="products"
        >
          {productsData}
        </CSSTransitionGroup>
      );
    }
    return <div className="products-wrapper">{view}</div>;
  }
}

const mapStateToProps = reduxState => ({
    user: reduxState.user,
    menu: reduxState.menu,
});

export default connect(mapStateToProps)(HireList);


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import HireListItem from '../HireListItem/HireListItem';
// import Button from '@material-ui/core/Button';


// class HireList extends Component {
    
//     handleClick = (event) => {
//         console.log('Hire chef button', this.props);
//         this.props.history.push('/checkout');
//     }

//     // Displays a vertical list with project details
//     render() {
//         const key = this.props.menu;
//         return (
//             <div className="chef-list">
//                 {this.props.menu.map((menu, i) => {
//                     return (
//                         <HireListItem chef={this.props.chef} address={this.props.address} key={i} menu={menu} history={this.props.history} 
//                     />);
//                 })}
//                 <Button onClick={() => this.handleClick(key)} id="hire-chef-button">Hire Chef</Button>
//             </div>
//         );
//     }
// }

// const mapStateToProps = reduxState => ({
//     user: reduxState.user,
//     menu: reduxState.menu,
// });

// export default connect(mapStateToProps)(HireList);
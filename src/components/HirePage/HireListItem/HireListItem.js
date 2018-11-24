import React, { Component } from "react";
import Counter from "../../ShoppingCart/Counter";
import { connect } from 'react-redux';


class HireListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: {},
      quickViewProdcut: {},
      isAdded: false
    };
  }

  addToCart(image, name, price, id, quantity) {
    this.setState(
      {
        selectedProduct: {
          image: image,
          name: name,
          price: price,
          id: id,
          quantity: quantity
        }
      },
      function() {
        this.props.addToCart(this.state.selectedProduct);
      }
    );
    this.setState(
      {
        isAdded: true
      },
      function() {
        setTimeout(() => {
          this.setState({
            isAdded: false,
            selectedProduct: {}
          });
        }, 3500);
      }
    );
  }
  quickView(image, name, price, id) {
    this.setState(
      {
        quickViewProdcut: {
          image: image,
          name: name,
          price: price,
          id: id
        }
      },
      function() {
        this.props.openModal(this.state.quickViewProdcut);
      }
    );
  }
  render() {
    let image = this.props.image;
    let name = this.props.name;
    let price = this.props.price;
    let id = this.props.id;
    let quantity = this.props.productQuantity;
    return (
      <div className="product">
        <div className="product-image">
          <img
            src={image}
            alt={this.props.name}
            onClick={this.quickView.bind(
              this,
              image,
              name,
              price,
              id,
              quantity
            )}
          />
        </div>
        <h4 className="product-name">{this.props.name}</h4>
        <p className="product-price">{this.props.price}</p>
        <Counter
          productQuantity={quantity}
          updateQuantity={this.props.updateQuantity}
          resetQuantity={this.resetQuantity}
        />
        <div className="product-action">
          <button
            className={!this.state.isAdded ? "" : "added"}
            type="button"
            onClick={this.addToCart.bind(
              this,
              image,
              name,
              price,
              id,
              quantity
            )}
          >
            {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    address: reduxState.address,
    user: reduxState.user,
    orders: reduxState.orders,
});

export default connect(mapStateToProps)(HireListItem);





// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import '../../../index.css';

// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';


// class HireListItem extends Component {

//     state = {
//         order_date: '',
//         address_id: '',
//         menu_item_id: '',
//         chef_id: '',
//     }

//     handleChange = (itemId, address) => {
//         console.log('Running Order Item handle change', itemId, address);
//         this.setState({
//             order_date: '12-15-2019',
//             address_id: address,
//             menu_item_id: itemId,
//             chef_id: this.props.menu.chef_id, 
//         })
//     }

//     handleSubmit = () => {
//         console.log('Push to db', this.state);
//         this.props.dispatch( { type: 'ADD_ORDER', payload: this.state } );
//     }

//     // Displaying details of selected chef
//     render() {
//         const itemId = this.props.menu.id;
//         const address = this.props.user.id;
//         // const time = this.props.chefs.time_to_make;
//         const hourly = this.props.menu.hourly_rate;

//         return (
//             <div className="card-menu" >
//             {JSON.stringify(hourly)}
//                 <Card id="card">
//                     <CardMedia
//                         component="img"
//                         alt= "https://via.placeholder.com/160x80"
//                         height="200"
//                         src = "https://via.placeholder.com/160x80"
//                         title="Contemplative Reptile"
//                     />
//                     <CardContent>
//                         <h2>{this.props.menu.title}</h2>
//                         <h5>Ingredients</h5>
//                         <p>{this.props.menu.ingredients}</p>
//                         <p>{this.props.menu.time_to_make} minuets to make</p>
//                     </CardContent>
//                     <CardActions>
//                         <Button variant="contained" color="primary"
//                             onClick={() =>  this.handleChange(itemId, address)}>
//                             Add click
//                         </Button>
//                         <Button variant="contained" color="primary"
//                             onClick={() =>  this.handleSubmit(itemId, address)}>
//                             Add to Cart
//                         </Button>
//                     </CardActions>
//                 </Card>
//           </div>
//         );
//     }
// }

// const mapStateToProps = reduxState => ({
//     address: reduxState.address,
//     user: reduxState.user,
//     orders: reduxState.orders,
// });

// export default connect(mapStateToProps)(HireListItem);

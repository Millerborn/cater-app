import React, { Component } from "react";
import Counter from "../../ShoppingCart/Counter";
import { connect } from 'react-redux';
import '../../../index.css';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


class HireListItem extends Component {

    state = {
      selectedProduct: {},
      isAdded: false
  }

  addToCart(order_date, person_id, menu_id, chef_id, price, quantity, title) {
    const orderInfo = {
      order_date: order_date,
      person_id: person_id,
      menu_item_id: menu_id,
      chef_id: chef_id,
      price: price,
      quantity: quantity,
    }
    let order = { 
        order_date: order_date,
        person_id: person_id,
        menu_item_id: menu_id,
        chef_id: chef_id,
        price: price,
        quantity: quantity,
        title: title
     }
    this.props.dispatch( { type: 'ADD_TO_CART', payload: orderInfo } );
    console.log('order', orderInfo);
    // this.props.dispatch( { type: 'UPDATE_QUANTITY', payload: order.quantity } );
    // this.props.dispatch( { type: 'UPDATE_TOTAL', payload: order.price } );
    this.setState(
      {
        ...this.state,
        selectedProduct: {
          order_date: order_date,
          person_id: person_id,
          menu_item_id: menu_id,
          chef_id: chef_id,
          price: price,
          quantity: quantity,
          title: title
        }
      },
      function() {
        this.props.addToCart(order);
      }
    );
    this.setState(
      {
        ...this.state,
        isAdded: true
      },
      function() {
        setTimeout(() => {
          this.setState({
            ...this.state,
            isAdded: false,
            selectedProduct: {}
          });
        }, 2000);
      }
    );
      // this.props.dispatch({ type:  })
  }

  timeToMake = (time) => {
    if(time <= 1){
      return (<p>{time} Hour to make</p>);
    } else if (time > 1) {
      return (<p>{time} Hours to make</p>);
    }
  }

  render() {
    const person_id = this.props.user.id;
    let quantity = this.props.productQuantity;
    let menuCard;
    menuCard = this.props.menu.map( (menu, i) => {
      let menu_item_id = menu.id;
      let order_date = '11-26-2018';
      let chef_id = menu.chef_id;
      let price = menu.price;
      let title = menu.title;
        return (
          <Card className="card-menu" key={i}>
              <CardMedia
                        className="menu-item-image"
                        component="img"
                        alt= "https://via.placeholder.com/160x80"
                        height="200"
                        src={menu.image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <h2>{menu.title}</h2>
                        <h5>Ingredients</h5>
                        <p>{menu.ingredients}</p>
                        <div>{this.timeToMake(menu.time_to_make)} ${menu.price}</div>
                        <br></br>
                        <h5>How many people will be having this?</h5>
                    </CardContent>
                    <CardActions>
                    <Counter
                      productQuantity={quantity}
                      updateQuantity={this.props.updateQuantity}
                      resetQuantity={this.resetQuantity}
                    />
                      <Button
                        className={!this.state.isAdded ? "" : "added"}
                        type="button"
                        onClick={this.addToCart.bind(
                          this,
                          order_date,
                          person_id,
                          menu_item_id,
                          chef_id,
                          price,
                          quantity,
                          title
                        )}
                      >
                        {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
                      </Button>
                    </CardActions>
                </Card>
        )});
    return (
      <div className="product">
        {menuCard}
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
    address: reduxState.address,
    user: reduxState.user,
    orders: reduxState.orders,
    menu: reduxState.menu,
});

export default connect(mapStateToProps)(HireListItem);


// import React, { Component } from "react";
// import Counter from "../../ShoppingCart/Counter";
// import { connect } from 'react-redux';
// import '../../../index.css';

// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import { Carousel, CarouselCaption, CarouselInner, CarouselItem, View, Mask } from "mdbreact";



// class HireListItem extends Component {

//     state = {
//       selectedProduct: {},
//       quickViewProdcut: {},
//       isAdded: false
//   }

//   // addToCart(order_date, person_id, menu_id, chef_id, price, quantity, title) {
//   //   const orderInfo = {
//   //     order_date: order_date,
//   //     person_id: person_id,
//   //     menu_item_id: menu_id,
//   //     chef_id: chef_id,
//   //     price: price,
//   //     quantity: quantity,
//   //   }
//   addToCart = (order_date, person_id, menu_id, chef_id, price, quantity, title) => {
//     let order = { 
//         order_date: order_date,
//         person_id: person_id,
//         menu_item_id: menu_id,
//         chef_id: chef_id,
//         price: price,
//         quantity: quantity,
//         title: title
//      }
//     this.props.dispatch( { type: 'ADD_TO_CART', payload: order } );
//     console.log('order', order);
//     // this.props.dispatch( { type: 'UPDATE_QUANTITY', payload: order.quantity } );
//     // this.props.dispatch( { type: 'UPDATE_TOTAL', payload: order.price } );
//     this.setState(
//       {
//         ...this.state,
//         selectedProduct: {
//           order_date: order_date,
//           person_id: person_id,
//           menu_item_id: menu_id,
//           chef_id: chef_id,
//           price: price,
//           quantity: quantity,
//           title: title
//         }
//       },
//       function() {
//         this.props.addToCart(order);
//       }
//     );
//     this.setState(
//       {
//         ...this.state,
//         isAdded: true
//       },
//       function() {
//         setTimeout(() => {
//           this.setState({
//             ...this.state,
//             isAdded: false,
//             selectedProduct: {}
//           });
//         }, 2000);
//       }
//     );
//       // this.props.dispatch({ type:  })
//     // this.props.dispatch( { type: 'ADD_TO_CART', payload: order } );
//   }

//   render() {
//     const address = this.props.user.id;
//     let quantity = this.props.productQuantity;
//     let menuCard;
//     menuCard = this.props.menu.map( (menu, i) => {
//         return (
//           <div>
//           <Card className="card-menu" key={i}>
//               <CardMedia
//                         className="menu-item-image"
//                         component="img"
//                         alt= "https://via.placeholder.com/160x80"
//                         height="200"
//                         src={menu.image}
//                         title="Contemplative Reptile"
//                     />
//                     <CardContent>
//                         <h2>{menu.title}</h2>
//                         <h5>Ingredients</h5>
//                         <p>{menu.ingredients}</p>
//                         <div>{this.timeToMake(menu.time_to_make)} ${menu.price}</div>
//                     </CardContent>
//                     <CardActions>
//                     {/* <Counter
//                       productQuantity={quantity}
//                       updateQuantity={this.props.updateQuantity}
//                       resetQuantity={this.resetQuantity}
//                     /> */}
//                     <Button
//                         className={!this.state.isAdded ? "" : "added"}
//                         type="button"
//                         onClick={this.addToCart.bind(
//                           this,
//                           order_date,
//                           person_id,
//                           menu_item_id,
//                           chef_id,
//                           price,
//                           quantity,
//                           title
//                         )}
//                       >
//                         {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
//                       </Button>
//                     </CardActions>
//                 </Card>
//             </div>
  
//          )});
//     return (
//       <div className="product">
//         {menuCard}
//       </div>
//     );
//   }
// }

// const mapStateToProps = reduxState => ({
//     address: reduxState.address,
//     user: reduxState.user,
//     orders: reduxState.orders,
//     menu: reduxState.menu,
// });

// export default connect(mapStateToProps)(HireListItem);

{/* <Carousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
                <CarouselInner className="carousel-image">
                  <CarouselItem className="carousel-image" itemId="1">
                    <View>
                      <img className="d-block w-100" src="/images/stone-burger.jpg" alt="First slide" />
                      <Mask overlay="black-light" />
                    </View>
                    <CarouselCaption>
                      <h3 className="h3-responsive">Light mask</h3>
                      <p>First text</p>
                    </CarouselCaption>
                  </CarouselItem >
                  <CarouselItem className="carousel-image" itemId="2">
                    <View>
                      <img className="d-block w-100" src="/images/three-pigs-pizza.jpg" alt="Second slide" />
                      <Mask overlay="black-strong" />
                    </View>
                    <CarouselCaption>
                      <h3 className="h3-responsive">Strong mask</h3>
                      <p>Second text</p>
                    </CarouselCaption>
                  </CarouselItem>
                  <CarouselItem className="carousel-image" itemId="3">
                    <View>
                      <img className="d-block w-100" src="/images/taco-billy.jpg" alt="Third slide" />
                      <Mask overlay="black-slight" />
                    </View>
                    <CarouselCaption>
                      <h3 className="h3-responsive">Slight mask</h3>
                      <p>Third text</p>
                    </CarouselCaption>
                  </CarouselItem>
                </CarouselInner>
                    </Carousel> */}


// <Carousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
//               <CarouselInner>
//                 <CarouselItem itemId="1">
//                   <View>
//                     <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
//                     <Mask overlay="black-light" />
//                   </View>
//                   <CarouselCaption>
//                     <h3 className="h3-responsive">Light mask</h3>
//                     <p>First text</p>
//                   </CarouselCaption>
//                 </CarouselItem>
//                 <CarouselItem itemId="2">
//                   <View>
//                     <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
//                     <Mask overlay="black-strong" />
//                   </View>
//                   <CarouselCaption>
//                     <h3 className="h3-responsive">Strong mask</h3>
//                     <p>Second text</p>
//                   </CarouselCaption>
//                 </CarouselItem>
//                 <CarouselItem itemId="3">
//                   <View>
//                     <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
//                     <Mask overlay="black-slight" />
//                   </View>
//                   <CarouselCaption>
//                     <h3 className="h3-responsive">Slight mask</h3>
//                     <p>Third text</p>
//                   </CarouselCaption>
//                 </CarouselItem>
//                 <CarouselItem itemId="4">
//                   <View>
//                     <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
//                     <Mask overlay="black-light" />
//                   </View>
//                   <CarouselCaption>
//                     <h3 className="h3-responsive">Sopot Beach</h3>
//                     <p>Taken june 21th by @mattonit</p>
//                   </CarouselCaption>
//                 </CarouselItem>
//               </CarouselInner>
//             </Carousel>

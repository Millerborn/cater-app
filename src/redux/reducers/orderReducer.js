const orderReducer = (state={cart: [], total: 0, people: 0}, action) => {
    switch (action.type) {
      case 'GET_ORDER':
        let total = 0;
        let cart = action.payload;
        for (let i = 0; i < cart.length; i++) {
          total += cart[i].price * parseInt(cart[i].quantity);
        };
        console.log('cart total', total);
        let people = 0;
        let quantity = action.payload;
        for (let i = 0; i < quantity.length; i++) {
          people += quantity[i].quantity;
        };
        console.log('people total', people);
        return {cart: action.payload, total: total, people: people};
      default:
        return state;
    }
  };

export default orderReducer;
  
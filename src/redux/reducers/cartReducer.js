const cartReducer = (state=[], action) => {
    console.log('orderReducer', action.payload);
    switch (action.type) {
      case 'ADD_ORDER_TO_CART':
        return [action.payload];
      default:
        return state;
    }
  };

export default cartReducer;
  
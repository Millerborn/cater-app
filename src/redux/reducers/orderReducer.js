const orderReducer = (state=[], action) => {
    switch (action.type) {
      case 'GET_ORDER':
        return action.payload;
      default:
        return state;
    }
  };
  
  // chefs will be on the redux state at:
  // props.chefs
  export default orderReducer;
  
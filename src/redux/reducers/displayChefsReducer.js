const displayChefsReducer = (state=[], action) => {
    switch (action.type) {
      case 'GET_CHEFS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // chefs will be on the redux state at:
  // props.chefs
  export default displayChefsReducer;
  
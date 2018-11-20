const menuReducer = (state=[], action) => {
    switch (action.type) {
      case 'GET_MENU':
        return action.payload;
      default:
        return state;
    }
  };
  
  // chefs will be on the redux state at:
  // props.chefs
  export default menuReducer;
  
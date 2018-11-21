const address = (state = [], action) => {
    switch (action.type) {
      case 'GET_ADDRESS':
        return action.payload;
      default:
        return state;
    }
  }
  
  export default address;
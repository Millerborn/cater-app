const address = (state = [], action) => {
    switch (action.type) {
      case 'SET_ADDRESS':
        return action.payload;
      default:
        return state;
    }
  }
  
  export default address;
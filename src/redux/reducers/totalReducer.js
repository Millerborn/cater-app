const totalReducer = (state=[], action) => {
    switch (action.type) {
      case 'UPDATE_TOTAL':
        return action.payload;
      default:
        return state;
    }
  };

export default totalReducer;
  
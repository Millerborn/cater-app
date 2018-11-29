const quantityReducer = (state=[], action) => {
    switch (action.type) {
      case 'UPDATE_QUANTITY':
        return action.payload;
      default:
        return state;
    }
  };

export default quantityReducer;
  
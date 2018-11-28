import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

// add order to database 
function* addOrder(action) {
    const actionResponse = action.payload.address_id;
    console.log('Add order Saga: ', action.payload.address_id);
    try {
      yield call(axios.post, '/add-order', action.payload);
      const response = yield call (axios.get, `/checkout/${actionResponse}`);
      yield put( { type: 'GET_ORDER', payload: response.data } );
    }
    catch(error) {
      console.log('Error in adding order generator', error);
    }
}

function* removeItem(action){
  console.log('remove item: ', action.payload);
  const itemId = action.payload;
  try {
    yield call(axios.delete, `/add-order/${itemId}`);
    const response = yield call (axios.get, `/checkout/${itemId}`);
      yield put( { type: 'GET_ORDER', payload: response.data } );
  }
  catch(error) {
    console.log('error with delete request', error);
  }
}

function* getOrders(action) {
  console.log('getting orders generator: ', action.payload);
  try {
    const response = yield call(axios.get, '/checkout');
    yield put( { type: 'GET_ORDERS', payload: response.data } ); 
  }
  catch(error) {
    console.log('Error in fetch items generator', error);
  }
}

function* orderSaga() {
    yield takeEvery('ADD_TO_CART', addOrder);
    yield takeEvery('REMOVE_FROM_CART', removeItem)
    yield takeEvery('GET_ALL_ORDERS', getOrders)
}

export default orderSaga;
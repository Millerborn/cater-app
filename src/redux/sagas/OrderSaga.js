import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

// add order to database 
function* addOrder(action) {
    console.log('Add order Saga: ', action.payload);
    try {
      yield call(axios.post, '/add-order', action.payload);
      yield put( { type: 'GET_ORDER', payload: action.payload } );
    }
    catch(error) {
      console.log('Error in adding order generator', error);
    }
}

function* orderSaga() {
    yield takeEvery('ADD_TO_CART', addOrder);
}

export default orderSaga;
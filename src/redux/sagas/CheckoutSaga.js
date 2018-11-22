import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

function* fetchCheckout(action) {
    console.log('payload of order info', action.payload);
  try {
    const response = yield call (axios.get, `/checkout/${action.payload}`);
    console.log('address response', response.data);
    yield put({ type: 'GET_ORDER', payload: response.data });    
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* orderInfo(action) {
    // console.log('payload of order info', action.payload);
    try {
        const response = yield call(axios.get, `/checkout/${action.payload}`);
        yield put( { type: 'GET_ORDER', payload: response.data } ); 
    } catch(error) {
        console.log('error in order info', error);
    }
}

function* displayAddressSaga() {
  yield takeLatest('FETCH_CHECKOUT', fetchCheckout);
  yield takeLatest('SEND_ORDER_ID', orderInfo);
}

export default displayAddressSaga;

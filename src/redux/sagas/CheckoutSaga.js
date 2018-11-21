import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchAddress() {
  try {
    const response = yield axios.get('/checkout');
    console.log('address response', response.data);
    
    yield put({ type: 'GET_ADDRESS', payload: response.data });
    console.log('response data', response.data);
    
  } catch (error) {
      alert('Unable to get address');
    console.log('User get request failed', error);
  }
}

function* displayAddressSaga() {
  yield takeLatest('FETCH_ADDRESS', fetchAddress);
}

export default displayAddressSaga;

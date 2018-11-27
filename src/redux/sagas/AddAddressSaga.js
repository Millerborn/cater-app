import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

// add Item to database 
function* addAddress(action) {
    console.log('Add Address Saga: ', action.payload);
    try {
      yield call(axios.post, '/display-chef', action.payload);
      yield put( { type: 'GET_ADDRESS', payload: action.payload } );
    }
    catch(error) {
      console.log('Error in adding address generator', error);
    }
}

function* findAddress(action) {
  console.log('GET Address Saga: ', action.payload);
  try {
    const response = yield axios.get(`/customer-information/${action.payload}`);
    yield put({ type: 'GET_ADDRESS', payload: response.data });
    console.log('response data', response.data);
    
  } catch (error) {
      alert('Unable to get user address');
    console.log('User get request failed', error);
  }
}

function* AddressSaga() {
    yield takeEvery('ADD_ADDRESS', addAddress);
    yield takeEvery('FIND_ADDRESS', findAddress);
}

export default AddressSaga;
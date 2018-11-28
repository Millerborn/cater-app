import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

// add Item to database 
function* addAddress(action) {
    try {
      yield call(axios.post, '/display-chef', action.payload);
      yield put( { type: 'GET_ADDRESS', payload: action.payload } );
    }
    catch(error) {
      console.log('Error in adding address generator', error);
    }
}

function* findAddress(action) {
  try {
    const response = yield axios.get(`/customer-information/${action.payload}`);
    yield put({ type: 'GET_ADDRESS', payload: response.data });
  } catch (error) {
      alert('Unable to get user address');
    console.log('User get request failed', error);
  }
}

function* editAddress(action) {
  console.log('edit address', action.payload);
  try {
    yield call(axios.put, '/customer-information', action.payload);
    yield put( { type: 'GET_ADDRESS' } )
  }
  catch(error) {
    console.log('error editing address', error);
  }
}

function* AddressSaga() {
    yield takeEvery('ADD_ADDRESS', addAddress);
    yield takeEvery('FIND_ADDRESS', findAddress);
    yield takeEvery('EDIT_ADDRESS', editAddress);
}

export default AddressSaga;
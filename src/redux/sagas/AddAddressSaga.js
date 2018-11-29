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
  const addressUpdate = action.payload.id
  try {
    yield call(axios.put, `/edit-address/${addressUpdate}`, action.payload);
    const response = yield axios.get(`/customer-information/${addressUpdate}`);
    yield put({ type: 'GET_ADDRESS', payload: response.data });  
  }
  catch(error) {
    console.log('error editing address', error);
  }
}

function* editCustomer(action) {
  console.log('edit customer', action.payload);
  const customerUpdate = action.payload.id
  console.log('edit customer', customerUpdate);
  try {
    yield call(axios.put, `/edit-customer/${customerUpdate}`, action.payload);
    const response = yield axios.get(`/customer-information/${customerUpdate}`);
    yield put({ type: 'GET_ADDRESS', payload: response.data });  
  }
  catch(error) {    
    console.log('error editing address', error);
  }
}

function* AddressSaga() {
    yield takeEvery('ADD_ADDRESS', addAddress);
    yield takeEvery('FIND_ADDRESS', findAddress);
    yield takeEvery('EDIT_ADDRESS', editAddress);
    yield takeEvery('EDIT_CUSTOMER', editCustomer);
}

export default AddressSaga;
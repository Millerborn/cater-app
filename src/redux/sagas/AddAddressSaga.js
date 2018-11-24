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

function* getAddress(action) {
  console.log('get address payload', action.payload);
  try {
    yield call(axios.get, '/customer-address', action.payload);
    yield put({type: 'GET_ADDRESS', payload: action.payload});
  }
  catch(error) {
    console.log('error getting users address', error);
    
  }
}

function* setAddress(action) {
  console.log('Set Address Saga', action.payload);
  try {
    yield call(axios.put, `/checkout`, action.payload);
    yield put( { type: 'GET_ADDRESS', payload: action.payload } )
  }
  catch(error) {
    console.log('Error editing address', error);
  }
}

function* AddressSaga() {
    yield takeEvery('ADD_ADDRESS', addAddress);
    yield takeEvery('GET_CUSTOMER_ADDRESS', getAddress)
    yield takeEvery('SET_ADDRESS', setAddress);
}

export default AddressSaga;
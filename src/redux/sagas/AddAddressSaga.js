import axios from 'axios';
import { call, takeEvery } from 'redux-saga/effects';

// add Item to database 
function* addAddress(action) {
    console.log('Add Address Saga: ', action.payload);
    try {
      yield call(axios.post, '/display-chef', action.payload);
    }
    catch(error) {
      console.log('Error in adding address generator', error);
    }
}

function* AddressSaga() {
    yield takeEvery('ADD_ADDRESS', addAddress);
}

export default AddressSaga;
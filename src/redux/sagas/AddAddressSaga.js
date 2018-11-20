import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

// add Item to database 
function* addAddress(action) {
    console.log('Add Address generator: ', action);
    try {
      yield call(axios.post, '/display-chef', action.payload);
      yield put( { type: 'SET_ADDRESS' } );
    }
    catch(error) {
      console.log('Error in adding item generator', error);
    }
}

function* itemSaga() {
    yield takeEvery('ADD_ITEM', addAddress);
}

export default itemSaga;
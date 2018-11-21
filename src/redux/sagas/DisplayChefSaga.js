import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchChefs() {
  try {
    const response = yield axios.get('/display-chef');
    yield put({ type: 'GET_CHEFS', payload: response.data });
    console.log('response data', response.data);
    
  } catch (error) {
      alert('Unable to get chefs');
    console.log('User get request failed', error);
  }
}

function* displayChefsSaga() {
  yield takeLatest('FETCH_CHEFS', fetchChefs);
}

export default displayChefsSaga;

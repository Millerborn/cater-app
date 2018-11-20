import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchMenu() {
  try {
    const response = yield axios.get('/hire-chef');
    yield put({ type: 'GET_MENU', payload: response.data });
    console.log('response data', response.data);
    
  } catch (error) {
      alert('Unable to get chefs menu');
    console.log('User get request failed', error);
  }
}

function* menuSaga() {
  yield takeLatest('FETCH_MENU', fetchMenu);
}

export default menuSaga;

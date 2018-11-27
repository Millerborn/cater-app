import axios from 'axios';
import { put, call, takeEvery } from 'redux-saga/effects';

function* fetchMenu() {
    try {
      const response = yield axios.get(`/hire-chef`);
      console.log('response', response.data);
      yield put({ type: 'GET_MENU', payload: response.data });      
    } catch (error) {
      console.log('User get request failed', error);
    }
  }

function* menuId(action) {
  console.log('payload', action.payload);
  try {
    const response = yield call(axios.get, `/hire-chef/${action.payload}`);
    yield put( { type: 'GET_MENU', payload: response.data } );
  } catch(error) {
    console.log('error in menuId', error);
  }
}

function* menuSaga() {
  yield takeEvery('FETCH_MENU', fetchMenu);
  yield takeEvery('SEND_MENU_ID', menuId);
}

export default menuSaga;
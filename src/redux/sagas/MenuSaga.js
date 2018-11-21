
import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchMenu(action) {
    try {
      const response = yield axios.get(`/hire-chef/${action.payload}`);
      yield put({ type: 'GET_CHEFS', payload: response.data });
      console.log('response data', response.data);
      
    } catch (error) {
        alert('Unable to get chefs menu');
      console.log('User get request failed', error);
    }
  }

function* menuId(action) {
  console.log('payload', action.payload);
  
  try {
    const response = yield call(axios.get, `/hire-chef/${action.payload}`);
    yield put({ type: 'GET_MENU', payload: response.data });
  } catch(error) {
    console.log('error in menuId', error);
  }
}

function* menuSaga() {
  yield takeLatest('FETCH_MENU', fetchMenu);
  yield takeLatest('SEND_MENU_ID', menuId);
}

export default menuSaga;

// import axios from 'axios';
// import { put, takeLatest } from 'redux-saga/effects';

// // worker Saga: will be fired on "FETCH_USER" actions
// function* fetchMenu() {
//   try {
//     const response = yield axios.get('/hire-chef');
//     yield put({ type: 'GET_MENU', payload: response.data });
//     console.log('response data', response.data);
    
//   } catch (error) {
//       alert('Unable to get chefs menu');
//     console.log('User get request failed', error);
//   }
// }

// function* menuSaga() {
//   yield takeLatest('FETCH_MENU', fetchMenu);
// }

// export default menuSaga;

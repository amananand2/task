import { put, takeEvery, all, call } from 'redux-saga/effects';
import actionTypes from "./types";
import {formSubmitStart,formSubmitFailed,formSubmitSuccess} from "./action";


function* helloSaga() {
  console.log('Hello Sagas!')
}

function* watchformSubmitStart() {
  yield takeEvery(actionTypes.FORM_SUBMIT_START, fetchFormAsync);
}

function* fetchFormAsync({payload}) {
  try {
   
    yield put(formSubmitSuccess(payload));
  } catch (error) {
    yield put(formSubmitFailed(error));
  }
}
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchformSubmitStart()
  ])
}
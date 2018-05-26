import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  IQueryComments,
  queryCommentsError,
  queryCommentsSuccess
} from './action'
import { QUERY_COMMENTS } from './constant'


function* doQueryComments(action: IQueryComments) {

  const response = yield call([axios, 'get'], '/api/documents');
  if (response.error) {
    yield put(queryCommentsError(response.error));
    return;
  }
  yield put(queryCommentsSuccess(response.data));
}

export default function* queryTrendingWatcher() {
  yield takeLatest(QUERY_COMMENTS, doQueryComments);
}
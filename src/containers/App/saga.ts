import { all, fork } from "redux-saga/effects"
import homePageWatcher from  '../HomePage/saga'

export default function* rootSaga() {
  yield all([
    fork(homePageWatcher)
  ]);
}

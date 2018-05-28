import ApolloClient from "apollo-boost"
import gql from "graphql-tag"
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  IQueryProfile,
  queryProfileError,
  queryProfileSuccess
} from './action'
import { QUERY_PROFILE } from './constant'

const client = new ApolloClient({
  uri: "/graphql"
});

function* doQueryProfile(action: IQueryProfile) {
  const response = yield call([client, 'query'], {
    query: gql`
      {
        profile {
          basic {
            name
          }
          skills 
          experiences {
            companyName
          }
          contact {
            value
          }
        }
      }
    `
  });
  if (response.error) {
    yield put(queryProfileError(response));
    return;
  }
  yield put(queryProfileSuccess(response));
}

export default function* queryTrendingWatcher() {
  yield takeLatest(QUERY_PROFILE, doQueryProfile);
}
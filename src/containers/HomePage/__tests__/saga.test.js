import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import {
  QUERY_PROFILE
} from '../constant';
import {
  queryProfile,
  queryProfileSuccess,
  queryProfileError
} from '../action';
import homePageSaga from '../saga';
import homePageReducer from '../reducer';
import { fromJS } from 'immutable'

it('It should return success', () => {
  const responseData = { 
    data: {
      profile: {
        basic: {
          name: 'Hung Thai'
        }
      }
    }
  };
  return expectSaga(homePageSaga)
    .provide({
      call({ fn, args: [arg] }, next) {
        return responseData;
      },
    })
    .withReducer(homePageReducer)
    .put(queryProfileSuccess(responseData))
    .dispatch(queryProfile())
    .run()
    .then(result => {
      expect(result.storeState).toEqual(fromJS({
        profile: responseData.data.profile,
        profileLoading: false
      }))
    });
});

it('It should return error', () => {
  const responseData = { 
    error: true
  };
  return expectSaga(homePageSaga)
    .provide({
      call({ fn, args: [arg] }, next) {
        return responseData;
      },
    })
    .withReducer(homePageReducer)
    .put(queryProfileError(responseData))
    .dispatch(queryProfile())
    .run()
    .then(result => {
      expect(result.storeState).toEqual(fromJS({
        profile: null,
        profileLoading: false
      }))
    });
});


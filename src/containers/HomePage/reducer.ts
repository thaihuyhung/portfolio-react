import { fromJS } from 'immutable'
import { Map as ImmutableMap } from 'immutable'
import { HomePageAction } from './action'
import {
  QUERY_PROFILE,
  QUERY_PROFILE_ERROR,
  QUERY_PROFILE_SUCCESS
} from './constant'

export type HomePageStoreState = ImmutableMap<string, object | boolean>;
const initialState: HomePageStoreState = fromJS({
  profile: {},
  profileLoading: true
});


function homePageReducer(state: HomePageStoreState = initialState, action: HomePageAction) {
  switch (action.type) {
    case QUERY_PROFILE:
      return state
        .set('profileLoading', true);
    case QUERY_PROFILE_SUCCESS:
      return state
        .set('profileLoading', false)
        .set('profile', fromJS(action.response.data.profile));
    case QUERY_PROFILE_ERROR:
      return state
        .set('profileLoading', false)
        .set('profile', fromJS(null));
    default:
      return state;
  }
}

export default homePageReducer;
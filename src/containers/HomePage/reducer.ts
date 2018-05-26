import { fromJS } from 'immutable'
import { Map as ImmutableMap } from 'immutable'
import { HomePageAction } from './action'
import {
  QUERY_COMMENTS,
  QUERY_COMMENTS_ERROR,
  QUERY_COMMENTS_SUCCESS
} from './constant'

export type HomePageStoreState = ImmutableMap<string, object | boolean>;
const initialState: HomePageStoreState = fromJS({
  comments: [],
  commentsLoading: true
});


function trendingReducer(state: HomePageStoreState = initialState, action: HomePageAction) {
  switch (action.type) {
    case QUERY_COMMENTS:
      return state
        .set('commentsLoading', true);
    case QUERY_COMMENTS_SUCCESS:
      return state
        .set('commentsLoading', false)
        .set('comments', fromJS(action.data));
    case QUERY_COMMENTS_ERROR:
      return state
        .set('commentsLoading', false)
        .set('comments', fromJS(null));
    default:
      return state;
  }
}

export default trendingReducer;
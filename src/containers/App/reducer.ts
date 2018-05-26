import { fromJS } from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'
import { combineReducers } from 'redux-immutable'
import homePageReducer from '../HomePage/reducer'
/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  location: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action: any) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default combineReducers({
  home: homePageReducer,
  route: routeReducer,
});
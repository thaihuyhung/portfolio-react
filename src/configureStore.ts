import { History } from 'history';
import { fromJS } from 'immutable'
import { routerMiddleware } from 'react-router-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from  './containers/App/reducer'

export default function configureStore(initialState: any, history: History): any {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    fromJS(initialState),
    compose(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history)
      ),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
  return {
    ...store,
    close: () => store.dispatch(END),
    runSaga: sagaMiddleware.run
  }
}
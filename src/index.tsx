import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import createHistory from 'history/createBrowserHistory'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router } from 'react-router'
import configureStore from './configureStore'
import rootSaga from './containers/App/saga'
import HomePage from './containers/HomePage'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

store.runSaga(rootSaga);

const theme = createMuiTheme({
  palette: {
    error: red,
    primary: blue,
    secondary: pink,
  },
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={HomePage} />
      </Router>
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('root'));
registerServiceWorker();
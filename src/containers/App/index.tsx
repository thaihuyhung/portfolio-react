import blue from '@material-ui/core/colors/blue'
import pink from '@material-ui/core/colors/pink'
import red from '@material-ui/core/colors/red'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../HomePage'

const theme = createMuiTheme({
  palette: {
    error: red,
    primary: blue,
    secondary: pink,
  },
})

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}
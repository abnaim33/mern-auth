import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext'
import Routes from './Routes';

class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <Switch>


          <AuthContextProvider>
            <Route path="/">
              <Routes />
            </Route>

          </AuthContextProvider>

        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
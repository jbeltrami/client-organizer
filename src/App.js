import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Dashboard from './components/Dashboard';

const App = props => {
  const auth = useSelector(state => state.firebase.auth);

  const renderApp = authData => {
    if (authData.isLoaded)
      return (
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </div>
        </BrowserRouter>
      );

    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };

  return renderApp(auth);
};

export default App;

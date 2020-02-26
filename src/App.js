import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Components
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import SignUp from './components/auth/SignUp';
import CreateClient from './components/clients/CreateClient';

const App = props => {
  const auth = useSelector(state => state.firebase.auth);

  const renderApp = authData => {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/create-client" component={CreateClient} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };

  return renderApp(auth);
};

export default App;

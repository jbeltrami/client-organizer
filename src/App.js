import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import Navbar from "./components/Navbar";
import SignUp from "./components/auth/SignUp";
import CreateClient from "./components/clients/CreateClient";
import AllClients from "./components/clients/AllClients";
import SingleClient from "./components/clients/SingleClient";
import DeleteClient from "./components/clients/DeleteClient";
import UpdateClient from "./components/clients/UpdateClient";
import CreateService from "./components/services/CreateService";
import SignIn from "./components/auth/SignIn";
import UpdateService from "./components/services/UpdateService";
import DeleteService from "./components/services/DeleteService";

const App = props => {
  const auth = useSelector(state => state.firebase.auth);

  const renderApp = authData => {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={AllClients} />
            <Route exact path='/sign-up' component={SignUp} />
            <Route exact path='/sign-in' component={SignIn} />
            <Route exact path='/create-client' component={CreateClient} />
            <Route exact path='/clients' component={AllClients} />
            <Route exact path='/client/:id' component={SingleClient} />
            <Route exact path='/delete-client/:id' component={DeleteClient} />
            <Route exact path='/update-client/:id' component={UpdateClient} />
            <Route exact path='/create-service/:id' component={CreateService} />
            <Route exact path='/update-service/:id' component={UpdateService} />
            <Route exact path='/delete-service/:id' component={DeleteService} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };

  return renderApp(auth);
};

export default App;

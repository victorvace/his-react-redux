import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./login/login";
import Dashboard from "./dashboard/dashboard";
import CreateUser from "./createUser/createUser";
import PatientsLists from "./patientList/patientsList";
import PatientDetail from "./patientsDetail/patientDetail";
import Histories from './histories/histories';
import HistoryDetail from './historyDetail/historyDetail';
import NotFound from "./notFound";

import { Provider } from "react-redux";
import store from './store';

class App extends Component {
  render() {
    return  (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
              <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/dashboard" component={Dashboard} exact />
                <Route path="/createUser" component={CreateUser} exact />
                <Route path="/patientsList" component={PatientsLists} exact />
                <Route path="/histories" component={Histories} exact />
                <Route path="/patientDetail/:uid" component={PatientDetail} exact />
                <Route path="/historyDetail/:uid" component={HistoryDetail} exact />
                <Redirect path="/entrar" to="/login" />
                <Route component={NotFound} />
              </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;

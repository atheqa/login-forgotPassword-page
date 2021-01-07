import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ForgotPasswordView,
  LoginView,
} from './views'; /* 
import SecureRoute from './SecureRoute'; */
import { Interceptors } from './interceptors';

export default function App() {
  return (
    <Router>
      <Interceptors />
      <Switch>
        <Route path="/login" component={LoginView} />
        <Route path="/forgot" component={ForgotPasswordView} />
        <Route exact path="/" component={LoginView} />
        {/* 
        <SecureRoute path="/apply" component={ApplicationView} /> */}
      </Switch>
    </Router>
  );
}

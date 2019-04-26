import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginForm from '../components/LoginForm/LoginForm';
import RegisterForm from '../components/RegisterForm/RegisterForm';

const propTypes = {};

const defaultProps = {};

const App = () => (
  <Router>
    <div className="poup popup__container">
      <Switch>
        <Route path="/login" exact component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </Switch>
    </div>
  </Router>
);

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;

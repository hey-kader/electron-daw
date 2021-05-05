import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.css';

import { Register } from "./components/Register";
import { Login } from "./components/Login";

const Hello = () => {
  return (
    <div>

      <div className="wrapper-login">
	<br />
	<h1>
	    Login
	</h1>
      </div>
      <hr />
      <div className="wrapper-register">
	<h1>
	   Register 
	</h1>
	<br />
      </div>
    </div>
  );
};

export default function App() {
  return (
<>
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
</>
  );
}

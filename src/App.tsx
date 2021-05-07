import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.css';

import  Login from "./components/Login";
import  Register from "./components/Register";

const Home = () => {

    const [state, setState] = useState(0);

    return (
	<div className="home">
	    <Link to="/login">    
		<Login />
	    </Link>
	    <Link to="/register">    
		<Register />
	    </Link>
	</div>
    );
}

export default function App() {

  return (

<>
    <Router>
      <Switch>
         <Route path="/" component={Home} />
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
      </Switch>
    </Router>
</>

  )
}

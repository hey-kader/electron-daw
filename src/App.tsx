import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import icon from '../assets/icon.svg';
import './App.global.css';

import  Login from "./components/Login";
import  Register from "./components/Register";

const Home = () => {
    
    const [front, setFront] = useState(0);
    useEffect (() => {
        if (front) {
            document.getElementById('login-header').innerText = "Register"
            document.getElementById('register-header').innerText = "Login"
            ReactDOM.render (<Register />, document.getElementById('formset'))
        } 
        else {
            document.getElementById('login-header').innerText = "Login"
            document.getElementById('register-header').innerText = "Register"
            ReactDOM.render (<Login />, document.getElementById('formset'))
        }
    }, [front])

    function toggle () {
        setFront(!front);
        
    }

    return (
	<div className="home">
            <div id="landing">
                <h1 className="unselectable" id="login-header">Login</h1>
                <h3 className="unselectable" onClick={() => setFront(!front)} id="register-header">Register</h3>
            </div>
            <div id="formset">
            </div>
	</div>
    );
}

export default function App() {

  return (

<>
    <Router>
      <Switch>
         <Route path="/" component={Home} />
      </Switch>
    </Router>
</>

  )
}

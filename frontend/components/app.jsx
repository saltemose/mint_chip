import React from "react";
import { Link } from "react-router-dom";
import GreetingContainer from "./Greeting/greeting_container";
import { Route } from "react-router-dom";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';


const App = () => (
  <div>
     <header>
      <Link to="/" className="header-link">
        <h1>Rails App</h1>
      </Link>
      <GreetingContainer />
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;
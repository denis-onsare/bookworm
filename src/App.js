import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from "prop-types";
import HomePage from "./components/pages/HomePage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";

const App = ({location}) => (
<div  className="ui container">
  <Route location={location} path="/" exact component={ HomePage } />
  <GuestRoute location={location} path="/login" exact component={ Login } />
  <Route location={location} path="/signup" exact component={ Register } />
  <UserRoute location={location} path="/dashboard" exact component={ Dashboard } />
 
</div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

export default App;

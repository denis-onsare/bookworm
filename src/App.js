import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import HomePage from "./components/pages/HomePage";
import ConfirmationPage from "./components/pages/ConfirmationPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import ResetPasswordPage from "./components/pages/ResetPasswordPage";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Dashboard from "./components/pages/Dashboard";
import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";
import TopNavigation from "./components/navigation/TopNavigation";
import AddNewBookPage from "./components/pages/AddNewBookPage";

const App = ({location, isAuthenticated}) => (
<div  className="ui container">
  {isAuthenticated && <TopNavigation />}
  <Route location={location} path="/" exact component={ HomePage } />
  <Route location={location} path="/confirmation/:token" exact component={ ConfirmationPage } />
  <GuestRoute location={location} path="/forgot_password" exact component={ ForgotPasswordPage } />
  <GuestRoute location={location} path="/reset_password/:token" exact component={ ResetPasswordPage } />
  <GuestRoute location={location} path="/login" exact component={ Login } />
  <GuestRoute location={location} path="/signup" exact component={ Register } />
  <UserRoute location={location} path="/dashboard" exact component={ Dashboard } />
  <UserRoute location={location} path="/books/new" exact component={ AddNewBookPage } />
 
</div>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  }
}

export default connect(mapStateToProps)(App);

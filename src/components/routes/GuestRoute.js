import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

const GuestRoute = ({isAuthenticated, component: Component, ...rest}) => (
    <div>
        <Route {...rest} render={props => !isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />}/>
    </div>
);

GuestRoute.propType = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}
export default connect(mapStateToProps)(GuestRoute);
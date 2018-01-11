import React from 'react';
import LoginForm from "../forms/LoginForm";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class Login extends React.Component {
    submit = data =>
        this.props.login(data).then(() => this.props.history.push('/dashboard'));

    render () {
        return (
            <div>
                <h1>Login page</h1>
                <LoginForm submit={this.submit} />
            </div>
        );
    }
}

Login.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired
}

export default connect(null, {login})(Login);


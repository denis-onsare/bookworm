import React from 'react';
import SignupForm from "../forms/SignupForm";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signup } from '../../actions/user';

class Register extends React.Component {
    submit = data =>
        this.props.signup(data).then(() => this.props.history.push('/dashboard'));

    render () {
        return (
            <div>
                <h1>Sign Up page</h1>
                <SignupForm submit={this.submit} />
            </div>
        );
    }
}

Register.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    signup: PropTypes.func.isRequired
}

export default connect(null, {signup})(Register);
import React from 'react';
import {Message, Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {resetPasswordRequest} from '../../actions/auth';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';

class ForgotPasswordPage extends React.Component {
    state = {
        success: false
    }

    submit = (data) => 
        this.props
            .resetPasswordRequest(data)
            .then(() => this.setState({success: true}));

    render () {
        const {success} = this.state;
        return (
            <div>
                {success && <Message success icon>
                    <Icon name="checkmark" />
                    <Message.Header>Email has been sent</Message.Header>
                </Message>}

                {!success &&
                (<ForgotPasswordForm submit={this.submit}/>
                )}
            </div>
        );
    }
}

ForgotPasswordPage.propTypes = {
    resetPasswordRequest: PropTypes.func.isRequired
}

export default connect(null, {resetPasswordRequest})(ForgotPasswordPage);
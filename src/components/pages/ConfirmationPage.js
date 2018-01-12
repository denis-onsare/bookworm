import React from 'react';
import { Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { confirm } from '../../actions/auth';

class ConfirmationPage extends React.Component {
    state = {
        loading: true,
        success: false
    }

    componentDidMount() {
        this.props.confirm(this.props.match.params.token)
        .then(() => this.setState({loading: false, success: true}))
        .catch(() => this.setState({loading: false, success: false}));
    }

    render () {
        const {loading, success} = this.state;
        return (
            <div>
                {loading && (
                    <Message icon>
                        <Icon name="circle notched" loading></Icon>
                        <Message.Header>Validating your email</Message.Header>
                    </Message>
                )}

                {!loading && success && 
                    <Message success icon>
                        <Icon name="checkmark"></Icon>
                        <Message.Content>
                            <Message.Header>Thank you. Your email has been verified</Message.Header>
                            <Link to="/dashboard">Go to your dashboard</Link>
                        </Message.Content>
                    </Message>
                }

                {!loading && !success && 
                    <Message negative icon>
                        <Icon name="warning sign" ></Icon>
                        <Message.Content>
                            <Message.Header>Oops! This token has expired</Message.Header>
                        </Message.Content>
                    </Message>
                }
            </div>
        );
    }
}

ConfirmationPage.propTypes = {
    confirm: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            token: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default connect(null, { confirm })(ConfirmationPage);
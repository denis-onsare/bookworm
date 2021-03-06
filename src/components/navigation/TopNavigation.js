import React from 'react';
import { Menu, Dropdown, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import gravatarUrl from 'gravatar-url';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';
import PropTypes from 'prop-types';

const TopNavigation = ({user, logout}) => (
    <Menu secondary pointing>
        <Menu.Item as={Link} to="/dashboard">
            Dashboard
        </Menu.Item>
        <Menu.Menu position="right">
            <Dropdown trigger={<Image avatar src={gravatarUrl(user.email)} />}>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={ () => logout()}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    </Menu>
);

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

TopNavigation.propTypes = {
    user: PropTypes.shape({
        email: PropTypes.string.isRequired
    }).isRequired,
    logout: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {logout: actions.logout})(TopNavigation);
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as routes from '../../constants/routes';
import SignOutButton from '../SignOutButton/SignOutButton'

const Navigation = (props, { authenticatedUser }) => {
    return (
        <div className='navigation'>
            <ul>
                <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
                <li><Link to={routes.LANDING}>Landing</Link></li>
                <li><Link to={routes.HOME}>Home</Link></li>
                <li><Link to={routes.ACCOUNT}>Account</Link></li>
                {authenticatedUser ? <li className='sign-out'><SignOutButton /></li> : null}
            </ul>
        </div>
    );
}

Navigation.contextTypes = {
    authenticatedUser: PropTypes.object,
};

export default Navigation;
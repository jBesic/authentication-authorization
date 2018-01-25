import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { firebase } from '../../firebase';
import * as routes from '../../constants/routes';

const withAuthorization = (WrappedComponent) => {
    class WithAuthorization extends Component {
        componentDidMount() {
            firebase.auth.onAuthStateChanged(authenticatedUser => {
                if (!(!!authenticatedUser)) {
                    this.props.history.push(routes.SIGN_IN);
                }
            });
        }

        render() {
            return this.context.authenticatedUser ? <WrappedComponent /> : null;
        }
    }

    WithAuthorization.contextTypes = {
        authenticatedUser: PropTypes.object,
    }

    return withRouter(WithAuthorization);
}

export default withAuthorization;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { firebase } from '../../firebase'

const withAuthentication = (WrappedComponent) => {
    class WithAuthentication extends Component {
        state = {
            authenticatedUser: null
        };

        getChildContext() {
            return {
                authenticatedUser: this.state.authenticatedUser,
            };
        }

        componentDidMount() {
            firebase.auth.onAuthStateChanged(authenticatedUser => {
                authenticatedUser ? this.setState({ authenticatedUser: authenticatedUser }) : this.setState({ authenticatedUser: null });
            })
        }

        render() {
            return <WrappedComponent />;
        }
    }

    WithAuthentication.childContextTypes = {
        authenticatedUser: PropTypes.object,
    };

    return WithAuthentication;
}

export default withAuthentication;
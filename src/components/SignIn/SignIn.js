import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase'

import * as routes from '../../constants/routes';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
};

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;
        this.signinSubmitHandler = this.signinSubmitHandler.bind(this);
    }

    byPropertyKey(propertyKey, value) {
        return {
            [propertyKey]: value
        };
    }

    signinSubmitHandler(event) {
        event.preventDefault();

        auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
            .then(userSignedIn => {
                this.setState(INITIAL_STATE);
                this.props.history.push(routes.HOME);
            })
            .catch(signInError => {
                this.setState(this.byPropertyKey('error', signInError.message))
            });
    }

    render() {
        const isInvalid = this.state.email === '' || this.state.password === '';

        return (
            <div className='sign-in'>
                <h1>Sign In page</h1>

                <form onSubmit={this.signinSubmitHandler}>
                    {this.state.error ? <div className='error-message'>{this.state.error}</div> : null}
                    <div className='field-wrapper'>
                        <label>Email</label>
                        <input
                            type='text'
                            value={this.state.email}
                            onChange={event => { this.setState(this.byPropertyKey('email', event.target.value)) }} />
                    </div>
                    <div className='field-wrapper'>
                        <label>Password</label>
                        <input
                            type='text'
                            value={this.state.password}
                            onChange={event => { this.setState(this.byPropertyKey('password', event.target.value)) }} />
                    </div>

                    <div>
                        <button type='submit' disabled={isInvalid}>Sign In</button>
                        <button type='button' onClick={() => this.props.history.push(routes.SIGN_UP)}>Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignIn);
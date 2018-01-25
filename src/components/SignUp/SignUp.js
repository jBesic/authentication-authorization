import React, { Component } from 'react';
import { auth } from '../../firebase';
import { withRouter } from 'react-router-dom';

import * as routes from '../../constants/routes';

const INITIAL_STATE = {
    username: '',
    email: '',
    password: '',
    repeat_password: '',
    error: null
};

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = INITIAL_STATE;
        this.byPropertyKey = this.byPropertyKey.bind(this);
        this.signupSubmitHandler = this.signupSubmitHandler.bind(this);
    }

    byPropertyKey(propertyName, value) {
        return {
            [propertyName]: value
        }
    };

    signupSubmitHandler(event) {
        event.preventDefault();

        auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(authenticatedUser => {
                this.setState(INITIAL_STATE);
                this.props.history.push(routes.HOME);
            }).catch(signUpError => {
                this.setState(this.byPropertyKey('error', signUpError.message));
            });
    };

    render() {
        const isInvalid = this.state.password !== this.state.repeat_password || this.state.password === '' || this.state.email === '' || this.state.username === '' ? true : false;

        return (
            <div className='sign-up'>
                <h1>Sign Up page</h1>
                <form onSubmit={this.signupSubmitHandler}>
                    {this.state.error ? <div className='error-message'>{this.state.error}</div> : null}
                    <div className='field-wrapper'>
                        <label>Username</label>
                        <input
                            type='text'
                            value={this.state.username}
                            onChange={event => { this.setState(this.byPropertyKey('username', event.target.value)) }} />
                    </div>
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
                    <div className='field-wrapper'>
                        <label>Repeat password</label>
                        <input
                            type='text'
                            value={this.state.repeat_password}
                            onChange={event => { this.setState(this.byPropertyKey('repeat_password', event.target.value)) }} />
                    </div>

                    <div>
                        <button type='submit' disabled={isInvalid}>Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignUp);
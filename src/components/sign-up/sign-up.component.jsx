import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await  auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName});
            this.setState({displayName: '', email: '', password: '', confirmPassword: ''});
        } catch(error) {
            console.error(error);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName' 
                        value={displayName} 
                        type="text" 
                        handleChange={this.handleChange}
                        label='Display name'
                        required
                    />
                    <FormInput 
                        name='email' 
                        value={email} 
                        type="email" 
                        handleChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        value={password}
                        type="password"
                        handleChange={this.handleChange}
                        required
                        label='Password'
                    />
                    <FormInput
                        name='confirmPassword'
                        value={confirmPassword}
                        type="password"
                        handleChange={this.handleChange}
                        required
                        label='Confirm password'
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;
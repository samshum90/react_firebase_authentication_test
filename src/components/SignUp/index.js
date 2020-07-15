import React, { Component } from 'react';

import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom';

const SignUp = () => (
    <div>
        <h1>
            <SignUpForm />
        </h1>
    </div>
);

class SignUpForm extends Component {
    constructor(props) {
        super(props);
    }
    onSubmit = event =>{
        
    }
    onChange = event =>{

    };
    render() { 
        return ( 
            <form onSubmit={thi.onSubmit}>


            </form>
         );
    }
}

const SignUpLink = () => {
    return (  
        <p>
            Don't have an account <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </p>
    );
}
 
export default SignUp;
export { SignUpForm, SignUpLink };
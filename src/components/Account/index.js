import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import { withAuthorization } from '../Session';
import PasswordChangeForm from '../PasswordChange';

const Account = () => (
    <div>
        <h1>Account Page</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
    </div>
);

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Account);
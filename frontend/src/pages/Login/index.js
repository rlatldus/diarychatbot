import React from 'react';

import SignFrame from '../../components/Sign/SignFrame';
import LoginHeader from '../../components/Sign/LogInHeader';
import LoginBody from '../../components/Sign/LoginBody';

const Login = () => {
    return (
        <SignFrame>
            <LoginHeader />
            <LoginBody />
        </SignFrame>
    );
};

export default Login;

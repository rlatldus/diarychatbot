import React from 'react';

import SignFrame from '../../components/Sign/SignFrame';
import LoginHeader from '../../components/Sign/LogInHeader';
import LoginBody from '../../components/Sign/LoginBody';
import Loading from '../../components/@shared/Loading';

const Login = () => {
    return (
        <SignFrame>
            <LoginHeader />
            <LoginBody />
        </SignFrame>
    );
};

export default Login;

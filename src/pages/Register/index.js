import React, { useState } from 'react';

import Header from '../../components/@shared/Header';
import SignFrame from '../../components/Sign/SignFrame';
import RegistBody from '../../components/Sign/RegistBody';

const Register = () => {
    return (
        <SignFrame>
            <Header />
            <RegistBody />
        </SignFrame>
    );
};

export default Register;

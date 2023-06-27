import React from 'react';
import * as Styled from './style';

const LineSocialLogin = ({ label }) => {
    return (
        <Styled.Hr>
            <Styled.TextSocialLogin>{label}</Styled.TextSocialLogin>
        </Styled.Hr>
    );
};

export default LineSocialLogin;

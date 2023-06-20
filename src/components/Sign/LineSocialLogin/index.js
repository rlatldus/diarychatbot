import React from 'react';
import * as Styled from './style';

const LineSocialLogin = ({ label }) => {
    return (
        <Styled.Line>
            <Styled.Hr></Styled.Hr>
            <Styled.TextSocialLogin>{label}</Styled.TextSocialLogin>
            <Styled.Hr></Styled.Hr>
        </Styled.Line>
    );
};

export default LineSocialLogin;

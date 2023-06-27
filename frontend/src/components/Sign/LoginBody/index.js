import { Link } from 'react-router-dom';

import React from 'react';
import LineSocialLogin from '../LineSocialLogin';
import LoginSocialForm from '../LoginSocialForm';

import * as Styled from './style';
import LoginForm from '../LoginForm';

const LoginBody = () => {
    return (
        <Styled.ContentWrapper>
            <Styled.Content>
                <Styled.LogoCont>오늘 하루의 일기를 적어보세요</Styled.LogoCont>
                <LoginForm />

                <LineSocialLogin label="소셜로그인" />

                <LoginSocialForm />
                <Styled.RegistLink>
                    아직 회원이 아니신가요? <Link to="/regist"> 회원가입</Link>
                </Styled.RegistLink>
            </Styled.Content>
        </Styled.ContentWrapper>
    );
};

export default LoginBody;

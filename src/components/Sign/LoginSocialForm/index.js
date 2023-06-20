import React from 'react';
import Button from '../../@shared/Button';

import * as Styled from './style';

const LoginSocialForm = () => {
    return (
        <Styled.StyleForm>
            <Button google>google로 로그인</Button>
            <Button kakao>카카오계정으로 로그인</Button>
            <Button naver>네이버 아이디로 로그인</Button>
        </Styled.StyleForm>
    );
};

export default LoginSocialForm;

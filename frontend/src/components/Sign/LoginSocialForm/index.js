import React from 'react';
import Button from '../../@shared/Button';

import * as Styled from './style';

const LoginSocialForm = () => {
    return (
        <Styled.StyleForm>
            <a href="https://jintakim.shop/login/google">
                <Button type="button" google>
                    google로 로그인
                </Button>
            </a>
            <a href="https://jintakim.shop/login/kakao">
                <Button type="button" kakao>
                    카카오계정으로 로그인
                </Button>
            </a>
            <a href="https://jintakim.shop/login/naver">
                <Button type="button" naver>
                    네이버 아이디로 로그인
                </Button>
            </a>
        </Styled.StyleForm>
    );
};

export default LoginSocialForm;

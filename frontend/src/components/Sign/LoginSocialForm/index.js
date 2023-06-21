import React from 'react';
import Button from '../../@shared/Button';

import * as Styled from './style';
import { Link } from 'react-router-dom';

const LoginSocialForm = () => {
    return (
        <Styled.StyleForm>
            <Link to="https://jintakim.shop/login/google">
                <Button type="button" google>
                    google로 로그인
                </Button>
            </Link>
            <Link to="https://jintakim.shop/login/kakao">
                <Button type="button" kakao>
                    카카오계정으로 로그인
                </Button>
            </Link>
            <Link to="https://jintakim.shop/login/naver">
                <Button type="button" naver>
                    네이버 아이디로 로그인
                </Button>
            </Link>
        </Styled.StyleForm>
    );
};

export default LoginSocialForm;

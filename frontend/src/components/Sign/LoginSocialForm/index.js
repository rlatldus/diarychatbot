import { useSocialSignIn } from '../../../hooks/@query/useSocialSignIn';
import React, { useState } from 'react';
import Button from '../../@shared/Button';

import * as Styled from './style';
import { useNavigate } from 'react-router-dom';

const LoginSocialForm = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { mutate: SocialSignIn } = useSocialSignIn(setIsLoading, navigate);

    const onSubmit = (socialName) => {
        setIsLoading(true);
        SocialSignIn(socialName);
    };

    return (
        <Styled.StyleForm>
            <Button disabled={isLoading} onClick={() => onSubmit('google')} google>
                google로 로그인
            </Button>
            <Button disabled={isLoading} onClick={() => onSubmit('kakao')} kakao>
                카카오계정으로 로그인
            </Button>
            <Button disabled={isLoading} onClick={() => onSubmit('naver')} naver>
                네이버 아이디로 로그인
            </Button>
        </Styled.StyleForm>
    );
};

export default LoginSocialForm;
